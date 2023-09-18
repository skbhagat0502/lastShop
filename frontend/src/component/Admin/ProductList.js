import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./productList.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getSellerProducts,
  deleteProductSeller,
} from "../../actions/productAction";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { DELETE_PRODUCT_RESET_BY_SELLER } from "../../constants/productConstants";
import BasicModal from "../layout/Modal";

const ProductList = ({ history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { user } = useSelector((state) => state.user);

  const { error, products } = useSelector((state) => state.sellerProducts);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.product
  );
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const deleteProductHandler = (id) => {
    setSelectedProductId(id);
    setOpenModal(true);
  };
  const handleModalClose = () => {
    setOpenModal(false);
  };
  const handleConfirmation = () => {
    if (selectedProductId) {
      dispatch(deleteProductSeller(selectedProductId));
      setSelectedProductId(null);
      setOpenModal(false);
    }
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Product Deleted Successfully");
      history.push("/seller/dashboard");
      dispatch({ type: DELETE_PRODUCT_RESET_BY_SELLER });
    }

    dispatch(getSellerProducts());
  }, [dispatch, alert, error, deleteError, history, isDeleted, user._id]);

  const columns = [
    { field: "id", headerName: "Product ID", minWidth: 200, flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 350,
      flex: 1,
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "price",
      headerName: "Price",
      type: "number",
      minWidth: 270,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/seller/product/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deleteProductHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  products &&
    products.forEach((item) => {
      rows.push({
        id: item._id,
        stock: item.Stock,
        price: item.price,
        name: item.name,
      });
    });

  return (
    <Fragment>
      <MetaData title={`ALL PRODUCTS - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL PRODUCTS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
      <BasicModal
        text="Are you sure that you want to delete this product?"
        btnText1="No"
        btnText2="Yes"
        open={openModal}
        handleClose={handleModalClose}
        handleConfirmation={handleConfirmation}
      />
    </Fragment>
  );
};

export default ProductList;

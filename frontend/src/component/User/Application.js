import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";

import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
    width: "200px",
  },
  sectionTitle: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  alertTitle: {
    color: "red",
  },
}));

function Application() {
  const classes = useStyles();
  const alert = useAlert();
  const history = useHistory();

  const [formData, setFormData] = useState({
    fullName: "",
    fathersName: "",
    email: "",
    mobileNumber: "",
    address: "",
    dob: "",
    shopName: "",
    shopAddress: "",
    category: "",
    aadhaarCard: "",
    panCard: "",
    accountNumber: "",
    ifscCode: "",
    profileImage: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName) {
      newErrors.fullName = "Full Name is required";
    }

    if (!formData.aadhaarCard || formData.aadhaarCard.length !== 12) {
      newErrors.aadhaarCard = "Aadhaar Card must be 12 characters long";
    }

    if (!formData.mobileNumber || formData.mobileNumber.length !== 10) {
      newErrors.mobileNumber = "Mobile Number must be 10 characters long";
    }

    if (
      !/^[0-9]+$/.test(formData.aadhaarCard) ||
      !/^[0-9]+$/.test(formData.mobileNumber)
    ) {
      newErrors.aadhaarCard = "Aadhaar Card must contain only numbers";
      newErrors.mobileNumber = "Mobile Number must contain only numbers";
    }

    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid Email format";
    }

    const currentDate = new Date();
    const selectedDate = new Date(formData.dob);
    if (selectedDate > currentDate) {
      newErrors.dob = "Date of Birth cannot be in the future";
    }

    if (!formData.streetAddress) {
      newErrors.streetAddress = "Street Address is required";
    }

    if (!formData.city) {
      newErrors.city = "City is required";
    }

    if (!formData.state) {
      newErrors.state = "State is required";
    }

    if (!formData.postalCode) {
      newErrors.postalCode = "Postal Code is required";
    }

    if (!formData.country) {
      newErrors.country = "Country is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post("/api/v1/me/application", formData);
        console.log("Shopkeeper data saved:", response.data);
        localStorage.setItem("formData", JSON.stringify(formData));
        alert.success("Registration successful!");
        history.push("/status");
        setFormData({
          fullName: "",
          fathersName: "",
          email: "",
          mobileNumber: "",
          address: "",
          dob: "",
          shopName: "",
          shopAddress: "",
          category: "",
          aadhaarCard: "",
          panCard: "",
          accountNumber: "",
          ifscCode: "",
          profileImage: "",
          streetAddress: "",
          city: "",
          state: "",
          postalCode: "",
          country: "",
        });
      } catch (error) {
        console.error("Error saving shopkeeper data:", error);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography variant="h6" className={classes.alertTitle}>
        If you have already filled this form then do not need to fill it again.
        If your application is rejected then you can fill it.
      </Typography>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Box>
              <Typography variant="h6" className={classes.sectionTitle}>
                Shopkeeper's Basic Details
              </Typography>
              <TextField
                className={classes.textField}
                fullWidth
                type="text"
                label="Full Name*"
                variant="outlined"
                value={formData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                error={!!errors.fullName}
                helperText={errors.fullName}
              />
              <TextField
                className={classes.textField}
                fullWidth
                type="text"
                label="Father's Name*"
                variant="outlined"
                value={formData.fathersName}
                onChange={(e) => handleChange("fathersName", e.target.value)}
                error={!!errors.fathersName}
                helperText={errors.fathersName}
              />
              <TextField
                className={classes.textField}
                fullWidth
                type="email"
                label="Email Id*"
                variant="outlined"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                className={classes.textField}
                fullWidth
                type="number"
                label="Mobile Number*"
                variant="outlined"
                value={formData.mobileNumber}
                onChange={(e) => handleChange("mobileNumber", e.target.value)}
                error={!!errors.mobileNumber}
                helperText={errors.mobileNumber}
              />
              <TextField
                className={classes.textField}
                fullWidth
                type="text"
                label="Address*"
                variant="outlined"
                value={formData.address}
                onChange={(e) => handleChange("address", e.target.value)}
                error={!!errors.address}
                helperText={errors.address}
              />
              <TextField
                className={classes.textField}
                fullWidth
                type="date"
                label="Date of Birth*"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                value={formData.dob}
                onChange={(e) => handleChange("dob", e.target.value)}
                error={!!errors.dob}
                helperText={errors.dob}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box>
              <Typography variant="h6" className={classes.sectionTitle}>
                Shop Basic Details
              </Typography>
              <TextField
                className={classes.textField}
                fullWidth
                type="text"
                label="Shop Name"
                variant="outlined"
                value={formData.shopName}
                onChange={(e) => handleChange("shopName", e.target.value)}
                error={!!errors.shopName}
                helperText={errors.shopName}
              />
              <TextField
                className={classes.textField}
                fullWidth
                type="text"
                label="Shop Address"
                variant="outlined"
                value={formData.shopAddress}
                onChange={(e) => handleChange("shopAddress", e.target.value)}
                error={!!errors.shopAddress}
                helperText={errors.shopAddress}
              />
              <TextField
                className={classes.textField}
                fullWidth
                select
                label="Category"
                variant="outlined"
                SelectProps={{
                  native: true,
                }}
                value={formData.category}
                onChange={(e) => handleChange("category", e.target.value)}
                error={!!errors.category}
                helperText={errors.category}
              >
                <option value=""></option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                {/* Add more options */}
              </TextField>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box>
              <Typography variant="h6" className={classes.sectionTitle}>
                Other Details
              </Typography>

              <TextField
                className={classes.textField}
                fullWidth
                type="number"
                label="Aadhaar Card*"
                variant="outlined"
                value={formData.aadhaarCard}
                onChange={(e) => handleChange("aadhaarCard", e.target.value)}
                error={!!errors.aadhaarCard}
                helperText={errors.aadhaarCard}
              />
              <TextField
                className={classes.textField}
                fullWidth
                type="text"
                label="PAN Card*"
                variant="outlined"
                value={formData.panCard}
                onChange={(e) => handleChange("panCard", e.target.value)}
                error={!!errors.panCard}
                helperText={errors.panCard}
              />
              <TextField
                className={classes.textField}
                fullWidth
                type="number"
                label="Account Number*"
                variant="outlined"
                value={formData.accountNumber}
                onChange={(e) => handleChange("accountNumber", e.target.value)}
                error={!!errors.accountNumber}
                helperText={errors.accountNumber}
              />
              <TextField
                className={classes.textField}
                fullWidth
                type="text"
                label="IFSC Code*"
                variant="outlined"
                value={formData.ifscCode}
                onChange={(e) => handleChange("ifscCode", e.target.value)}
                error={!!errors.ifscCode}
                helperText={errors.ifscCode}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="h6" className={classes.sectionTitle}>
                Address Details
              </Typography>
              <TextField
                className={classes.textField}
                fullWidth
                type="text"
                label="Street Address*"
                variant="outlined"
                value={formData.streetAddress}
                onChange={(e) => handleChange("streetAddress", e.target.value)}
                error={!!errors.streetAddress}
                helperText={errors.streetAddress}
              />
              <TextField
                className={classes.textField}
                fullWidth
                type="text"
                label="City*"
                variant="outlined"
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
                error={!!errors.city}
                helperText={errors.city}
              />
              <TextField
                className={classes.textField}
                fullWidth
                type="text"
                label="State*"
                variant="outlined"
                value={formData.state}
                onChange={(e) => handleChange("state", e.target.value)}
                error={!!errors.state}
                helperText={errors.state}
              />
              <TextField
                className={classes.textField}
                fullWidth
                type="text"
                label="Postal Code*"
                variant="outlined"
                value={formData.postalCode}
                onChange={(e) => handleChange("postalCode", e.target.value)}
                error={!!errors.postalCode}
                helperText={errors.postalCode}
              />
              <TextField
                className={classes.textField}
                fullWidth
                type="text"
                label="Country*"
                variant="outlined"
                value={formData.country}
                onChange={(e) => handleChange("country", e.target.value)}
                error={!!errors.country}
                helperText={errors.country}
              />
            </Box>
          </Grid>
        </Grid>
        <Button
          className={classes.button}
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Application;

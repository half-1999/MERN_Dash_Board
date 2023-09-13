// import { Box, Button, TextField } from "@mui/material";
// import { Formik } from "formik";
// import * as yup from "yup";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import Header from "../../components/Header";

// const Form = () => {
//   const isNonMobile = useMediaQuery("(min-width:600px)");

//   const handleFormSubmit = (values) => {
//     console.log(values);
//   };

//   return (
//     <Box m="20px">
//       {/* <Header subtitle="Add New Book" /> */}
//       {/* <Header title="CREATE USER" subtitle="Create a New User Profile" /> */}

//       <Formik
//         onSubmit={handleFormSubmit}
//         initialValues={initialValues}
//         validationSchema={checkoutSchema}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleBlur,
//           handleChange,
//           handleSubmit,
//         }) => (
//           <form onSubmit={handleSubmit}>
//             <Box
//               display="grid"
//               gap="30px"
//               gridTemplateColumns="repeat(4, minmax(0, 1fr))"
//               sx={{
//                 "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
//               }}
//             >
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="First Name"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.firstName}
//                 name="firstName"
//                 error={!!touched.firstName && !!errors.firstName}
//                 helperText={touched.firstName && errors.firstName}
//                 sx={{ gridColumn: "span 2" }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Last Name"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.lastName}
//                 name="lastName"
//                 error={!!touched.lastName && !!errors.lastName}
//                 helperText={touched.lastName && errors.lastName}
//                 sx={{ gridColumn: "span 2" }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Email"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.email}
//                 name="email"
//                 error={!!touched.email && !!errors.email}
//                 helperText={touched.email && errors.email}
//                 sx={{ gridColumn: "span 4" }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Contact Number"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.contact}
//                 name="contact"
//                 error={!!touched.contact && !!errors.contact}
//                 helperText={touched.contact && errors.contact}
//                 sx={{ gridColumn: "span 4" }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Address 1"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.address1}
//                 name="address1"
//                 error={!!touched.address1 && !!errors.address1}
//                 helperText={touched.address1 && errors.address1}
//                 sx={{ gridColumn: "span 4" }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Address 2"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.address2}
//                 name="address2"
//                 error={!!touched.address2 && !!errors.address2}
//                 helperText={touched.address2 && errors.address2}
//                 sx={{ gridColumn: "span 4" }}
//               />
//             </Box>
//             <Box display="flex" justifyContent="end" mt="20px">
//               <Button type="submit" color="secondary" variant="contained">
//                 ADD
//               </Button>
//             </Box>
//           </form>
//         )}
//       </Formik>
//     </Box>
//   );
// };

// const phoneRegExp =
//   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// const checkoutSchema = yup.object().shape({
//   firstName: yup.string().required("required"),
//   lastName: yup.string().required("required"),
//   email: yup.string().email("invalid email").required("required"),
//   contact: yup
//     .string()
//     .matches(phoneRegExp, "Phone number is not valid")
//     .required("required"),
//   address1: yup.string().required("required"),
//   address2: yup.string().required("required"),
// });

// const initialValues = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   contact: "",
//   address1: "",
//   address2: "",
//   gender: "",
//   dob: "",
//   idNo: "",
//   bloodGroup: "",
//   religion: "",
//   class: "",
//   section: "",
//   shortBio: "",
//   image: null,
// };

// export default Form;

import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextareaAutosize,
} from "@mui/material";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
  gender: "",
  dob: "",
  idNo: "",
  bloodGroup: "",
  religion: "",
  class: "",
  section: "",
  shortBio: "",
  image: null,
};

export default function Form() {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleImageChange = (e) => {
    // Handle file upload for the image
    const file = e.target.files[0];
    setValues({ ...values, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form Values:", values);
    // You can send the form data to your server or perform any other actions here
    setValues(initialValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="grid"
        gap="30px"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        sx={{
          "& > div": {
            gridColumn: "span 4",
          },
        }}
      >
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          required
          style={{ width: "70%" }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          required
          style={{ width: "70%" }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
          style={{ width: "70%" }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Contact Number"
          name="contact"
          value={values.contact}
          onChange={handleChange}
          required
          style={{ width: "70%" }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Address 1"
          name="address1"
          value={values.address1}
          onChange={handleChange}
          required
          style={{ width: "70%" }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Address 2"
          name="address2"
          value={values.address2}
          onChange={handleChange}
          required
          style={{ width: "70%" }}
        />
        <FormControl
          fullWidth
          variant="filled"
          required
          style={{ width: "70%" }}
        >
          <InputLabel>Gender</InputLabel>
          <Select name="gender" value={values.gender} onChange={handleChange}>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          variant="filled"
          type="date"
          label="Date of Birth"
          name="dob"
          value={values.dob}
          onChange={handleChange}
          required
          style={{ width: "70%" }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="ID No"
          name="idNo"
          value={values.idNo}
          onChange={handleChange}
          required
          style={{ width: "70%" }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Blood Group"
          name="bloodGroup"
          value={values.bloodGroup}
          onChange={handleChange}
          required
          style={{ width: "70%" }}
        />
        <FormControl
          fullWidth
          variant="filled"
          required
          style={{ width: "70%" }}
        >
          <InputLabel>Religion</InputLabel>
          <Select
            name="religion"
            value={values.religion}
            onChange={handleChange}
          >
            <MenuItem value="hindu">Hindu</MenuItem>
            <MenuItem value="christian">Christian</MenuItem>
            <MenuItem value="muslim">Muslim</MenuItem>
            {/* Add more religion options */}
          </Select>
        </FormControl>
        <FormControl
          fullWidth
          variant="filled"
          required
          style={{ width: "70%" }}
        >
          <InputLabel>Class</InputLabel>
          <Select name="class" value={values.class} onChange={handleChange}>
            <MenuItem value="1">Class 1</MenuItem>
            <MenuItem value="2">Class 2</MenuItem>
            {/* Add more class options */}
          </Select>
        </FormControl>
        <FormControl
          fullWidth
          variant="filled"
          required
          style={{ width: "70%" }}
        >
          <InputLabel>Section</InputLabel>
          <Select name="section" value={values.section} onChange={handleChange}>
            <MenuItem value="a">Section A</MenuItem>
            <MenuItem value="b">Section B</MenuItem>
            {/* Add more section options */}
          </Select>
        </FormControl>
        <TextareaAutosize
          minRows={3}
          placeholder="Short Bio"
          name="shortBio"
          value={values.shortBio}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ width: "70%" }}
        />
        <Button type="submit" color="secondary" variant="contained">
          ADD
        </Button>
      </Box>
      <Box display="flex" justifyContent="end" mt={2}></Box>
    </form>
  );
}

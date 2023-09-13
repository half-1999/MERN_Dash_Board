// import React, { useState } from "react";
// import { Box, Button, TextField } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import { Link } from "react-router-dom";
// const AllTeachers = () => {
//   const [formData, setFormData] = useState({
//     firstName: "", // Add fields that match your other columns
//     lastName: "",
//     age: "",
//     email: "",
//     contact: "",
//     address: "",
//     gender: "",
//     dob: "",
//     idNo: "",
//     bloodGroup: "",
//     religion: "",
//     class: "",
//     section: "",
//     shortBio: "",
//     image: null, // If image is represented as a file object
//   });
//   const [data, setData] = useState([]);
//   const [nextId, setNextId] = useState(1); // Unique ID counter
//   const [values, setValues] = useState(1);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     // Handle file upload for the image
//     const file = e.target.files[0];
//     setValues({ ...values, image: file });
//   };

//   const handleAdd = () => {
//     // Validate input fields
//     if (formData.firstName.trim() === "" || formData.age.trim() === "") {
//       return;
//     }

//     // Generate a unique ID for the new data
//     const id = nextId;

//     // Add data to the table with a unique ID
//     setData([...data, { id, ...formData }]);

//     // Increment the unique ID counter
//     setNextId(nextId + 1);

//     // Clear the form
//     setFormData({
//       firstName: "", // Add fields that match your other columns
//       lastName: "",
//       age: "",
//       email: "",
//       contact: "",
//       address: "",
//       gender: "",
//       dob: "",
//       idNo: "",
//       bloodGroup: "",
//       religion: "",
//       class: "",
//       section: "",
//       shortBio: "",
//       image: null, // If image is represented as a file object
//     });
//   };

//   const handleDelete = (id) => {
//     const newData = data.filter((item) => item.id !== id);
//     setData(newData);
//   };

//   const handleView = () => {};
//   return (
//     <div>
//       <form onSubmit={handleAdd}>
//         <Box display="grid">
//           <TextField
//             label="First Name"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             required
//             style={{ width: "70%" }}
//           />
//           <TextField
//             label="Last Name"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             required
//             style={{ width: "70%" }}
//           />
//           <TextField
//             label="Age"
//             name="age"
//             type="number"
//             value={formData.age}
//             onChange={handleChange}
//             required
//             style={{ width: "70%" }}
//           />
//           <TextField
//             label="Email"
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             style={{ width: "70%" }}
//           />
//           <TextField
//             label="Contact"
//             name="contact"
//             value={formData.contact}
//             onChange={handleChange}
//             required
//             style={{ width: "70%" }}
//           />
//           <TextField
//             label="Address"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             required
//             style={{ width: "70%" }}
//           />
//           <TextField
//             label="Gender"
//             name="gender"
//             value={formData.gender}
//             onChange={handleChange}
//             required
//             style={{ width: "70%" }}
//           />
//           <TextField
//             label="DOB"
//             name="dob"
//             value={formData.dob}
//             onChange={handleChange}
//             required
//             style={{ width: "70%" }}
//           />
//           <TextField
//             label="IdNo"
//             name="idNo"
//             value={formData.idNo}
//             onChange={handleChange}
//             required
//             style={{ width: "70%" }}
//           />
//           <TextField
//             label="BloodGroup"
//             name="bloodGroup"
//             value={formData.bloodGroup}
//             onChange={handleChange}
//             required
//             style={{ width: "70%" }}
//           />
//           <TextField
//             label="Religion"
//             name="religion"
//             value={formData.religion}
//             onChange={handleChange}
//             required
//             style={{ width: "70%" }}
//           />
//           <TextField
//             label="Class"
//             name="class"
//             value={formData.class}
//             onChange={handleChange}
//             required
//             style={{ width: "70%" }}
//           />
//           <TextField
//             label="Section"
//             name="section"
//             value={formData.section}
//             onChange={handleChange}
//             required
//             style={{ width: "70%" }}
//           />
//           <TextField
//             label="ShortBio"
//             name="shortBio"
//             value={formData.shortBio}
//             onChange={handleChange}
//             required
//             style={{ width: "70%" }}
//           />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//             style={{ width: "70%" }}
//           />
//           <Button variant="contained" onClick={handleAdd}>
//             Add
//           </Button>
//         </Box>
//       </form>

//       <div style={{ height: 500, width: "120%" }}>
//         <DataGrid
//           rows={data}
//           columns={[
//             { field: "id", headerName: "ID", width: 70 },
//             { field: "firstName", headerName: "First Name", flex: 1 },
//             { field: "lastName", headerName: "Last Name", flex: 1 },
//             { field: "age", headerName: "Age", flex: 1 },
//             { field: "email", headerName: "Email", flex: 1 },
//             { field: "contact", headerName: "Contact", flex: 1 },
//             { field: "address", headerName: "Address", flex: 1 },
//             { field: "gender", headerName: "Gender", flex: 1 },
//             { field: "dob", headerName: "DOB", flex: 1 },
//             { field: "idNo", headerName: "Id No", flex: 1 },
//             { field: "bloodGroup", headerName: "BloodGroup", flex: 1 },
//             { field: "religion", headerName: "Religion", width: 120 },
//             { field: "class", headerName: "Class", width: 100 },
//             { field: "section", headerName: "Section", width: 100 },
//             { field: "shortBio", headerName: "Short Bio", width: 200 },
//             { field: "image", headerName: "Image", width: 100 },
//             {
//               field: "View",
//               headerName: "View",
//               sortable: false,
//               flex: 1,
//               renderCell: (params) => (
//                 <Link to={`/teachers/view-profile`}>
//                   <Button variant="outlined">View</Button>
//                 </Link>
//               ),
//             },
//             {
//               field: "Delete",
//               headerName: "Delete",
//               sortable: false,
//               flex: 1,
//               renderCell: (params) => (
//                 <Button
//                   variant="outlined"
//                   onClick={() => handleDelete(params.row.id)}
//                 >
//                   Delete
//                 </Button>
//               ),
//             },
//           ]}
//         />
//       </div>
//     </div>
//   );
// };

// export default AllTeachers;

//=============================================================
// Static Code

import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const AllTeachers = () => {
  const [formData, setFormData] = useState({
    id: "", // Add an "id" field
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    contact: "",
    address: "",
    gender: "",
    dob: "",
    idNo: "",
    bloodGroup: "",
    religion: "",
    class: "",
    section: "",
    shortBio: "",
    image: null,
  });

  const [data, setData] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      age: "30",
      email: "johndoe@example.com",
      contact: "123-456-7890",
      address: "123 Main St, City",
      gender: "Male",
      dob: "1990-01-01",
      idNo: "A123456",
      bloodGroup: "A+",
      religion: "Christian",
      class: "Class 10",
      section: "A",
      shortBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: null,
    },
    {
      id: 2,
      firstName: "Alice",
      lastName: "Smith",
      age: "28",
      email: "alice@example.com",
      contact: "987-654-3210",
      address: "456 Elm St, Town",
      gender: "Female",
      dob: "1992-05-15",
      idNo: "B789012",
      bloodGroup: "B-",
      religion: "Hindu",
      class: "Class 9",
      section: "B",
      shortBio: "A passionate teacher with a love for mathematics.",
      image: null,
    },
    {
      id: 3,
      firstName: "Bob",
      lastName: "Johnson",
      age: "35",
      email: "bob@example.com",
      contact: "555-123-4567",
      address: "789 Oak St, Village",
      gender: "Male",
      dob: "1988-11-30",
      idNo: "C567890",
      bloodGroup: "AB+",
      religion: "Muslim",
      class: "Class 12",
      section: "C",
      shortBio: "Experienced teacher specializing in science subjects.",
      image: null,
    },
    {
      id: 4,
      firstName: "Eve",
      lastName: "Brown",
      age: "29",
      email: "eve@example.com",
      contact: "111-222-3333",
      address: "101 Pine St, Suburb",
      gender: "Female",
      dob: "1994-09-20",
      idNo: "D123456",
      bloodGroup: "O+",
      religion: "Christian",
      class: "Class 11",
      section: "A",
      shortBio: "Passionate about literature and language arts.",
      image: null,
    },
    {
      id: 5,
      firstName: "Charlie",
      lastName: "Wilson",
      age: "32",
      email: "charlie@example.com",
      contact: "777-888-9999",
      address: "222 Maple St, County",
      gender: "Male",
      dob: "1989-07-10",
      idNo: "E234567",
      bloodGroup: "A-",
      religion: "Buddhist",
      class: "Class 8",
      section: "D",
      shortBio: "Dedicated teacher with a passion for history.",
      image: null,
    },
  ]);

  const [nextId, setNextId] = useState(6); // Start with the next available ID

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleAdd = () => {
    if (formData.firstName.trim() === "" || formData.age.trim() === "") {
      return;
    }

    const id = nextId;
    setData([...data, { id, ...formData }]);
    setNextId(nextId + 1);

    setFormData({
      id: "",
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      contact: "",
      address: "",
      gender: "",
      dob: "",
      idNo: "",
      bloodGroup: "",
      religion: "",
      class: "",
      section: "",
      shortBio: "",
      image: null,
    });
  };

  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <Box display="grid">{/* Add your form fields here */}</Box>
      </form>

      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={[
            { field: "id", headerName: "ID", width: 70 },
            { field: "firstName", headerName: "First Name", flex: 1 },
            { field: "lastName", headerName: "Last Name", flex: 1 },
            { field: "age", headerName: "Age", flex: 1 },
            { field: "email", headerName: "Email", flex: 1 },
            { field: "contact", headerName: "Contact", flex: 1 },
            { field: "address", headerName: "Address", flex: 1 },
            { field: "gender", headerName: "Gender", flex: 1 },
            { field: "dob", headerName: "DOB", flex: 1 },
            { field: "idNo", headerName: "Id No", flex: 1 },
            { field: "bloodGroup", headerName: "BloodGroup", flex: 1 },
            { field: "religion", headerName: "Religion", width: 120 },
            { field: "class", headerName: "Class", width: 100 },
            { field: "section", headerName: "Section", width: 100 },
            { field: "shortBio", headerName: "Short Bio", width: 200 },
            { field: "image", headerName: "Image", width: 100 },
            {
              field: "View",
              headerName: "View",
              sortable: false,
              flex: 1,
              renderCell: (params) => (
                <Link to={`/teachers/view-profile/${params.row.id}`}>
                  <Button variant="outlined">View</Button>
                </Link>
              ),
            },

            {
              field: "Delete",
              headerName: "Delete",
              sortable: false,
              flex: 1,
              renderCell: (params) => (
                <Button
                  variant="outlined"
                  onClick={() => handleDelete(params.row.id)}
                >
                  Delete
                </Button>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default AllTeachers;

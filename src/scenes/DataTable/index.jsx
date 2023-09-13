import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const DataTable = ({ data }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "contact", headerName: "Contact", width: 150 },
    { field: "address1", headerName: "Address 1", width: 200 },
    { field: "address2", headerName: "Address 2", width: 200 },
    { field: "gender", headerName: "Gender", width: 100 },
    { field: "dob", headerName: "Date of Birth", width: 150 },
    { field: "idNo", headerName: "ID No", width: 100 },
    { field: "bloodGroup", headerName: "Blood Group", width: 120 },
    { field: "religion", headerName: "Religion", width: 120 },
    { field: "class", headerName: "Class", width: 100 },
    { field: "section", headerName: "Section", width: 100 },
    { field: "shortBio", headerName: "Short Bio", width: 200 },
    { field: "image", headerName: "Image", width: 100 },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default DataTable;

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import TopBar from "./scenes/global/TopBar";
import Dashboard from "./scenes/dashboard";
import Fees from "./scenes/fees";
import SideBars from "./scenes/global/SideBar";
import Student from "./scenes/students";
import Teachers from "./scenes/teachers";
import Parents from "./scenes/parents";
import Form from "./scenes/newRegistrationForm";
import Pie from "./scenes/admission";
import Account from "./scenes/account";
import Inventory from "./scenes/inventory";
import Library from "./scenes/library";
import Subject from "./scenes/subjects";
import Geography from "./scenes/geography";
import "./scenes/global/SideBar.css";
import Payment from "./scenes/payment";
import AllTeachers from "./scenes/AllTeachers";
import ViewProfile from "./scenes/viewProfile";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const data = [
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
  ];
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBars isSidebar={isSidebar} />
          <main className="content">
            <TopBar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/fees" element={<Fees />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/teachers/payment" element={<Payment />} />
              <Route path="/teachers/allteachers" element={<AllTeachers />} />

              <Route
                path="/teachers/view-profile/:id"
                element={<ViewProfile data={data} />}
              />

              <Route path="/students" element={<Student />} />
              <Route path="/parents" element={<Parents />} />
              <Route path="/newRegistrationForm" element={<Form />} />
              <Route path="/account" element={<Account />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/library" element={<Library />} />
              <Route path="/newRegistration" element={<Pie />} />
              <Route path="/subjects" element={<Subject />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

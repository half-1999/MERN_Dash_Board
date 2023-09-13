// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
// import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import { tokens } from "../../theme";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
// import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
// import SchoolIcon from "@mui/icons-material/School";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
// import ClassIcon from "@mui/icons-material/Class";
// import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
// import PaymentIcon from "@mui/icons-material/Payment";
// // import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
// import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
// import MoneyIcon from "@mui/icons-material/Money";
// import LocalMallIcon from "@mui/icons-material/LocalMall";
// import AddIcon from "@mui/icons-material/Add";
// import StoreIcon from "@mui/icons-material/Store";
// import AssignmentIcon from "@mui/icons-material/Assignment";
// import StorageIcon from "@mui/icons-material/Storage";
// import LayersIcon from "@mui/icons-material/Layers";
// import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
// import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
// import BoyIcon from "@mui/icons-material/Boy";
// import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

// import "./SideBar.css";
// import {
//   AttachMoney,
//   AttachMoneyOutlined,
//   MenuBook,
//   School,
// } from "@mui/icons-material";

// const Item = ({ title, to, icon, selected, setSelected }) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   return (
//     <MenuItem
//       active={selected === title}
//       style={{
//         color: colors.primary[100],
//       }}
//       onClick={() => setSelected(title)}
//       icon={icon}
//     >
//       <Typography>{title}</Typography>
//       <Link to={to} />
//     </MenuItem>
//   );
// };

// const SideBars = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [selected, setSelected] = useState("Dashboard");

//   return (
//     <Box
//       sx={{
//         "& .pro-sidebar-inner": {
//           background: "#141B2D",
//         },
//         "& .pro-icon-wrapper": {
//           backgroundColor: "transparent !important",
//         },
//         "& .pro-inner-item": {
//           padding: "5px 35px 5px 20px !important",
//         },
//         "& .pro-inner-item:hover": {
//           color: "#000000 !important",
//         },
//         "& .pro-menu-item.active": {
//           color: "#6870fa !important",
//         },
//       }}
//     >
//       <Sidebar collapsed={isCollapsed}>
//         <Menu iconShape="square" style={{ backgroundColor: "#141B2D" }}>
//           {/* LOGO AND MENU ICON */}
//           <MenuItem
//             className="titles"
//             onClick={() => setIsCollapsed(!isCollapsed)}
//             icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
//             style={{
//               // margin: "10px 0 20px 0",
//               color: colors.primary[400],
//             }}
//           >
//             {!isCollapsed && (
//               <Box
//                 display="flex"
//                 justifyContent="space-between"
//                 alignItems="center"
//                 ml="15px"
//               >
//                 <Typography
//                   className="titles"
//                   variant="h4"
//                   color={colors.grey[100]}
//                 >
//                   ShikshaMitra
//                 </Typography>
//                 <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
//                   <MenuOutlinedIcon className="titles" />
//                 </IconButton>
//               </Box>
//             )}
//           </MenuItem>

//           {!isCollapsed && (
//             <Box mb="25px">
//               <Box display="flex" justifyContent="center" alignItems="center">
//                 <img
//                   alt="profile-user"
//                   width="100px"
//                   height="100px"
//                   src={`../../assets/user.png`}
//                   style={{ cursor: "pointer", borderRadius: "50%" }}
//                 />
//               </Box>
//               <Box textAlign="center">
//                 <Typography
//                   variant="h3"
//                   color={colors.grey[100]}
//                   fontWeight="bold"
//                   sx={{ m: "10px 0 0 0" }}
//                 >
//                   Corplyx Technologies
//                 </Typography>
//                 <Typography
//                   variant="h4"
//                   className="Title"
//                   color={colors.greenAccent[500]}
//                 >
//                   Admin
//                 </Typography>
//               </Box>
//             </Box>
//           )}

//           <Box paddingLeft={isCollapsed ? undefined : "10%"}>
//             <NavLink
//               style={{ textDecoration: "none" }}
//               to="/"
//               activeClassName="active"
//             >
//               <Item
//                 title="Admin"
//                 to="/"
//                 icon={<AccountCircleIcon />}
//                 selected={selected}
//                 setSelected={setSelected}
//               />
//             </NavLink>

//             {/* <Typography
//               variant="h6"
//               color={colors.grey[300]}
//               sx={{ m: "15px 0 5px 20px" }}
//             >
//               Data
//             </Typography> */}

//             <NavLink style={{ textDecoration: "none" }} to="/fees">
//               <Item
//                 title="Fees"
//                 to="/fees"
//                 icon={<AttachMoney />}
//                 selected={selected}
//                 setSelected={setSelected}
//               />
//             </NavLink>

//             <NavLink style={{ textDecoration: "none" }} to="/teachers">
//               <Item
//                 title="Teachers"
//                 to="/teachers"
//                 icon={<SupervisorAccountIcon />}
//                 selected={selected}
//                 setSelected={setSelected}
//               />
//             </NavLink>

//             <NavLink style={{ textDecoration: "none" }} to="/students">
//               <Item
//                 title="Students"
//                 to="/students"
//                 icon={<BoyIcon />}
//                 selected={selected}
//                 setSelected={setSelected}
//               />
//             </NavLink>

//             {/* <Typography
//               variant="h6"
//               color={colors.grey[300]}
//               sx={{ m: "15px 0 5px 20px" }}
//             >
//               Pages
//             </Typography> */}

//             <NavLink style={{ textDecoration: "none" }} to="/parents">
//               <Item
//                 title="Parents"
//                 to="/parents"
//                 icon={<EscalatorWarningIcon />}
//                 selected={selected}
//                 setSelected={setSelected}
//               />
//             </NavLink>

//             <NavLink style={{ textDecoration: "none" }} to="/account">
//               <Item
//                 title="Account"
//                 to="/account"
//                 icon={<AccountBalanceWalletIcon />}
//                 selected={selected}
//                 setSelected={setSelected}
//               />
//             </NavLink>

//             <NavLink style={{ textDecoration: "none" }} to="/inventory">
//               <Item
//                 title="Inventory"
//                 to="/inventory"
//                 icon={<StoreIcon />}
//                 selected={selected}
//                 setSelected={setSelected}
//               />
//             </NavLink>
//             {/* <Typography
//               variant="h6"
//               color={colors.grey[300]}
//               sx={{ m: "15px 0 5px 20px" }}
//             >
//               Charts
//             </Typography> */}

//             <NavLink style={{ textDecoration: "none" }} to="/library">
//               <Item
//                 title="Library"
//                 to="/library"
//                 icon={<LocalLibraryIcon />}
//                 selected={selected}
//                 setSelected={setSelected}
//               />
//             </NavLink>

//             <NavLink style={{ textDecoration: "none" }} to="/newRegistration">
//               <Item
//                 title="Admission"
//                 to="/newRegistration"
//                 icon={<PersonAddAltIcon />}
//                 selected={selected}
//                 setSelected={setSelected}
//               />
//             </NavLink>

//             <NavLink style={{ textDecoration: "none" }} to="/subjects">
//               <Item
//                 title="Subjects"
//                 to="/subjects"
//                 icon={<MenuBook />}
//                 selected={selected}
//                 setSelected={setSelected}
//               />
//             </NavLink>
//           </Box>
//         </Menu>
//       </Sidebar>
//     </Box>
//   );
// };

// export default SideBars;

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import StoreIcon from "@mui/icons-material/Store";
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import BoyIcon from "@mui/icons-material/Boy";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { AttachMoney, MenuBook } from "@mui/icons-material";

import "./SideBar.css";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.primary[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const SideBars = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [isTeachersOpen, setIsTeachersOpen] = useState(false);

  const toggleTeachersMenu = () => {
    setIsTeachersOpen(!isTeachersOpen);
  };

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: "#141B2D",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#000000 !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Sidebar collapsed={isCollapsed}>
        <Menu iconShape="square" style={{ backgroundColor: "#141B2D" }}>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            className="titles"
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              // margin: "10px 0 20px 0",
              color: colors.primary[400],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography
                  className="titles"
                  variant="h4"
                  color={colors.grey[100]}
                >
                  ShikshaMitra
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon className="titles" />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Corplyx Technologies
                </Typography>
                <Typography
                  variant="h4"
                  className="Title"
                  color={colors.greenAccent[500]}
                >
                  Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <NavLink
              style={{ textDecoration: "none" }}
              to="/"
              activeClassName="active"
            >
              <Item
                title="Admin"
                to="/"
                icon={<AccountCircleIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </NavLink>

            <NavLink style={{ textDecoration: "none" }} to="/fees">
              <Item
                title="Fees"
                to="/fees"
                icon={<AttachMoney />}
                selected={selected}
                setSelected={setSelected}
              />
            </NavLink>

            <MenuItem onClick={toggleTeachersMenu}>
              <SupervisorAccountIcon className="teacher_img" />
              <span className="teacher">Teachers</span>{" "}
              {isTeachersOpen ? "▲" : "▼"}
            </MenuItem>

            {/* Submenu */}
            {isTeachersOpen && (
              <>
                <NavLink
                  style={{ textDecoration: "none" }}
                  to="/teachers/allteachers"
                  activeClassName="active"
                >
                  <MenuItem>All Teachers</MenuItem>
                </NavLink>
                <NavLink
                  style={{ textDecoration: "none" }}
                  to="/teachers/payment"
                  activeClassName="active"
                >
                  <MenuItem>Payment</MenuItem>
                </NavLink>
              </>
            )}

            <NavLink style={{ textDecoration: "none" }} to="/students">
              <Item
                title="Students"
                to="/students"
                icon={<BoyIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </NavLink>

            <NavLink style={{ textDecoration: "none" }} to="/parents">
              <Item
                title="Parents"
                to="/parents"
                icon={<EscalatorWarningIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </NavLink>

            <NavLink style={{ textDecoration: "none" }} to="/account">
              <Item
                title="Account"
                to="/account"
                icon={<AccountBalanceWalletIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </NavLink>

            <NavLink style={{ textDecoration: "none" }} to="/inventory">
              <Item
                title="Inventory"
                to="/inventory"
                icon={<StoreIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </NavLink>

            <NavLink style={{ textDecoration: "none" }} to="/library">
              <Item
                title="Library"
                to="/library"
                icon={<LocalLibraryIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </NavLink>

            <NavLink style={{ textDecoration: "none" }} to="/newRegistration">
              <Item
                title="Admission"
                to="/newRegistration"
                icon={<PersonAddAltIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </NavLink>

            <NavLink style={{ textDecoration: "none" }} to="/subjects">
              <Item
                title="Subjects"
                to="/subjects"
                icon={<MenuBook />}
                selected={selected}
                setSelected={setSelected}
              />
            </NavLink>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBars;

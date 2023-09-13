import React, { useContext } from "react";
import { Typography, Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
// import {useLanguage} from '../global/Language'

const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  // const { language, switchLanguage } = useLanguage();

  return (
    <>
      <Box display="flex" justifyContent="space-between" p={2}>
        {/* Search Box */}
        <Box>
          <Typography variant="h3" color={colors.grey[100]}>
            ShikshaMitra
          </Typography>
        </Box>
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>

        {/* Icons */}
        <Box display="flex" alignItems={"center"} gap={1}>
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon fontSize={"large"} />
            ) : (
              <LightModeOutlinedIcon fontSize={"large"} />
            )}
          </IconButton>
          <IconButton>
            <NotificationsOutlinedIcon fontSize={"large"} />
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon fontSize={"large"} />
          </IconButton>

          <IconButton>
            <PersonOutlinedIcon fontSize={"large"} />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default TopBar;

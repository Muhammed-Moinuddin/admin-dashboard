import { useState} from "react";
import {ProSidebar, Menu, MenuItem} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
// import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import {HomeOutlinedIcon, PeopleOutlinedIcon, ContactsOutlinedIcon, ReceiptOutlinedIcon, PersonOutlinedIcon, CalenderOutlinedIcon, HelpOutlinedIcon, BarChartOutlinedIcon, PieChartOutlinedIcon, TimelineOutlinedIcon, MenuOutlinedIcon, MapOutlinedIcon} from '@mui/icons-material';

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner" : {

        }
      }}
    >

    </Box>
  )
}

export default Sidebar
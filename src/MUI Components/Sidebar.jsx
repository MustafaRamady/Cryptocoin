import { Drawer, IconButton } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  let navigate = useNavigate();
  let nav = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Service", path: "/service" },
    { title: "Token Sale", path: "/tokensale" },
    { title: "Features", path: "/feature" },
    { title: "Contact", path: "/contact" },
  ];
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {nav.map((ele) => (
          <ListItem key={ele}>
            <ListItemButton
              onClick={() => {
                navigate(ele.path);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <ListItemText primary={ele.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{ color: "#16D5FF" }}
        aria-haspopup="true"
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

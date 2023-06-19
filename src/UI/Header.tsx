import * as React from "react";
import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import logo from "../assest/images/logo.webp";

const pages = ["Opportunities", "News", "Learning Center"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: { xs: "space-between" },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: { xs: "space-between", md: "start" },
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            <img
              src={logo}
              alt="logo"
              className="h-[40px] w-[130px] object-cover"
            />
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              src={logo}
              alt="logo"
              className="h-[40px] w-[130px] object-cover"
            />
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "rgb(99, 113, 224)",
                  display: "block",
                  fontSize: 18,
                  fontWeight: 400,
                  textTransform: "unset",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
        <div className="flex items-center">
          <Button
            onClick={() => goToLogin()}
            sx={{
              color: "rgb(99, 113, 224)",
              fontSize: 18,
              fontWeight: 400,
              textTransform: "unset",
            }}
          >
            Log in
          </Button>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </div>
      </Container>
    </AppBar>
  );
}
export default Header;

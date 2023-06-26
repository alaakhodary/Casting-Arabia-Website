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
import { Avatar, Tooltip } from "@mui/material";

import logo from "../assest/images/logo.webp";
import imgPerson from "../assest/images/news.webp";

import useAuth from "../hooks/useAuth";

const pages = ["Opportunities", "News", "Learning Center"];
const settings = ["Logout"];

function Header() {
  const { token, logout } = useAuth();
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
    navigate("/");
  };

  const link = useNavigate();
  const goToHome = () => {
    link("/home");
  };

  if (!token) {
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
              component="button"
              onClick={() => goToHome()}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
                cursor: "pointer",
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
              component="button"
              onClick={() => goToHome()}
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
  } else {
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
              component="button"
              onClick={() => goToHome()}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
                cursor: "pointer",
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
              component="button"
              onClick={() => goToHome()}
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
          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenNavMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={imgPerson} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    component="button"
                    onClick={logout}
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Container>
      </AppBar>
    );
  }
}

export default Header;

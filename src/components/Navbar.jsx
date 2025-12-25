
import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { useNavigate } from "react-router-dom";


const Navbar = () => {
 
  const navigate = useNavigate();
 
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false); // SCROLL STATE

  // SCROLL YÖNETİMİ
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 650);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenNavMenu = (e) => setAnchorElNav(e.currentTarget);
  const handleOpenUserMenu = (e) => setAnchorElUser(e.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const handleNavigate = (path) => {
    navigate(path);
    handleCloseNavMenu();
  };

  const pages = [
    { name: "Anasayfa", path: "/" },
    { name: "Hakkımızda", path: "/hakkimizda" },
    { name: "Hizmetler", path: "/hizmetler" },
    { name: "Hizmet Noktaları", path: "/bolgeler" },
    { name: "Blog", path: "/blog" },
    { name: "SSS", path: "/faq" },
  ];

  return (
    <AppBar
      // position="fixed"
      elevation={4}
      sx={{
        backgroundColor: "rgba(17, 24, 39, 0.9)",
        backdropFilter: "blur(6px)",
        zIndex: 1500,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            height: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Sol Logo + Başlık */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              component="img"
              src="/images/logohali.png"
              alt="logo"
              sx={{
                height: 70,
                width: 70,
                objectFit: "contain",
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            />
            <Typography
              variant="h6"
              sx={{
                color: scrolled ? "blue" : "white",
                fontSize: { xs: "1.4rem", md: "1.8rem" },
                // fontWeight: "bold",
                lineHeight: 0.99,
                letterSpacing: 1.2,
                textAlign: "center",
                flexGrow: { xs: 1, md: 0 },
                fontFamily: "'Playfair Display', 'Poppins', sans-serif",
              }}
            >
              ERYAMAN HALI YIKAMA
            </Typography>
          </Box>

          {/* Masaüstü Menü */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleNavigate(page.path)}
                sx={{
                  color: scrolled ? "blue" : "white",
                  fontWeight: "bold",
                }}
              >
                {page.name}
              </Button>
            ))}

            
          </Box>

          {/* Mobil Menü */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              gap: 1,
            }}
          >
            <IconButton onClick={handleOpenNavMenu} sx={{ color: "#fff" }}>
              <MenuIcon sx={{ fontSize: 32 }} />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => handleNavigate(page.path)}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

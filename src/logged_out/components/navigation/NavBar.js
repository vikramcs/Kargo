import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Hidden, IconButton } from "@mui/material";
import withStyles from '@mui/styles/withStyles';
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import BookIcon from "@mui/icons-material/Book";
import NavigationDrawer from "../../../shared/components/NavigationDrawer";

const styles = theme => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  brandContainer: {
    display: "flex",
    alignItems: "center"
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400
  },
  menuContainer: {
    display: "flex",
    justifyContent: "center",
    flexGrow: 1
  },
  menuButton: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
    margin: theme.spacing(1),
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.primary.main, // Adjust color as needed
      color: theme.palette.common.white
    }
  },
  noDecoration: {
    textDecoration: "none !important"
  },
  rightContainer: {
    display: "flex",
    alignItems: "center"
  }
});

function NavBar(props) {
  const {
    classes,
    openRegisterDialog,
    openLoginDialog,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab
  } = props;

  const menuItems = [
    {
      link: "/html",
      name: "HTML",
    },
    {
      link: "/css",
      name: "CSS",
    },
    {
      link: "/javascript",
      name: "JavaScript",
    },
    {
      link: "/react",
      name: "React",
    },
    {
      link: "/angular",
      name: "Angular",
    },
    {
      link: "/vue",
      name: "Vue",
    },
    {
      link: "/svelte",
      name: "Svelte",
    },
   
  ];

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.brandContainer}>
            <Typography
              variant="h4"
              className={classes.brandText}
              display="inline"
              color="primary"
            >
              Wa
            </Typography>
            <Typography
              variant="h4"
              className={classes.brandText}
              display="inline"
              color="secondary"
            >
              Ver
            </Typography>
          </div>
          <div className={classes.menuContainer}>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleMobileDrawerOpen}
                aria-label="Open Navigation"
                size="large">
                <MenuIcon color="primary" />
              </IconButton>
            </Hidden>
            <Hidden mdDown>
              {menuItems.map((element) => {
                if (element.link) {
                  return (
                    <Link
                      key={element.name}
                      to={element.link}
                      className={classes.noDecoration}
                      onClick={handleMobileDrawerClose}
                    >
                      <Button
                        color="secondary"
                        size="large"
                        className={classes.menuButton}
                      >
                        {element.name}
                      </Button>
                    </Link>
                  );
                }
                return null;
              })}
            </Hidden>
          </div>
          <div className={classes.rightContainer}>
            <Link
              to="/blog"
              className={classes.noDecoration}
              onClick={handleMobileDrawerClose}
            >
              <Button
                color="secondary"
                size="large"
                className={classes.menuButton}
              >
                Blog
              </Button>
            </Link>
            <Button
              color="secondary"
              size="large"
              onClick={openRegisterDialog}
              className={classes.menuButton}
              startIcon={<HowToRegIcon />}
            >
              Register
            </Button>
            <Button
              color="secondary"
              size="large"
              onClick={openLoginDialog}
              className={classes.menuButton}
              startIcon={<LockOpenIcon />}
            >
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
  openRegisterDialog: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));

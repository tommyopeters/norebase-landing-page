import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { FaWallet } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import { DashboardNavBar } from "../components/widgets/navbar/DashboardNav";

const mql = window.matchMedia(`(min-width: 800px)`);

const drawerWidth = 240;

function DrawerLayout(props) {
  const links = [];
  const location = useLocation();
  const [openBar, setOpenBar] = React.useState(true);

  const sidebarData = [
    {
      name: "My Applications",
      route: "/dashboard",
      icon_name: (
        <FaWallet
          color={
            location.pathname.substring(1) === "dashboard" ? "#F06900" : ""
          }
        />
      ),
    },
    {
      name: "Referral",
      route: "/customer-referral",
      icon_name: (
        <RiSendPlaneFill
          color={
            location.pathname.substring(1) === "customer-referral"
              ? "#F06900"
              : ""
          }
        />
      ),
    },
  ];

  for (let ind = 0; ind < sidebarData.length; ind++) {
    links.push(
      <Link
        key={ind}
        to={sidebarData[ind].route}
        style={{
          display: "block",
          padding: "16px 0px",
          color: "#757575",
          textDecoration: "none",
        }}
      >
        <span style={{ paddingRight: "1rem" }}>
          {sidebarData[ind].icon_name}
        </span>{" "}
        <span
          style={{
            color:
              location.pathname.substring(1).charAt(0).toUpperCase() +
                location.pathname.substring(1).slice(1) ===
              sidebarData[ind].name
                ? "#F06900"
                : "",
          }}
        >
          {sidebarData[ind].name}
        </span>
      </Link>
    );
  }

  const mediaQueryChanged = () => {
    setOpenBar(mql.matches);
  };

  React.useEffect(() => {
    mediaQueryChanged();
    mql.addListener(mediaQueryChanged);
    return () => {
      mql.removeListener(mediaQueryChanged);
    };
  }, []);

  return (
    <ErrorBoundary onError={() => <h1>I believe something went wrong</h1>}>
      <DashboardNavBar />
      <Drawer
        open={openBar}
        variant="persistent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          fontSize: 16,
          [`& .MuiDrawer-paper`]: {
            padding: "16px",
            paddingTop: "90px",
            width: drawerWidth,
            boxSizing: "border-box",
            zIndex: 5,
            border: 0,
          },
        }}
      >
        <div
          className="divider"
          style={{ margin: "8px 0", height: 2, backgroundColor: "#fafafa" }}
        />
        {links}
      </Drawer>
      <div className="mobile-menu">
        <div className="container">{links}</div>
      </div>
      <main className="main">{props.children}</main>
    </ErrorBoundary>
  );
}

export default DrawerLayout;

import React from "react";

// Component
import Navbar from "../components/Navbar.Component";

const DefaultlayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <Navbar />
        <Component {...props} />
        <div>Footer</div>
      </div>
    );
  };

export default DefaultlayoutHoc;

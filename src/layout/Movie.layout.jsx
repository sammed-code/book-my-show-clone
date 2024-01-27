import React from "react";

// Component
import MovieNavbar from "../components/MovieNavbar.Component";

const MovielayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <MovieNavbar />
        <Component {...props} />
        <div>Footer</div>
      </div>
    );
  };

export default MovielayoutHoc;

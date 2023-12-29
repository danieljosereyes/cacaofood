import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
          <Link
            to="/messages"
            
          >
            Messages
          </Link>
    </div>
  );
}

export default Menu;

import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link to="/">首頁</Link>
        </li>
        <li>
          <Link to="/about">關於我們</Link>
        </li>
        <li>
          <Link to="/contact">聯絡我們</Link>
        </li>
      </ul>
    </nav>
  );
}

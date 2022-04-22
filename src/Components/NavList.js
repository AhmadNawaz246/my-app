import React from "react";
import "../App.css";

export default function NavList({ navlistname, onCardClick }) {
  return (
    <div>
      <nav>
        <ul>
          {navlistname.map((x) => (
            <li key={x.categoryId} onClick={() => onCardClick(x.categoryId)}>
              {x.categoryName}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

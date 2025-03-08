"use client";

import Link from "next/link";
import { useState } from "react";

const SimpleNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        width: "100%",
        backgroundColor: "white",
        padding: "1rem 0",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      <div
        className="container-custom"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "var(--primary)",
          }}
        >
          Ecomotive Motors
        </Link>

        <div style={{ display: "flex", gap: "1.5rem" }}>
          <Link href="/#home" style={{ color: "var(--dark)" }}>
            Home
          </Link>
          <Link href="/#about" style={{ color: "var(--dark)" }}>
            About
          </Link>
          <Link href="/#products" style={{ color: "var(--dark)" }}>
            Products
          </Link>
          <Link href="/#contact" style={{ color: "var(--dark)" }}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SimpleNavbar;

import { Menu, Search, User, ShoppingCart } from "lucide-react";
import { useState } from "react";
import logo from "/Images/LOGO.PNG";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full shadow-md bg-white sticky top-0 z-50">
      {/* Top strip */}
      <div
        style={{
          textAlign: "center",
          height: "50px",
          backgroundColor: "#000",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "20px",
            font: "mediumy"
          }}
        >
          COD Available | Express Shipping (PAN INDIA)
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-3 py-1 flex justify-between items-center text-black h-20">
        {/* Logo */}
        <Link to="/">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-50 overflow-hidden w-50" />
        </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex gap-6 font-medium">
          {[
            "Kurtas",
            "Co-ord Sets",
            "Bestsellers",
            "Suit Set",
            "Tie Dye",
            "Luxe",
            "Tunics",
            "All Products",
          ].map((item, index) => (
            <a
              href="#"
              key={index}
              className="transition text-black hover:text-gray-500"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          <Search
            className="w-6 h-6 cursor-pointer"
            color="#000"
            strokeWidth={2.5}
          />
          <Link to="/login">
            <User
              className="w-6 h-6 cursor-pointer"
              color="#000"
              strokeWidth={2.5}
            />
          </Link>
          <ShoppingCart
            className="w-6 h-6 cursor-pointer"
            color="#000"
            strokeWidth={2.5}
          />
          {/* Hamburger Menu */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: "#000" }}
          >
            <Menu className="w-6 h-6" color="#000" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-2">
          {[
            "Kurtas",
            "Co-ord Sets",
            "Bestsellers",
            "Suit Set",
            "Tie Dye",
            "Luxe",
            "Tunics",
            "All Products",
          ].map((item, index) => (
            <a
              href="#"
              key={index}
              className="block font-medium text-black hover:text-gray-500 transition"
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

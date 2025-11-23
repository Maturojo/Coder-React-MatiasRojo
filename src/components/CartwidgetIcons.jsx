import { Link } from "react-router-dom";

const CartwidgetIcons = ({ counter }) => {
  return (
    <Link to="/cart" className="nav-link position-relative">
      🛒
      <span
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          backgroundColor: "red",
          color: "white",
          borderRadius: "50%",
          fontSize: "0.7rem",
          padding: "0 4px",
        }}
      >
        {counter}
      </span>
    </Link>
  );
};

export default CartwidgetIcons;

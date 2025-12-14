import { Link } from "react-router-dom";
import { useCart } from "./useCart";

const CartWidget = () => {
  const { getTotalUnits } = useCart();
  const total = getTotalUnits();

  return (
    <Link to="/cart" className="cartwidget-link">
      <span className="cartwidget-icon">🛒</span>
      {total > 0 && <span className="cartwidget-badge">{total}</span>}
    </Link>
  );
};

export default CartWidget;

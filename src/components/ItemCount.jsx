import { useState } from "react";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
  const safeInitial = Math.min(Math.max(initial, 1), stock || 1);
  const [count, setCount] = useState(safeInitial);

  const handleSumar = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleRestar = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAdd = () => {
    if (stock > 0 && onAdd) onAdd(count);
  };

  return (
    <div className="itemcount-wrapper">
      <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
        <button className="btn btn-outline-light" onClick={handleRestar} disabled={count <= 1}>
          -
        </button>

        <span style={{ minWidth: "40px", textAlign: "center", fontSize: "1.2rem" }}>
          {count}
        </span>

        <button className="btn btn-outline-light" onClick={handleSumar} disabled={count >= stock}>
          +
        </button>
      </div>

      <button className="btn btn-light w-100" onClick={handleAdd} disabled={stock <= 0}>
        Agregar al carrito
      </button>

      {stock <= 0 && (
        <p style={{ marginTop: "0.75rem", opacity: 0.8 }}>
          Sin stock
        </p>
      )}
    </div>
  );
};

export default ItemCount;

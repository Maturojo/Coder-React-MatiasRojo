import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const incrementar = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  const decrementar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  return (
    <div className="d-flex flex-column gap-2">
      <div className="d-flex align-items-center gap-2">
        <button className="btn btn-outline-dark" onClick={decrementar}>-</button>
        <span>{cantidad}</span>
        <button className="btn btn-outline-dark" onClick={incrementar}>+</button>
      </div>

      <button
        className="btn btn-dark"
        disabled={stock === 0}
        onClick={() => onAdd(cantidad)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;

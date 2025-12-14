import { Link } from "react-router-dom";
import { useCart } from "./useCart";

const Cart = () => {
  const { cart, removeItem, clearCart, getTotalPrice, getTotalUnits } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h2>Tu carrito está vacío</h2>
        <p className="mt-3">Agregá productos para verlos acá.</p>
        <Link to="/" className="btn btn-light mt-2">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Carrito</h2>

      <div className="row g-3">
        {cart.map((prod) => (
          <div key={prod.id} className="col-12">
            <div className="card-reddion d-flex flex-column flex-md-row align-items-center gap-3 p-3">
              <img
                src={prod.image}
                alt={prod.title}
                style={{ width: "120px", borderRadius: "12px" }}
              />

              <div className="flex-grow-1">
                <h4 style={{ marginBottom: "0.25rem" }}>{prod.title}</h4>
                <p style={{ marginBottom: "0.25rem", opacity: 0.85 }}>
                  Precio: ${prod.price}
                </p>
                <p style={{ marginBottom: 0, opacity: 0.85 }}>
                  Cantidad: {prod.quantity} | Subtotal: ${prod.price * prod.quantity}
                </p>
              </div>

              <button
                className="btn btn-outline-light"
                onClick={() => removeItem(prod.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <hr className="my-4" style={{ opacity: 0.2 }} />

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <div>
          <p className="mb-1">
            Total unidades: <strong>{getTotalUnits()}</strong>
          </p>
          <p className="mb-0">
            Total a pagar: <strong>${getTotalPrice()}</strong>
          </p>
        </div>

        <div className="d-flex gap-2">
          <button className="btn btn-outline-light" onClick={clearCart}>
            Vaciar carrito
          </button>

          <Link to="/" className="btn btn-light">
            Seguir comprando
          </Link>

          <Link to="/checkout" className="btn btn-light">
            Finalizar compra
            </Link>

        </div>
      </div>
    </div>
  );
};

export default Cart;

import { useState } from "react";
import ItemCount from "./ItemCount";
import { useCart } from "./useCart";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const { addItem } = useCart();            
  const [added, setAdded] = useState(false); 

  const handleAdd = (cantidad) => {
    addItem(item, cantidad);  
    setAdded(true);           
  };

  return (
    <div className="row">
      <div className="col-12 col-md-6">
        <img src={item.image} alt={item.title} className="img-fluid rounded" />
      </div>

      <div className="col-12 col-md-6">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p className="fw-bold fs-4">${item.price}</p>
        <p>Stock disponible: {item.stock}</p>

        {!added ? (
          <ItemCount stock={item.stock} onAdd={handleAdd} />
        ) : (
          <div className="d-flex flex-column gap-2 mt-3">
            <p className="mb-0">Producto agregado al carrito.</p>

            <Link to="/cart" className="btn btn-light w-100">
              Ir al carrito
            </Link>

            <Link to="/" className="btn btn-outline-light w-100">
              Seguir comprando
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;

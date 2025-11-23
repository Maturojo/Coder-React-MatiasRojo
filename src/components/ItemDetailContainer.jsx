// src/components/ItemDetailContainer.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/products";  // 👈 ACA EL CAMBIO
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getProductById(id).then((res) => {
      setItem(res);
    });
  }, [id]);

  if (!item) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
        Cargando producto...
      </h2>
    );
  }

  return (
    <div className="container mt-4">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;

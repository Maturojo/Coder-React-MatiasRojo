
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/products";  
import ItemDetail from "./ItemDetail";

import "../css/ItemDetailContainer.css"

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {

    setLoading(true);
    setItem(null);

    const MIN_DELAY = 500; 
    const start = Date.now();

    getProductById(id).then((res) => {
      const elapsed = Date.now() - start;
      const remaining = MIN_DELAY - elapsed;

      if (remaining > 0) {
        
        setTimeout(() => {
          setItem(res);
          setLoading(false);
        }, remaining);
      } else {
        
        setItem(res);
        setLoading(false);
      }
    });
  }, [id]);

  if (loading) {
    return (
      <div className="loading-wrapper">
        <p className="loading-text">Cargando producto...</p>
        <img src="/img/logo.png" alt="Reddion" className="loading-logo" />
      </div>
    );
  }

  if (!item) {
    return (
      <div className="loading-wrapper">
        <p className="loading-text">Cargando producto...</p>
        <img src="/img/logo.png" alt="Reddion" className="loading-logo" />
      </div>

      


    );
  }

  return (
    <div className="container mt-4">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;

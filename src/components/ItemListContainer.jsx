import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../mock/Asyncmock";
import { getProductsByCategory } from "../services/products";
import ItemList from "./ItemList";


const ItemListContainer = ({ saludo }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (!categoryId) {
      getProducts().then((res) => setItems(res));
    } else {
      getProductsByCategory(categoryId).then((res) => setItems(res));
    }
  }, [categoryId]);

  return (
    <div className="container mt-4">
      <h1>{saludo}</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;

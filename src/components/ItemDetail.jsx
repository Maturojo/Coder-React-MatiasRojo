import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const handleAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} unidades al carrito`);
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

        <ItemCount stock={item.stock} onAdd={handleAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;

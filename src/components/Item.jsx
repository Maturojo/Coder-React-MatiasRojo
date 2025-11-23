import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="card h-100">
      <img src={item.image} className="card-img-top" alt={item.title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-text fw-bold">${item.price}</p>

        <Link to={`/item/${item.id}`} className="btn btn-dark mt-auto">
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;

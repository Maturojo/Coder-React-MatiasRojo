import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="row g-4">
      {items.map((item) => (
        <div className="col-12 col-md-6 col-lg-4" key={item.id}>
          <Item item={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;

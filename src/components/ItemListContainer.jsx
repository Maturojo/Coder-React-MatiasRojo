import "../css/ItemListContainer.css"

const ItemListContainer = ({mensaje}) => {
    // const {mensaje} = props
    return (
        <div>
            <h1 className="mensaje">{mensaje}</h1>
        </div>
    )
}

export default ItemListContainer
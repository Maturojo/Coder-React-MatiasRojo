import Badge from 'react-bootstrap/Badge';
import { FaShoppingCart } from "react-icons/fa";

const CartwidgetIcons = ({counter}) => {
    return(
        <div>
            <FaShoppingCart fontSize={'1.9 rem'}/>
            <Badge bg="danger">{counter}</Badge>
        </div>
    )
}
export default CartwidgetIcons
const CartWidget = (props) => {
    console.log (props);
    return (
        <div>
            <span>🛒</span>
            <span style={{color:'red'}}>{props.counter}</span>
        </div>
    )
} 
export default CartWidget
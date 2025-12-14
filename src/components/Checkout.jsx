import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useCart } from "./useCart";
import { useState } from "react";

const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useCart();
  const [orderId, setOrderId] = useState(null);

  const handleCheckout = async () => {
    const order = {
      buyer: {
        name: "Matias",
        email: "test@mail.com",
        phone: "123456"
      },
      items: cart.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity
      })),
      total: getTotalPrice(),
      date: Timestamp.fromDate(new Date())
    };

    const ordersCollection = collection(db, "orders");
    const docRef = await addDoc(ordersCollection, order);

    setOrderId(docRef.id);
    clearCart();
  };

  if (orderId) {
    return (
      <div className="container mt-5 text-center">
        <h2>¡Compra realizada!</h2>
        <p>Tu código de orden es:</p>
        <strong>{orderId}</strong>
      </div>
    );
  }

  return (
    <div className="container mt-4 text-center">
      <h2>Finalizar compra</h2>
      <button className="btn btn-light mt-3" onClick={handleCheckout}>
        Confirmar compra
      </button>
    </div>
  );
};

export default Checkout;

import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext, useState } from 'react';
import CartContext from '../../store/cart-contex';
import CartItem from './CartItem';
import SubmitOrder from './SubmitOrder';

const Cart = (props) => {

    const [isSubmitOrderAvailable, setIsSubmitOrderAvailable] = useState(false);

    const cartContext = useContext(CartContext);

    const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;

    const hasItems = cartContext.items.length > 0;

    const removeCartItemHandler = (id) => {
        cartContext.removeItem(id);
    };

    const addCartItemHandler = (item) => {
        cartContext.addItem({...item, amount: 1});
    };

    const orderHandler = () => {
        setIsSubmitOrderAvailable(true);
    };

    const submitOrderHandler = (userData) => {

        fetch("https://joke-fcdf0-default-rtdb.europe-west1.firebasedatabase.app/orders.json", {
            method: "POST",
            body: JSON.stringify({
                user: userData,
                orderedMeals: cartContext.items,
            }),
        });

    };

    const cartItems = (
        <ul className={styles['cart-items']}>
            {cartContext.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onAdd={addCartItemHandler.bind(null, item)}
                    onRemove={removeCartItemHandler.bind(null, item.id)}
                />
            ))}
        </ul>
    );

    const modalButtons = (
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.onHideCart} >Close</button>
            {hasItems && <button className={styles.button} onClick={orderHandler}>Order</button>}
        </div>
    );

    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={styles.total}>
                <span>Total</span>
                <span>{totalAmount}</span>
            </div>
            {isSubmitOrderAvailable && <SubmitOrder onSubmit={submitOrderHandler} onCancel={props.onHideCart} />}
            {!isSubmitOrderAvailable && modalButtons}
        </Modal>
    );
};

export default Cart;
import { useRef } from 'react';
import styles from './SubmitOrder.module.css';

const SubmitOrder = (props) => {

    const nameInputRef = useRef();
    const cityInputRef = useRef();
    const addressInputRef = useRef();

    const confirmOrderHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
    };

    return (
        <form onSubmit={confirmOrderHandler}>
            <div className={styles.control}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" ref={nameInputRef} />
            </div>
            <div className={styles.control}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" ref={cityInputRef} />
            </div>
            <div className={styles.control}>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" ref={addressInputRef} />
            </div>
            <div className={styles.actions}>
                <button className={styles.submit}>Confirm Order</button>
                <button type='button' onClick={props.onCancel}>Cancel</button>
            </div>
        </form>
    );
};

export default SubmitOrder;
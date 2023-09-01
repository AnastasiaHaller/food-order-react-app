import styles from './SubmitOrder.module.css';

const SubmitOrder = (props) => {

    const confirmOrderHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={confirmOrderHandler}>
            <div className={styles.control}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name"/>
            </div>
            <div className={styles.control}>
                <label htmlFor="city">City</label>
                <input type="text" id="city"/>
            </div>
            <div className={styles.control}>
                <label htmlFor="address">Address</label>
                <input type="text" id="address"/>
            </div>
            <div className={styles.actions}>
                <button className={styles.submit}>Confirm Order</button>
                <button type='button' onClick={props.onCancel}>Cancel</button>
            </div>
        </form>
    );
};

export default SubmitOrder;
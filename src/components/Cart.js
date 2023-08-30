function Cart({cartItems}) {
    return (
        <div>
            {cartItems.map((item) => (
                <div key={item.id}>
                    <h2>{item.product.name}</h2>
                    <p>Quantity: {item.quantity}</p>
                </div>
            ))}
        </div>
    );
}

export default Cart;

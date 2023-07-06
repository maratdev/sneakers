import React from 'react';

function EmptyCart(props) {
  return (
    <div className="card__empty">
      <img className="card__empty-img" src="images/empty_cart.svg" alt=""/>
      <h3>Пустая корзина!</h3>
      <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
    </div>
  );
}

export default EmptyCart;

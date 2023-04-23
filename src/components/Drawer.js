export default function Drawer() {
  return (
    <div className="drawer drawer__dsp-none">
      <div className="drawer__container">
        <h3 className="drawer__title">Корзина <button className="drawer__close"></button></h3>

        <ul className="cart">
          <li className="cart__item">
            <a className="cart__src" href=""><img className="cart__img" src="./images/card/2.png" alt="Мужские Кроссовки Nike Air Max 270"/></a>
            <div className="cart__desc">
              <h4 className="cart__title"><a className="cart__title-src" href="">Мужские Кроссовки Nike Air Max 270</a></h4>
              <h5 className="cart__price">12 999 руб.</h5>
            </div>
            <button aria-label="Удалить" type="button" className="cart__del"></button>
          </li>
          <li className="cart__item">
            <a className="cart__src" href=""><img className="cart__img" src="./images/card/1.png" alt="Мужские Кроссовки Nike Air Max 270"/></a>
            <div className="cart__desc">
              <h4 className="cart__title"><a className="cart__title-src" href="">Мужские Кроссовки Nike Blazer Mid Suede</a></h4>
              <h5 className="cart__price">3 999 руб.</h5>
            </div>
            <button aria-label="Удалить" type="button" className="cart__del"></button>
          </li>

        </ul>
        <ul className="total">
          <li className="total__price">
            <span className="total__title">Итого:</span>
            <div className="total__dashed"></div>
            <span className="total__cost">21 498 руб. </span>
          </li>
          <li className="total__price">
            <span className="total__title">Налог 5%:</span>
            <div className="total__dashed"></div>
            <span className="total__cost">1074 руб. </span>
          </li>
          <button className="total__btn">Оформить заказ</button>
        </ul>
      </div>
    </div>
  )
}

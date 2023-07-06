import EmptyCart from "./EmptyCart";

export default function Drawer({onClose, onRemoveCart, cartItems=[]}) {
  return (
    //drawer__dsp-none
 <div className="drawer">
      <div className="drawer__container">
        <h3 className="drawer__title">Корзина <button onClick={onClose} className="drawer__close"></button></h3>

        { cartItems.length > 0 ? (
          <>
          <ul className="cart">
            {
              cartItems.map((obj)=> (
                  <li key={obj.id} className="cart__item">
                    <a className="cart__src" href=""><img className="cart__img" src={obj.img} alt={obj.title}/></a>
                    <div className="cart__desc">
                      <h4 className="cart__title"><a className="cart__title-src" href="">{obj.title}</a></h4>
                      <h5 className="cart__price">{obj.price}</h5>
                    </div>
                    <button onClick={()=>onRemoveCart(obj.id)} aria-label="Удалить" type="button" className="cart__del"></button>
                  </li>
                )
              )
            }
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
          </>
          ) : <EmptyCart/>



        }





      </div>
    </div>
  )
}

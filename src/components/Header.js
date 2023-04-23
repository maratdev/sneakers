export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__logo-img" src="/images/logo.svg" alt="лого"/>
        <div className="header__wrap">
          <h3 className="header__title">REACT SNEAKERS</h3>
          <p className="header__subtitle">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="header__basket">
        <li className="header__item"><img className="header__item-img" src="/images/basket.svg" alt=""/><span className="header__price">1234 руб.</span></li>
        <li className="header__item"><img src="/images/heart.svg" alt=""/></li>
        <li className="header__item"><img src="/images/user.svg" alt=""/></li>
      </ul>
    </header>
  )
}

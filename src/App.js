import logo from './logo.svg';
import './App.css';
import './index.scss';
//import { Carousel } from '';

function App() {return (
<div className="wrapper">
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
  <main className="content">
    <section className="slider">
      <button type="button" className="slider__pagination slider__pagination-l"></button>
      <ul className="slider__list">
        <li><a href=""><img src="/images/slider/1.jpg" alt="картинка слайдера"/></a></li>
      </ul>
      <button type="button" className="slider__pagination slider__pagination-r"></button>
    </section>
    <section className="search">
      <h1 className="search__title">Все кроссовки</h1>
      <input className="search__input" type="text" placeholder="Поиск..."/>
    </section>
    <section className="grid">
      <ul className="grid__elements">
        <li className="grid__items">
          <article className="card">
            <button className="card__like" type="button" aria-label="Лайк"></button>
            <img className="card__img" src="./images/card/1.png" alt="Мужские Кроссовки Nike Blazer Mid Suede"/>
            <h3 className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</h3>
            <div className="card__desc">
              <p className="card__cost">Цена</p>
              <h4 className="card__price">12 999 руб.</h4>
              <button aria-label="Добавить" type="button" className="card__add">+</button>
            </div>
          </article>

        </li>
      </ul>
    </section>
  </main>
</div>

  );
}

export default App;

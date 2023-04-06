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
        <li className="slider__item"><a className="slider__src" href=""><img className="slider__img" src="/images/slider/1.jpg" alt="картинка слайдера"/></a></li>
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
            <a href=""><img className="card__img" src="./images/card/1.png" alt="Мужские Кроссовки Nike Blazer Mid Suede"/></a>
            <h3 className="card__title"><a className="card__title-src" href="">Мужские Кроссовки Nike Blazer Mid Suede</a></h3>
            <div className="card__desc">
              <p className="card__cost">Цена</p>
              <h4 className="card__price">12 999 руб.</h4>
              <button aria-label="Добавить" type="button" className="card__add"></button>
            </div>
          </article>
        </li>
        <li className="grid__items">
          <article className="card">
            <button className="card__like" type="button" aria-label="Лайк"></button>
            <a href=""><img className="card__img" src="./images/card/2.png" alt="Мужские Кроссовки Nike Air Max 270"/></a>
            <h3 className="card__title"><a className="card__title-src" href="">Мужские Кроссовки Nike Air Max 270</a></h3>
            <div className="card__desc">
              <p className="card__cost">Цена</p>
              <h4 className="card__price">10 999 руб.</h4>
              <button aria-label="Добавить" type="button" className="card__add"></button>
            </div>
          </article>
        </li>
        <li className="grid__items">
          <article className="card">
            <button className="card__like" type="button" aria-label="Лайк"></button>
            <a href=""><img className="card__img" src="./images/card/3.png" alt="Мужские Кроссовки Nike Blazer Mid Suede"/></a>
            <h3 className="card__title"><a className="card__title-src" href="">Мужские Кроссовки Nike Blazer Mid Suede</a></h3>
            <div className="card__desc">
              <p className="card__cost">Цена</p>
              <h4 className="card__price">8 599 руб.</h4>
              <button aria-label="Добавить" type="button" className="card__add"></button>
            </div>
          </article>
        </li>
        <li className="grid__items">
          <article className="card">
            <button className="card__like" type="button" aria-label="Лайк"></button>
            <a href=""><img className="card__img" src="./images/card/4.png" alt="Кроссовки Puma X Aka Boku Future Rider"/></a>
            <h3 className="card__title"><a className="card__title-src" href="">Кроссовки Puma X Aka Boku Future Rider</a></h3>
            <div className="card__desc">
              <p className="card__cost">Цена</p>
              <h4 className="card__price">11 799 руб.</h4>
              <button aria-label="Добавить" type="button" className="card__add"></button>
            </div>
          </article>
        </li>
        <li className="grid__items">
          <article className="card">
            <button className="card__like" type="button" aria-label="Лайк"></button>
            <a href=""><img className="card__img" src="./images/card/5.png" alt="Мужские Кроссовки Under Armour Curry 8"/></a>
            <h3 className="card__title"><a className="card__title-src" href="">Мужские Кроссовки Under Armour Curry 8</a></h3>
            <div className="card__desc">
              <p className="card__cost">Цена</p>
              <h4 className="card__price">9 999 руб.</h4>
              <button aria-label="Добавить" type="button" className="card__add"></button>
            </div>
          </article>
        </li>
        <li className="grid__items">
          <article className="card">
            <button className="card__like" type="button" aria-label="Лайк"></button>
            <a href=""><img className="card__img" src="./images/card/6.png" alt="Мужские Кроссовки Nike Kyrie 7"/></a>
            <h3 className="card__title"><a className="card__title-src" href="">Мужские Кроссовки Nike Kyrie 7</a></h3>
            <div className="card__desc">
              <p className="card__cost">Цена</p>
              <h4 className="card__price">7 599 руб.</h4>
              <button aria-label="Добавить" type="button" className="card__add"></button>
            </div>
          </article>
        </li>
        <li className="grid__items">
          <article className="card">
            <button className="card__like" type="button" aria-label="Лайк"></button>
            <a href=""><img className="card__img" src="./images/card/7.png" alt="Мужские Кроссовки Jordan Air Jordan 11"/></a>
            <h3 className="card__title"><a className="card__title-src" href="">Мужские Кроссовки Jordan Air Jordan 11</a></h3>
            <div className="card__desc">
              <p className="card__cost">Цена</p>
              <h4 className="card__price">3 899 руб.</h4>
              <button aria-label="Добавить" type="button" className="card__add"></button>
            </div>
          </article>
        </li>
        <li className="grid__items">
          <article className="card">
            <button className="card__like" type="button" aria-label="Лайк"></button>
            <a href=""><img className="card__img" src="./images/card/8.png" alt="Мужские Кроссовки Nike LeBron XVIII"/></a>
            <h3 className="card__title"><a className="card__title-src" href="">Мужские Кроссовки Nike LeBron XVIII</a></h3>
            <div className="card__desc">
              <p className="card__cost">Цена</p>
              <h4 className="card__price">10 999 руб.</h4>
              <button aria-label="Добавить" type="button" className="card__add"></button>
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

import {useEffect, useState} from "react";

import Card from './components/Cards';
import Header from './components/Header';
import Drawer from './components/Drawer';

import './App.css';
import './index.scss';

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [cartOpened, setCartOpened] = useState(false)

  useEffect(() => {
    fetch('https://64876afebeba629727909d7a.mockapi.io/items')
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        setItems(json)
      });

  }, [])

  const onAddToCart = (obj) => {
    if (cartItems === obj){
      return setCartItems(prevState => [...prevState, obj])
    }

  }
  console.log(cartItems)

  return (
    <div className="wrapper">
      <Header onClickCard={() => setCartOpened(true)}/>
      <main className="content">
        <section className="slider">
          <button type="button" className="slider__pagination slider__pagination-l"></button>
          <ul className="slider__list">
            <li className="slider__item"><a className="slider__src" href="">
              <img className="slider__img"
                   src="/images/slider/1.jpg"
                   alt="картинка слайдера"/></a></li>
          </ul>
          <button type="button" className="slider__pagination slider__pagination-r"></button>
        </section>
        <section className="search">
          <h1 className="search__title">Все кроссовки</h1>
          <input className="search__input" type="text" placeholder="Поиск..."/>
        </section>
        <section className="grid">
          <ul className="grid__elements">
            {items.map((post) => (
              <Card
                key={post.id}
                title={post.title}
                img={post.img}
                price={post.price}
                onClickFavorite={() => console.log('Добавить в закладки')}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))
            }
          </ul>
        </section>
        {cartOpened && <Drawer cartItems={cartItems} onClose={() => setCartOpened(false)}/>}

      </main>
    </div>

  );
}

export default App;

import {useEffect, useState} from "react";
import axios from "axios";

import Card from './components/Cards';
import Header from './components/Header';
import Drawer from './components/Drawer';

import './App.css';
import './index.scss';

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [cartOpened, setCartOpened] = useState(false)

  useEffect(() => {
    axios.get('https://64876afebeba629727909d7a.mockapi.io/items')
      .then((res) => {
        setItems(res.data)
      })
    axios.get('https://64876afebeba629727909d7a.mockapi.io/cart')
      .then((res) => {
        setCartItems(res.data)
      })

  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://64876afebeba629727909d7a.mockapi.io/cart', obj);
    setCartItems(prevState => [...prevState, obj])
  }

  const onRemoveCart = (id) => {
    axios.delete(`https://64876afebeba629727909d7a.mockapi.io/cart/${id}`);
    setCartItems(prevState => prevState.filter(item=> item.id !== id))
  }

  const onChangeSearchInput = (evt) => {
    console.log(evt.target.value)
    setSearchValue(evt.target.value);
  }

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
          <h1 className="search__title">{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>
          <input onChange={onChangeSearchInput} className="search__input" value={searchValue} type="text" placeholder="Поиск..."/>
          {searchValue && <button onClick={()=> setSearchValue('')} className="search__close-icon" type="reset"></button>}
        </section>
        <section className="grid">
          <ul className="grid__elements">
            {items.filter(item=>item.title.toLowerCase().includes(searchValue.toLowerCase())).map((post) => (
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
        {cartOpened && <Drawer cartItems={cartItems} onClose={() => setCartOpened(false)} onRemoveCart={onRemoveCart}/>}

      </main>
    </div>

  );
}

export default App;

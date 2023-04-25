import logo from './logo.svg';
import './App.css';
import './index.scss';
import Card from './components/Cards';
import Header from './components/Header';
import Drawer from './components/Drawer';

const card = [
  {id: 0, title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, img: '/images/card/1.png'},
  {id: 1, title: 'Мужские Кроссовки Nike Air Max 270', price: 12999, img: '/images/card/2.png'},
  {id: 2, title: 'Мужские Кроссовки Nike Blazer Max Rider', price: 10799, img: '/images/card/3.png'},
  {id: 3, title: 'Кроссовки Puma X Aka Boku Future Rider', price: 11599, img: '/images/card/4.png'},
  {id: 4, title: 'Мужские Кроссовки Under Armour Curry 8', price: 5599, img: '/images/card/5.png'},
  {id: 5, title: 'Мужские Кроссовки Nike Kyrie 7', price: 7599, img: '/images/card/6.png'},
  {id: 6, title: 'Мужские Кроссовки Jordan Air Jordan 11', price: 3899, img: '/images/card/7.png'},
  {id: 7, title: 'Мужские Кроссовки Nike LeBron XVIII', price: 13899, img: '/images/card/8.png'},
]



function App() {  return (
<div className="wrapper">
  <Header/>
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
        {card.map((post,keys) => (<Card  key={keys} title={post.title} img={post.img} price={post.price} onClickFavorite={()=>console.log('Добавить в закладки')} onClickPlus={()=>console.log('Нажатие на +')}/>))}
      </ul>
    </section>
    <Drawer/>
  </main>
</div>

  );
}

export default App;

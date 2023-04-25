import React from "react";
function Card(post) {
  const [isAdded, setIsAdded] = React.useState(false);
  const handleClickPlus =() => {
    setIsAdded(!isAdded)
  };
  React.useEffect(()=>{
    console.log('Переменная изменилась!');
  }, [isAdded]);
  return (
    <li key={post.keys} className="grid__items">
      <article className="card">
        <button className="card__like" onClick={post.onClickFavorite} type="button" aria-label="Лайк"></button>
        <a  href=""><img className="card__img" src={post.img} alt={post.title}/></a>
        <h3 className="card__title"><a className="card__title-src" href="">{post.title}</a></h3>
        <div className="card__desc">
          <p className="card__cost">Цена</p>
          <h4 className="card__price">{post.price} руб</h4>
          <button className={`card__add ${isAdded ? 'card__add_active' : ' '}`} aria-label="Добавить" onClick={handleClickPlus} type="button"></button>
        </div>
      </article>
    </li>
  )
}
export default Card;

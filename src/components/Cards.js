import React, {useState} from "react";
function Card({id, title, img, price, onClickFavorite, onPlus}) {
  const [isSelectedId, setSelectedId] = useState(false);
  const handleClickPlus =() => {
    onPlus({title, img, price })
    setSelectedId(!isSelectedId)
  };

  return (
    <li key={id} className="grid__items">
      <article className="card">
        <button className="card__like" onClick={onClickFavorite} type="button" aria-label="Лайк"></button>
        <a  href=""><img className="card__img" src={img} alt={title}/></a>
        <h3 className="card__title"><a className="card__title-src" href="">{title}</a></h3>
        <div className="card__desc">
          <p className="card__cost">Цена</p>
          <h4 className="card__price">{price} руб</h4>
          <button className={`card__add ${isSelectedId ? 'card__add_active' : ''}`} aria-label="Добавить" onClick={handleClickPlus} type="button"></button>
        </div>
      </article>
    </li>
  )
}
export default Card;

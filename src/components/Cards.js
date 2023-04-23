function Card(post) {
  //console.log(post.myKey)
  return (
    <li className="grid__items">
      <article className="card">
        <button className="card__like" type="button" aria-label="Лайк"></button>
        <a  href=""><img className="card__img" key={post.keys} src={post.img} alt={post.title}/></a>
        <h3 className="card__title"><a className="card__title-src" key={post.keys}  href="">{post.title}</a></h3>
        <div className="card__desc">
          <p className="card__cost">Цена</p>
          <h4 key={post.keys} className="card__price">{post.price} руб</h4>
          <button aria-label="Добавить" type="button" className="card__add"></button>
        </div>
      </article>
    </li>
  )
}
export default Card;

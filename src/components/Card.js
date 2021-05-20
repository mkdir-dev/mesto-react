function Card() {
  return (
    <template className="place-template">
      <li className="place-card">
        <img className="place-card__image" src="#" alt="" />
        <div className="place-card__wrapper">
          {/*eslint-disable-next-line*/}
          <h2 className="place-card__name"></h2>
          <div className="place-card__like-wrap">
            <button className="place-card__like" type="button" aria-label="Нравится"></button>
            <p className="place-card__like-count">0</p>
          </div>
        </div>
        <button className="place-card__delete" type="button" aria-label="Удалить">
        </button>
      </li>
    </template>
  );
}

export default Card;
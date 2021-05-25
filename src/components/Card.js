import React from 'react'

function Card(props) {
  return (
      <li className="place-card">
        <img className="place-card__image" src={props.link} alt={props.name} />
        <div className="place-card__wrapper">
          <h2 className="place-card__name">{props.name}</h2>
          <div className="place-card__like-wrap">
            <button className="place-card__like" type="button" aria-label="Нравится"></button>
            <p className="place-card__like-count">{props.likes}</p>
          </div>
        </div>
        <button className="place-card__delete" type="button" aria-label="Удалить">
        </button>
      </li>
  );
}

export default Card;
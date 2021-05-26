import React from 'react'
import api from '../utils/api'
import Card from './Card'

function Main(props) {
  const [userName, setUserName] = React.useState('')
  const [userDescription, setUserDescription] = React.useState('')
  const [userAvatar, setUserAvatar] = React.useState('')
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    api.getUserInfo()
      .then(data => {
        setUserName(data.name)
        setUserDescription(data.about)
        setUserAvatar(data.avatar)
      })
      .catch(err => {
        console.log(`Данные пользователя с сервера не получены. Ошибка: ${err}.`)
      })
  }, [])

  React.useEffect(() => {
    api.getInitialCards()
      .then(cards => {
        setCards(cards)
      })
      .catch(err => {
        console.log(`Данные карточек с сервера не получены. Ошибка: ${err}.`)
      })
  })

  return (
    <main className="content page__section">
      <section className="user">
        <div className="user__wrapper">
          <button
            className="user__edit-avatar"
            type="button"
            aria-label="Редактировать"
            onClick={props.onPopupAvatar}>
            <div className="user__avatar" style={{ backgroundImage: `url(${userAvatar})` }}></div>
          </button>
          <div className="user__info">
            <div className="user__text">
              <h1 className="user__name">{userName}</h1>
              <button
                className="button user__edit"
                type="button"
                aria-label="Редактировать"
                onClick={props.onPopupEdit}>
              </button>
            </div>
            <p className="user__vocation">{userDescription}</p>
          </div>
        </div>
        <button
          className="button user__add"
          type="button"
          aria-label="Добавить"
          onClick={props.onPopupAdd}
        >
        </button>
      </section>

      <section className="places">
        <ul className="places__section">
          {cards.map((card) => (
            <Card
              key={card._id}
              link={card.link}
              name={card.name}
              likes={card.likes.length}
              card={card}
              onCardClick={props.onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
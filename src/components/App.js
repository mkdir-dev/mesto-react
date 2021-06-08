import React from 'react'
import api from '../utils/api'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupAvatar from './PopupAvatar'
import PopupEdit from './PopupEdit'
import PopupAdd from './PopupAdd'
import PopupConfirm from './PopupConfirm'
import ImagePopup from './ImagePopup'

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null)
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cards]) => {
        setCurrentUser(userData)
        setCards(cards)
      })
      .catch(err => {
        console.log(`Данные с сервера не получены. Ошибка: ${err}.`)
      })
  })

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setSelectedCard(null)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onPopupAvatar={handleEditAvatarClick}
          onPopupEdit={handleEditProfileClick}
          onPopupAdd={handleAddPlaceClick}
          onCardClick={handleCardClick}
          cards={cards}
        />
        <Footer />

        <PopupAvatar
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />
        <PopupEdit
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />
        <PopupAdd
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />
        <PopupConfirm />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />

      </div>
    </CurrentUserContext.Provider>
  )
}

export default App
import React from 'react'
import api from '../utils/api'
import { CurrentUserContext } from '../сontext/CurrentUserContext'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupAvatar from './PopupAvatar'
import PopupEdit from './PopupEdit'
import PopupAdd from './PopupAdd'
import PopupConfirm from './PopupConfirm'
import PopupView from './PopupView'

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [currentUser, setCurrentUser] = React.useState('')
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    api.getUserInfo()
      .then(data => {
        setCurrentUser({
          name: data.name,
          about: data.about,
          _id: data._id,
          avatar: data.avatar
        })
      })
      .catch(err => {
        console.log(`Данные пользователья с сервера не получены. Ошибка: ${err}.`)
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

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onPopupAvatar={handleEditAvatarClick}
          onPopupEdit={handleEditProfileClick}
          onPopupAdd={handleAddPlaceClick}
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
        <PopupView />

      </div>
    </CurrentUserContext.Provider>
  )
}

export default App
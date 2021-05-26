import React from 'react'

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
    <div className="page">
      <Header />
      <Main
        onPopupAvatar={handleEditAvatarClick}
        onPopupEdit={handleEditProfileClick}
        onPopupAdd={handleAddPlaceClick}
        onCardClick={handleCardClick}
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
  )
}

export default App
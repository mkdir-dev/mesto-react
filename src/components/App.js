import React from 'react'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupAvatar from './PopupAvatar'
import PopupEdit from './PopupEdit'
import PopupAdd from './PopupAdd'
import PopupConfirm from './PopupConfirm'
import PopupView from './PopupView'
import Card from './Card'

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)

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
    <div className="page">
      <Header />
      <Main
        onPopupAvatar={handleEditAvatarClick}
        onPopupEdit={handleEditProfileClick}
        onPopupAdd={handleAddPlaceClick}
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

      <Card />
    </div>
  )
}

export default App
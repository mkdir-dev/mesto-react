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
      />
      <PopupEdit
        isOpen={isEditProfilePopupOpen}
      />
      <PopupAdd
        isOpen={isAddPlacePopupOpen}
      />
      <PopupConfirm />
      <PopupView />

      <Card />
    </div>
  )
}

export default App
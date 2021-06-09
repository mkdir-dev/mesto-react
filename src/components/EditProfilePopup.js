import React from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

import PopupWithForm from './PopupWithForm'

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext)

  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser])

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  return (
    <PopupWithForm
      title='Редактировать профиль'
      name='edit'
      buttonText='Сохранить'
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input className="popup__input popup__input_type_name" value={name} onChange={handleChangeName} id="name" name="name" type="text" placeholder="Имя"
        minLength="2" maxLength="40" required />
      <span className="popup__input-error" id="name-error"></span>
      <input className="popup__input popup__input_type_vocation" value={description} onChange={handleChangeDescription} id="vocation" name="vocation" type="text"
        placeholder="Деятельность" minLength="2" maxLength="200" required />
      <span className="popup__input-error" id="vocation-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
import PopupWithForm from './PopupWithForm'

function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      title='Обновить аватар'
      name='avatar'
      buttonText='Сохранить'
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input className="popup__input popup__input_type_avatar" id="avatar" name="avatar" type="url"
        placeholder="Ссылка на картинку" minLength="2" required />
      <span className="popup__input-error" id="avatar-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
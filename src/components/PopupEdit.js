import PopupWithForm from './PopupWithForm'

function PopupEdit(props) {
  return (
    <PopupWithForm
      title='Редактировать профиль'
      name='edit'
      buttonText='Сохранить'
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input className="popup__input popup__input_type_name" id="name" name="name" type="text" placeholder="Имя"
        minLength="2" maxLength="40" required />
      <span className="popup__input-error" id="name-error"></span>
      <input className="popup__input popup__input_type_vocation" id="vocation" name="vocation" type="text"
        placeholder="Деятельность" minLength="2" maxLength="200" required />
      <span className="popup__input-error" id="vocation-error"></span>
    </PopupWithForm>
  );
}

export default PopupEdit;
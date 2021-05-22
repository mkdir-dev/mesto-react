import PopupWithForm from './PopupWithForm'

function PopupEdit() {
  return (
    <PopupWithForm
      title='Редактировать профиль'
      name='edit'
      buttonText='Сохранить'
    >
      <input className="popup__input popup__input_type_name" id="name" name="name" type="text" placeholder="Имя"
        minlength="2" maxlength="40" required />
      <span className="popup__input-error" id="name-error"></span>
      <input className="popup__input popup__input_type_vocation" id="vocation" name="vocation" type="text"
        placeholder="Деятельность" minlength="2" maxlength="200" required />
      <span className="popup__input-error" id="vocation-error"></span>
    </PopupWithForm>




  );
}

export default PopupEdit;
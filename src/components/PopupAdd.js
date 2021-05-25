import PopupWithForm from './PopupWithForm'

function PopupAdd(props) {
  return (
    <PopupWithForm
      title='Новое место'
      name='add'
      buttonText='Создать'
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input className="popup__input popup__input_type_title-place" id="title-place" name="title-place" type="text"
        placeholder="Название" minLength="2" maxLength="30" required />
      <span className="popup__input-error" id="title-place-error"></span>
      <input className="popup__input popup__input_type_link-place" id="link-place" name="link-place" type="url"
        placeholder="Ссылка на картинку" minLength="2" required />
      <span className="popup__input-error" id="link-place-error"></span>
    </PopupWithForm>


  );
}

export default PopupAdd;
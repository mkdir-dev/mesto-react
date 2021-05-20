function PopupAdd() {
  return (
    <div className="popup popup_type_add">
      <div className="popup__container">
        <h2 className="popup__title">Новое место</h2>
        <form className="popup__form popup__form_type_add" name="addPlace" novalidate>
          <input className="popup__input popup__input_type_title-place" id="title-place" name="title-place" type="text"
            placeholder="Название" minlength="2" maxlength="30" required />
          <span className="popup__input-error" id="title-place-error"></span>
          <input className="popup__input popup__input_type_link-place" id="link-place" name="link-place" type="url"
            placeholder="Ссылка на картинку" minlength="2" required />
          <span className="popup__input-error" id="link-place-error"></span>
          <button className="popup__button-save" type="submit">Создать</button>
        </form>
        <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
      </div>
    </div>
  );
}

export default PopupAdd;
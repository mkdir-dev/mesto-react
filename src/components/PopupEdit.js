function PopupEdit() {
  return (
    <div className="popup popup_type_edit">
      <div className="popup__container">
        <h2 className="popup__title">Редактировать профиль</h2>
        <form className="popup__form popup__form_type_edit" name="editUser" novalidate>
          <input className="popup__input popup__input_type_name" id="name" name="name" type="text" placeholder="Имя"
            minlength="2" maxlength="40" required />
          <span className="popup__input-error" id="name-error"></span>
          <input className="popup__input popup__input_type_vocation" id="vocation" name="vocation" type="text"
            placeholder="Деятельность" minlength="2" maxlength="200" required />
          <span className="popup__input-error" id="vocation-error"></span>
          <button className="popup__button-save" type="submit" aria-label="Сохранить">Сохранить</button>
        </form>
        <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
      </div>
    </div>
  );
}

export default PopupEdit;
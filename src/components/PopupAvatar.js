function PopupAvatar() {
  return (
    <div className="popup popup_type_avatar">
      <div className="popup__container">
        <h2 className="popup__title">Обновить аватар</h2>
        <form className="popup__form popup__form_type_avatar" name="editAvatar" novalidate>
          <input className="popup__input popup__input_type_avatar" id="avatar" name="avatar" type="url"
            placeholder="Ссылка на картинку" minlength="2" required />
          <span className="popup__input-error" id="avatar-error"></span>
          <button className="popup__button-save" type="submit" aria-label="Сохранить">Сохранить</button>
        </form>
        <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
      </div>
    </div>
  );
}

export default PopupAvatar;
function PopupConfirm() {
  return (
    <div className="popup popup_type_confirm">
      <div className="popup__container">
        <h2 className="popup__title">Вы уверены?</h2>
        <form className="popup__form popup__form_type_confirm" name="confirm" novalidate>
          <button className="popup__button-save popup__button-confirm" type="submit">Да</button>
        </form>
        <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
      </div>
    </div>
  );
}

export default PopupConfirm;
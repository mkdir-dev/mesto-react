function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form className={`popup__form popup__form_type_${props.name}`} name={props.name} novalidate>
          {props.children}
          <button className="popup__button-save" type="submit" aria-label={props.buttonText}>{props.buttonText}</button>
        </form>
        <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
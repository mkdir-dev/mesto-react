function PopupView() {
  return (
    <div className="popup popup_type_view">
      <div className="popup__view">
        <figure className="popup__figure">
          <img className="popup__image" src="#" alt="#" />
          <figcaption className="popup__figcaption"></figcaption>
        </figure>
        <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
      </div>
    </div>
  );
}

export default PopupView;
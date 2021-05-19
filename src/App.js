function App() {
  return (
    
    <div className="page">

      {/* == header == */}
      <header className="header">
        {/* eslint-disable-next-line */}
        <a className="header__logo" href="#" target="_self" rel="noopener"></a>
      </header>

      {/* == content == */}
      <main className="content page__section">

        {/* == user == */}
        <section className="user">
          <div className="user__wrapper">
            <button className="user__edit-avatar" type="button" aria-label="Редактировать">
              <div className="user__avatar"></div>
            </button>
            <div className="user__info">
              <div className="user__text">
                <h1 className="user__name">Жак-Ив Кусто</h1>
                <button className="button user__edit" type="button" aria-label="Редактировать"></button>
              </div>
              <p className="user__vocation">Исследователь океана</p>
            </div>
          </div>
          <button className="button user__add" type="button" aria-label="Добавить"></button>
        </section>

        {/* == places == */}
        <section className="places">
          <ul className="places__section">
          </ul>
        </section>

      </main>

      {/* == footer == */}
      <footer className="footer">
        {/* eslint-disable-next-line */}
        <a href="https://github.com/Joeshua91" className="footer__copyright" target="_blank" rel="noopener">
          &copy; 2021. Михаил Корюков
      </a>
      </footer>

      {/* == popup Avatar == */}
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

      {/* == popup Edit == */}
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

      {/* == popup Add == */}
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

      {/* == popup Confirm == */}
      <div className="popup popup_type_confirm">
        <div className="popup__container">
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="popup__form popup__form_type_confirm" name="confirm" novalidate>
            <button className="popup__button-save popup__button-confirm" type="submit">Да</button>
          </form>
          <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
        </div>
      </div>

      {/* == popup View == */}
      <div className="popup popup_type_view">
        <div className="popup__view">
          <figure className="popup__figure">
            <img className="popup__image" src="#" alt="#" />
            <figcaption className="popup__figcaption"></figcaption>
          </figure>
          <button className="popup__button-close" type="button" aria-label="Закрыть"></button>
        </div>
      </div>

      {/* == place-template == */}
      <template className="place-template">
        <li className="place-card">
          <img className="place-card__image" src="#" alt="" />
          <div className="place-card__wrapper">
            {/*eslint-disable-next-line*/}
            <h2 className="place-card__name"></h2>
            <div className="place-card__like-wrap">
              <button className="place-card__like" type="button" aria-label="Нравится"></button>
              <p className="place-card__like-count">0</p>
            </div>
          </div>
          <button className="place-card__delete" type="button" aria-label="Удалить">
          </button>
        </li>
      </template>

    </div>
  );
}

export default App;

function User() {
  return (
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
  );
}

export default User;
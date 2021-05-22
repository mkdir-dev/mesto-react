import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupAvatar from './PopupAvatar';
import PopupEdit from './PopupEdit';
import PopupAdd from './PopupAdd';
import PopupConfirm from './PopupConfirm';
import PopupView from './PopupView';
import Card from './Card';

function App() {
  function handleEditAvatarClick() {
    document.querySelector('.popup_type_avatar').classList.add('popup_opened')
  }

  function handleEditProfileClick() {
    document.querySelector('.popup_type_edit').classList.add('popup_opened')
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_type_add').classList.add('popup_opened')
  }

  return (
    <div className="page">
      <Header />
      <Main
        onPopupAvatar={handleEditAvatarClick}
        onPopupEdit={handleEditProfileClick}
        onPopupAdd={handleAddPlaceClick}
      />
      <Footer />

      <PopupAvatar />
      <PopupEdit />
      <PopupAdd />
      <PopupConfirm />
      <PopupView />

      <Card />
    </div>
  );
}

export default App;
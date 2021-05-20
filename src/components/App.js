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
  return (
    <div className="page">
      <Header />
      <Main />
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
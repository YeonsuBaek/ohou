import './App.css';
import SidebarModal from './Hooks/SidebarModal';
import Header from './Layouts/Header';
import StorePage from './pages/StorePage';
import useModalStore from './stores/useModalStore';

function App() {
  const { modal, setModal } = useModalStore();
  return (
    <>
      <Header />
      <StorePage />
      {modal && <SidebarModal onClose={() => setModal(false)} />}
    </>
  );
}

export default App;

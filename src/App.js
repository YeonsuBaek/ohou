import './App.css';
import SidebarModal from './Hooks/SidebarModal';
import Header from './Layouts/Header';
import useModalStore from './stores/useModalStore';

function App() {
  const { modal, setModal } = useModalStore();
  return (
    <>
      <Header />

      {modal && <SidebarModal onClose={() => setModal(false)} />}
    </>
  );
}

export default App;

import ReactDom from 'react-dom';
import Overlay from '../Layouts/Overlay';
import Sidebar from '../Layouts/Sidebar';

const SidebarModal = ({ onClose }) => {
  return (
    <>
      {ReactDom.createPortal(
        <Overlay onClose={onClose} />,
        document.getElementById('overlay-root')
      )}
      {ReactDom.createPortal(
        <Sidebar />,
        document.getElementById('sidebar-root')
      )}
    </>
  );
};

export default SidebarModal;

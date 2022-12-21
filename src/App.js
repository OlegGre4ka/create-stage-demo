import './App.css';
import Button from "./components/UI/Button";
import { FlexBox } from "./components/shared-styled";
import Modal from "./components/Modal";
import useModal from "./hooks/useModal";

function App() {
const [isModal, openModal, closeModal] = useModal();
  return (
    <>
      <FlexBox padding="25px">
        <Button clickHandler={openModal}>Create Stage</Button>
      </FlexBox>
       {isModal && <Modal closeModalHandler={closeModal} isOpacity={isModal}/>}
    </>
  );
}

export default App;

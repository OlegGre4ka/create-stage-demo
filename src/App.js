import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { updateStep } from "./redux/slices/stepSlice";
import Button from "./components/UI/Button";
import { FlexBox } from "./components/shared-styled";
import Modal from "./components/Modal";
import useModal from "./hooks/useModal";
import StepOne from "./view/StepOne";
import StepTwo from "./view/StepTwo";
import StepThree from "./view/StepThree";
import {useState} from "react";
import StepSlider from "./components/StepSlider";

function App() {
  // const { step } = useSelector((state) => (state.steps));
  // const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [isModal, openModal, closeModal] = useModal();
  return (
    <>
      <FlexBox padding="25px">
        <Button clickHandler={openModal}>Create Stage</Button>
      </FlexBox>
      {isModal && <Modal closeModalHandler={closeModal} isOpacity={isModal} title="Create Stage">
        <StepSlider step={step}/>
        {step === 1 && <StepOne />}
        {step === 2 && <StepTwo />}
        {step === 3 && <StepThree />}
        <FlexBox justifyContent="flex-end">
          <Button clickHandler={() => step < 3 && setStep(step + 1)}>{step === 3 ? "Create Stage" : "Next"}</Button>
          {/* <Button clickHandler={() => step < 3 && dispatch(updateStep(step + 1))}>{step === 3 ? "Create Stage" : "Next"}</Button> */}
        </FlexBox>
      </Modal>}
    </>
  );
}

export default App;

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
import { useState } from "react";
import StepSlider from "./components/StepSlider";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';


function App() {
  // const { step } = useSelector((state) => (state.steps));
  // const dispatch = useDispatch();

  const schema = yup.object().shape({
    title: yup.string().required("Title is required!"),
    subtitle: yup.string().required("Subtitle is required!"),
    stageType: yup.string().required("Stage Type is required!"),

  });

  const [formStepOne, setFormStepOne] = useState({
    title: "",
    subtitle: "",
    stageType: "",
    // file: ""
  })
  const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: {
      ...formStepOne
    }
  }
  );
  const [step, setStep] = useState(1);
  const [isModal, openModal, closeModal] = useModal();

  const onSubmit = data => {
    setFormStepOne(data);
    console.log(data, "data");
  }
  return (
    <>
      <FlexBox padding="25px">
        <Button clickHandler={openModal}>Create Stage</Button>
      </FlexBox>
      {isModal && <Modal closeModalHandler={closeModal} isOpacity={isModal} title="Create Stage">
        <StepSlider step={step} />
        <form onSubmit={handleSubmit(onSubmit)}>
          {step === 1 && <StepOne formStepOne={formStepOne} setFormStepOne={setFormStepOne} register={register} errors={errors} />}
          {step === 2 && <StepTwo />}
          {step === 3 && <StepThree />}
          <FlexBox justifyContent={step === 1 ? "flex-end" : "space-between"}>
            {step !== 1 && <Button type="button" clickHandler={() => step > 1 && step < 4 && setStep(step - 1)}>Back</Button>}
            <Button
              type={step === 3 ? "submit" : "button"}
              clickHandler={() => step < 3 && setStep(step + 1)}
              disabled={Object.values(formStepOne).some(el => el.length === 0)} >{step === 3 ? "Create Stage" : "Next"}</Button>
            {/* <Button clickHandler={() => step < 3 && dispatch(updateStep(step + 1))}>{step === 3 ? "Create Stage" : "Next"}</Button> */}
          </FlexBox>
        </form>
      </Modal>}
    </>
  );
}

export default App;

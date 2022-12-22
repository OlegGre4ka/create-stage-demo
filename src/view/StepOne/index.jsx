import { StepBox } from "./../../components/shared-styled";
import Input from "./../../components/UI/Input";
import Select from "../../components/UI/Select";
const StepOne = ({ formStepOne, setFormStepOne, register, errors }) => {
    console.log(formStepOne.stageType, "stageType in StepOne")
    return (
        <StepBox>
            <Input
                register={register}
                name="title"
                changeHandler={(e)=>{console.log(e, e.target.value, "value-title");setFormStepOne({...formStepOne, title: e.target.value})}}
                error={errors?.title?.message}
                placeholder="Stage Title"
            />
            <Input
                register={register}
                name="subtitle"
                changeHandler={(e)=>{console.log(e, e.target.value, "value-subtitle");setFormStepOne({...formStepOne, subtitle: e.target.value})}}
                error={errors?.subtitle?.message}
                placeholder="Stage Subtitle"
                margin="16px 0 0 0" />
            <Select
              register={register}
              name="stageType"
              stageType={formStepOne.stageType}
              formStepOne={formStepOne}
              setFormStepOne={setFormStepOne}
              error={errors?.stageType?.message}
              placeholder="Stage Type"
            />
        </StepBox>

    )
}
export default StepOne
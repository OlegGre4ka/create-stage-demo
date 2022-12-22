import InputComponent from "./styled.js";
import { FlexBox, Error } from "./../../shared-styled";

const Input = ({ register, name, type, placeholder, margin, isBorderError, error, changeHandler }) => {
    return (
        <FlexBox width="100%" flexDirection="column">
            <InputComponent
                {...register(name,{
                    onChange: changeHandler,
                    onBlur: (e) => {},
                  })}
                // onChange={changeHandler}
                type={type}
                placeholder={placeholder}
                margin={margin}
                isBorderError={error}
            />
            {error && <Error>{error}</Error>}
        </FlexBox>
    )
}
export default Input
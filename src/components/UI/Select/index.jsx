import { useEffect, useState } from "react";
// import SelectComponent from "./styled";
import { Error } from "./../../shared-styled";
import { SelectMui } from "./styled";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';

const Select = ({ register, name, error, formStepOne, setFormStepOne, placeholder }) => {
    const [type, setType] = useState("");

    useEffect(
        ()=> {
            setType(formStepOne.stageType)
        },[formStepOne.stageType]
    )
    const handleChange = (e) => {
        setType(e.target.value);
        setFormStepOne({...formStepOne, stageType: e.target.value});
        register(name, {value: e.target.value});
    };

    return (
        <FormControl variant="standard" >
            <InputLabel id="demo-simple-select-standard-label" style={{ fontSize: "16px", zIndex: 999, marginLeft: "10px", marginTop: "17px" }}>{placeholder}</InputLabel>
            <SelectMui
                {...register(name,{
                    onChange: handleChange,
                    onBlur: (e) => {},
                  })}
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={type}
                // onChange={handleChange}
                label={placeholder}
            >
                <MenuItem value="Test Task1">Test Task1</MenuItem>
                <MenuItem value="Test Task2">Test Task2</MenuItem>
                <MenuItem value="Test Task3">Test Task3</MenuItem>
            </SelectMui>
            {error && <Error>{error}</Error>}
        </FormControl>
    )
}
export default Select
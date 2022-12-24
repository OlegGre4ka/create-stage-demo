import { useState, useRef, useEffect } from "react";
import { FlexBox } from "./../../shared-styled";
import { FileUploadInput, FileInputLabel } from "./styled";
import Badge from "./../Badge";
import { AiOutlineCloseCircle } from "react-icons/ai";

const FileUpload = ({formStepOne, setFormStepOne }) => {
    const hiddenFileInput = useRef(null);
    const [files, setFiles] = useState([]);
    useEffect(
        () => {
            setFiles([...formStepOne.files])
        }, [formStepOne.files]
    )
    const removeFile = (index) => {
        const removedFiles = files.filter((el, i) => i !== index);
        console.log(index, removedFiles, "removedFiles")
        setFiles([...removedFiles]);
        setFormStepOne({...formStepOne, files: [...removedFiles]});
    }

    console.log(formStepOne.files, "files")
    return (
        <>
            <FileUploadInput
                ref={hiddenFileInput}
                onChange={(e) => {
                    setFiles([...files, ...e.target.files]);
                    setFormStepOne({...formStepOne, files: [...files, ...e.target.files]});
                    console.log(e.target.files, "file")
                }}
                name='file'
                type="file"
            />
            <FileInputLabel
                onClick={() => hiddenFileInput.current.click()}
            >
                Select file ...
            </FileInputLabel>
            <FlexBox margin="16px 0 0 0">
                {files !== undefined && files.length > 0 &&
                    files.map((elem, i) => (
                        <Badge
                            key={elem.size}
                            justifyContent="center"
                            alignItems="center"
                        >{elem.name}<AiOutlineCloseCircle style={{ marginLeft: "5px", cursor: "pointer" }}
                            onClick={() => removeFile(i)} /></Badge>))
                }
            </FlexBox>
        </>
    )
}
export default FileUpload;
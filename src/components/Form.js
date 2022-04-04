import { useForm } from "react-hook-form"
import styled from "styled-components"

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    background-color: none;
    width: 100%;
`
const FormularioLabel = styled.label`
    font-weight: bold;
    color: #01013D;
    margin-top: 0.55em;
`
const FormularioInput = styled.input`
    color: #01013D;
    background-color: #FFFFFF;
    width: 100%;
    border: 1px solid #01013D;
    border-radius: 3px;
    padding: 0.5em 0.75em;
    outline: none;
    margin-bottom: 0.25em;
    box-sizing: border-box;
`
const FormularioErrors = styled.p`
    color: #D90429;
    margin: 0;
    padding: 0;
`
const FormularioButtonsDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 0.75em;
`
const FormularioButton = styled.button`
    cursor: pointer;
    color: #FFFFFF;
    background-color: #01013D;
    border: 1px solid #01013D;
    width: fit-content;
    padding: 0.5em 1em;
    margin: 0 0 0 0.45em;
    border-radius: 15px;
    &:hover{
        border-color: #38B000;
        background-color: #38B000;
    }
`
const FormularioButtonCancel = styled(FormularioButton)`
    color: #01013D;
    background-color: #FFFFFF;
    border: 1px solid #01013D;
    &:hover{
        border-color: #D90429;
        background-color: #D90429;
    }
`
export default function Form(props){
    const { register, formState: { errors }, handleSubmit, resetField } = useForm();

    const onSubmit = (data) => {
        const newQrCodeData = `Nome: ${data.name}\nEmail: ${data.email}\nTwitter: ${data.twitter}\nGithub: ${data.github}`
        props.setQrCodeValue(newQrCodeData)
    }
    const handleCancel = () => {
        resetField("name")
        resetField("email")
        resetField("twitter")
        resetField("github")
    }
    return(
        <Formulario onSubmit={handleSubmit(onSubmit)}>
            <FormularioLabel>Name</FormularioLabel>
            <FormularioInput {...register("name", {required: true})}/>
            <FormularioErrors>{errors.name?.type === 'required' && "Name is required"}</FormularioErrors>
            <FormularioLabel>Email</FormularioLabel>
            <FormularioInput {...register("email", {required: true})}/>
            <FormularioErrors>{errors.email?.type === 'required' && "Email is required"}</FormularioErrors>
            <FormularioLabel>Twitter</FormularioLabel>
            <FormularioInput {...register("twitter")}/>
            <FormularioLabel>Github</FormularioLabel>
            <FormularioInput {...register("github")}/>
            <FormularioButtonsDiv>
                <FormularioButtonCancel onClick={handleCancel}>Cancel</FormularioButtonCancel>
                <FormularioButton type="submit">Create QR Code</FormularioButton> 
            </FormularioButtonsDiv>
        </Formulario>
    )
}
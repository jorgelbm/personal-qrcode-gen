import styled from "styled-components"
import QRCode from "react-qr-code"
import Form from "./components/Form"
import { useState } from "react"

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px){
    background-color: #c5c5c5;
    height: auto;
  }
`
const MainContent = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  height: fit-content;
  border-radius: 5px;
  overflow: hidden;
  @media screen and (max-width: 768px){
    display: block;
  }
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 350px;
  padding: 2em;
  background-color: #C5C5C5;
`
const Titulo = styled.h1`
  margin-top: 0;
  margin-bottom: 1em;
`

const Texto = styled.p`

`
export default function App(){

  const [qrCodeValue, setQrCodeValue] = useState("")


  return(
    <Wrapper>
      <MainContent>
        <Box>
          <Titulo>Insert your personal info to create a QR Code</Titulo>
          <Form setQrCodeValue={setQrCodeValue}></Form>
        </Box>
        <Box>
          <QRCode value={qrCodeValue} size={256}></QRCode>
          <Texto>
            Data preview:
            {qrCodeValue}
          </Texto>
        </Box>
      </MainContent>
    </Wrapper>
      
    
  )
}
import styled from "styled-components"
import QRCode from "react-qr-code"
import Form from "./components/Form"
import { useState } from "react"

import bgImage from "./images/background-image.jpg"
import qrcodeGif from "./images/qr_code_gif.gif"
import successTick from "./images/success_tick.gif"

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  @media screen and (max-width: 768px){
    height: fit-content;
    padding-top: 1em;
    padding-bottom: 1em;
  }
`
const MainContent = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  height: fit-content;
  border-radius: 15px;
  overflow: hidden;
  @media screen and (max-width: 768px){
    display: block;
  }
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 350px;
  padding: 2em;
  background-color: #FFFFFF;
  @media screen and (max-width: 500px){
    padding: 2em 1em;
  }
  @media screen and (max-width: 375px){
    padding: 2em 0.35em;
  }
  @media screen and (max-width: 360px){
    padding: 2em 0;
  }
`
const Titulo = styled.h1`
  margin-top: 0;
  margin-bottom: 1em;
  color: #01013D;
`

const Texto = styled.p`
  color: #01013D;
`
export default function App(){

  const [qrCodeValue, setQrCodeValue] = useState("")

  const renderLoading = () => {
     return(<img style={{width: '100%'}}  src={`${qrcodeGif}`} alt="Homem sentado em um banco com celular na mão contendo um QR Code"></img>)
  }

  const renderQrCode = () => {
    return(
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <QRCode value={qrCodeValue} size={256}></QRCode>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <img style={{width: '80px', height: '80px'}}  src={`${successTick}`} alt="Gif de Sucesso"></img>
          <Texto>Your QR Code has been generated!</Texto>
        </div>
      </div>)
  }
  return(
    <Wrapper>
      <MainContent>
        <Box>
          <Titulo>Insert your personal info to create a QR Code</Titulo>
          <Form setQrCodeValue={setQrCodeValue}></Form>
        </Box>
        <Box>
          {qrCodeValue.length === 0 ? renderLoading() : renderQrCode()}
          
        </Box>
      </MainContent>
    </Wrapper>
      
    
  )
}
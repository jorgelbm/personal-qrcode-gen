import styled from "styled-components"
import QRCode from "react-qr-code"
import Form from "./components/Form"
import { useState } from "react"

const MainContent = styled.main`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`
export default function App(){

  const [qrCodeValue, setQrCodeValue] = useState("")


  return(
      <MainContent>
        <Form setQrCodeValue={setQrCodeValue}></Form>
        <QRCode value={qrCodeValue}></QRCode>
      </MainContent>
      
    
  )
}
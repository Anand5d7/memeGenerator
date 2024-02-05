// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 30px;
  width: 30vw;

  @media screen and (min-width: 768px) {
    width: 60vw;
    padding: 40px;
    min-height: 100vh;
    max-width: 1140px;
    background-color: black;
    flex-direction: column;
  }
`

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    text-align: left;
    font-size: 32px;
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const MemeImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  height: 300px;
  padding: 30px;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    order: 2;
    margin-left: 80px;
    padding: 20px;
    margin-right: 0px;
    align-self: center;
    width: 400px;
    min-height: 350px;
  }
`

export const TextContent = styled.p`
  color: #ffffff;
  font-family: 'Open Sans';
  text-align: center;
  font-size: ${props => props.activeFontSizeId}px;
  font-weight: 600;
  line-height: 1.5;
`

export const MemeGeneratorForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CustomInput = styled.input`
  height: 30px;
  width: 100%;
  color: #5a7184;
  font-family: 'Open Sans';
  font-weight: 500;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  outline: none;
  background-color: #ffffff;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    width: 100%;
    margin-right: 150px;
  }
`
export const CustomLabel = styled.label`
  color: #7e858e;
  font-family: 'Open Sans';
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5px;
  margin-bottom: 15px;
`
export const CustomSelect = styled.select`
  color: #1e293b;
  background-color: #ffffff;
  height: 40px;
  border: 1px solid #d7d7d7;
  border-radius: 5px;
  outline: none;
  padding: 10px;
  margin-bottom: 30px;
`

export const CustomOption = styled.option`
  font-size: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 10px;
`

export const GenerateButton = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  font-family: 'Open Sans';
  font-size: 15px;
  border-radius: 6px;
  height: 35px;
  width: 140px;
  border: none;
  outline: none;
  cursor: pointer;
`

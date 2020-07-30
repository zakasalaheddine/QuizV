import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const TitleStyled = styled(motion.h1)`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.9rem;
`

export const ImageLogo = styled(motion.img)`
  height: 100px;
  width: auto;
`

export const StepStyled = styled(motion.div)`
  .box {
    position: relative;
    width: fit-content;
    height: fit-content;
    min-width: 250px;
    display: block;
    border-radius: 5px;
    background: linear-gradient(to right, #abbd73 35%, #d6e2ad 100%);
    margin-bottom: 15px;
    margin-left: auto;
    margin-right: auto;
    padding: 15px 25px 15px 40px;
    color: darkslategray;
    box-shadow: 1px 2px 1px -1px #777;
    transition: background 200ms ease-in-out;
    &:hover {
      background: linear-gradient(to right, #abbd73 0%, #abbd73 100%);
    }
  }
  .shadow {
    position: relative;
    &::before {
      z-index: -1;
      position: absolute;
      content: "";
      bottom: 13px;
      right: 7px;
      width: 75%;
      top: 0;
      box-shadow: 0 15px 10px #777;
      transform: rotate(4deg);
      transition: all 150ms ease-in-out;
    }
    &:hover {
      &::before {
        transform: rotate(0deg);
        bottom: 20px;
        z-index: -10;
      }
    }
  }
  .circle {
    position: absolute;
    top: 17px;
    left: 15px;
    border-radius: 50%;
    box-shadow: inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5),
      inset 0 0 0 25px #dfe4ea;
    width: 20px;
    height: 20px;
    display: inline-block;
  }
  .text {
    text-transform: uppercase;
    vertical-align: top;
    padding-left: 10px;
    font-weight: bold;
    font-size: 1rem;
  }
`

export const LabelStyled = styled.label`
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  display: block;
  font-size: 1.3rem;
`

export const CardStyled = styled.div`
  @media (min-width: 992px) {
    width: ${props => props.small ? '60%' : '100%'};
  }
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  overflow: hidden;
`

export const SelectStyled = styled(motion.select)`
  font-weight: bold;
  outline: none;
  border-radius: 20px;
  padding: 0px 30px;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
`

export const InputTextStyled = styled.input`
  font-weight: bold;
  font-size: 1.2rem;
  outline: none;
  border-radius: 20px;
  padding: 0px 30px;
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
`

export const ButtonStyled = styled.button`
  font-weight: bold;
  font-size: 1.2rem;
  outline: none;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
`

export const TextAreaStyled = styled.textarea`
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
`

export const Switch = styled(motion.div)`
  margin: 0 10px 0 0;
  width: 50px;
  height: 30px;
  border-radius: 100px;
  padding: 10px 5px;
  display: flex;
  cursor: pointer;
  align-items: center;
  background-color: ${props => props.isSelected ? '#22cc88' : '#dddddd'};
  justify-content: ${props => props.isSelected ? 'flex-end' : 'flex-start'};
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  div{
    width: 20px;
    height: 20px;
    background-color: #ffffff;
    border-radius: 200px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.02);
  }
`

export const DeleteButton = styled.button`
  margin: 0 0 0 10px;
  font-weight: bold;
  font-size: 1.2rem;
  outline: none;
  height: 30px;
  width: 30px;
  color: #FFFFFF;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
`

export const UlStyled = styled.ul`
  list-style-type: none;
`

export const SpanWithIcon = styled.span`
  padding: 10px 15px;
  i{
    font-size: 1.5em;
    color: blue;
  }
`

export const LinkAsBuuton = styled.a`
  background-color: ${props => props.backColor};
  font-weight: bold;
  font-size: 1.2rem;
  outline: none;
  border-radius: 20px;
  color: #FFFFFF;
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  &:hover{
    color: #FFFFFF;
  }
`


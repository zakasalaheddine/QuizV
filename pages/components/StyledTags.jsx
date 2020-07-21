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
  }
`


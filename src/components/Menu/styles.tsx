import styled from "styled-components"

const phoneSize = "768px";


export const BurgerButton = styled.div`
  width: 30px;
  height: 20px;
  margin-left: 20px;
  position: absolute;
  cursor: pointer;
  
  &::before {
      content: '';
      position: absolute;
      top: 0;
      width: 30px;
      background-color: black;
      height: 3px;
    }
  
  & span {
      position: absolute;
      top: 9px;
      width: 30px;
      background-color: black;
      height: 3px;
    }
  
  &::after {
      content: '';
      position: absolute;
      top: 18px;
      width: 30px;
      background-color: black;
      height: 3px;
    }
`

type MenyContainerProps = {
    active: boolean
}
export const MenuContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 50px;
  left: 0;
  transform: translateX(-100%);
  transition: all 0.4s;
  z-index: 50;

  ${ (props:MenyContainerProps) => props.active && `
      transform: translateX(0);
      transition: all 0.2s;
    `}
`

export const Blur = styled.div`
  width: 70vw;
  left: 30%;
  height: 100vh;
  backdrop-filter: blur(2px);
  position: absolute;

  @media screen and (max-width: ${phoneSize}){
    width: 0;
    backdrop-filter: none;
  }
`

export const Content = styled.div`
  width: 30%;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none; 

  @media screen and (max-width: ${phoneSize}){
    width: 100%;
  }
`

export const Header = styled.div`
  padding: 10px;
  font-size: 2em;
  color: white;
  border-bottom: 1px solid white;
  width: 100%;
  text-align: center;
`

export const Item = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.5em;
  transition: all 0.1s;
  cursor: pointer;
  margin: 4px;
  
  &:hover {
    font-size: 1.6em; 
    margin: 0px;
  }
`

export const List = styled.ul`
  margin-top: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  $ li {
    display: flex;
    align-items: center;
    margin: 5px;
  }
`

export const AddButton = styled.button`
  color: white;
  text-decoration: none;
  font-size: 1.5em;
  transition: all 0.1s;
  cursor: pointer;
  border: 0;
  background: transparent;
  margin: 12px;

  &:hover {
    font-size: 1.6em; 
    margin: 11px;
  }
`
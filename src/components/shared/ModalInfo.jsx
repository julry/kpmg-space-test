import React, {useContext} from "react";
import styled from 'styled-components';
import { ProgressContext } from '../../context/ProgressContext';
import {ModalTypes} from "../../screens.config";
import {PlayIcon} from "./svg/PlayIcon";
import {Button} from "./Button";

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
`
const ModalWrapper = styled.div`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 335px;
      @media screen and (max-width: 340px){
        max-width: 280px;
      }
      
      @media screen and (min-width: 640px){
        max-width: 310px;
      }
`

const Modal = styled.div`
      position: relative;
      white-space: pre-wrap;
      top:0;
      width: 100%;
      left: 0;
      z-index: 3;
      background: #FFFFFF;
      color: black;
      border-radius: 10px;
      padding: 15px 17px;
      min-height: 100px;
      
      @media screen and (max-width: 340px){
         white-space: normal;
      }
`

const Title = styled.p`
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    font-weight: 500;
    margin-bottom: 5px;
`
const Text = styled.p`
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
`

const NextBtn = styled(Button)`
  position: absolute;
  width: 65px;
  height: 79px;
  background: #00BDFF;
  border-radius: 10px;
  z-index:1;
  left: 0;
  bottom: -55px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 9px;
  & svg{
      width: 42px;
      height: 42px;
  }
`

export const ModalInfo = (props) => {
    const {type, text, setIsModal, planet} = props;
    const { retryPlanet, setNext } = useContext(ProgressContext);

    return <Wrapper>
        {type === ModalTypes.Error ?
            <ModalWrapper>
                <Modal>
                    <Title>Ошибка :(</Title>
                    <Text>Ой! Давай попробуем еще раз?</Text>
                </Modal>
                <NextBtn onClick={()=>retryPlanet(planet)}><PlayIcon /></NextBtn>
            </ModalWrapper>
            : type === ModalTypes.Tip ? <ModalWrapper>
                <Modal>
                    <Title>Подсказка</Title>
                    <Text>{text ?? ''}</Text>
                </Modal>
                <NextBtn onClick={()=>setIsModal(false)}><PlayIcon /></NextBtn>
            </ModalWrapper>
                : <ModalWrapper>
                    <Modal>
                        <Text>{text ?? ''}</Text>
                    </Modal>
                    <NextBtn onClick={setNext}><PlayIcon /></NextBtn>

                </ModalWrapper>

        }
    </Wrapper>
}
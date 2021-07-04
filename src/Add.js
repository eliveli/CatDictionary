import React, { useRef } from "react";
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { addDictFB } from './redux/modules/dict'
import title_img from "./image/color_cat.png";
import pencil_img from "./image/pencil.png";

const Add = (props) => {

    const word = useRef();
    const desc = useRef();
    const exmp = useRef();

    const dispatch = useDispatch();

    const addDict = () => {
        //디스패치 스테이트 변경
        const dict = { word: word.current.value, desc: desc.current.value, exmp: exmp.current.value }
        if(dict.word) {
            dispatch(addDictFB(dict));
            props.history.push("/");
        } else {
            alert("Add Please😀")
        }

    }
    return (
        <Container>
            <TitleContainer>
                <Title>ADD WORD</Title>
                <TitleImg></TitleImg>
                <PencilImg></PencilImg>
            </TitleContainer>

            <Background>
                <Part><PartLine>WORD</PartLine></Part>
                <Input type="text" ref={word} part={"50px"}></Input>
            </Background>

            <Background>
                <Part><PartLine>DEFINITION</PartLine></Part>
                <Textarea type="text" ref={desc} part={"100px"}></Textarea>
            </Background>

            <Background>
                <Part><PartLine>EXAMPLE</PartLine></Part>
                <Textarea ref={exmp} part={"100px"}></Textarea>
            </Background>

            <Btn onClick={addDict}><BtnSpan>ADD</BtnSpan></Btn>

        </Container>
    )
}


const Container = styled.div`
width: 400px;
margin: 0 auto;
padding-top: 40px;
`

const TitleContainer = styled.div`
position: relative;
height: 100px;

margin: -10px 0 30px 0;
padding: 7px;
box-sizing: border-box;

border: 1px inset darkgray;
//border: 4px double white;

display: flex;
flex-direction: column;
justify-content: center;
`

const Title = styled.h2`
margin-left: -10px;

text-align: center;
color: whitesmoke;
font-size: 37px;

-webkit-text-stroke-width: 1.2px;
-webkit-text-stroke-color: #a6a6a6;

`
const TitleImg = styled.div`
position: absolute;
z-index: 2;
right: -3%;
bottom : 0%;

width: 90px;
height: 90px;

background-repeat: no-repeat;
background-image: url(${title_img});
background-size: contain;
`
const PencilImg = styled.div`
position: absolute;
left: 3%;
bottom : 5%;

width: 80px;
height: 70px;

background-repeat: no-repeat;
background-image: url(${pencil_img});
background-size: contain;

`

const Background = styled.div`
display: flex;
flex-direction: column;
align-items: space-between;

margin-bottom: 35px;
box-sizing: border-box;

background-color: #ffffff;

border: 4px double gray;
`

const Part = styled.p`
margin-left: 15px;
margin-bottom: 5px;
`

const PartLine = styled.span`
border-bottom: 1px dotted gray;

`
const Input = styled.input`
box-sizing: border-box;
height: ${(props)=>props.part};
margin: 5px;
text-align: center;

font-weight: bold;
font-size: 1.2em;

`

const Textarea = styled.textarea`
box-sizing: border-box;
height: ${(props)=>props.part};
margin: 5px;
text-align: center;
word-break: keep-all;

font-weight: bold;
font-size: 19px;

`
const Btn = styled.button`
width: 100%;

box-sizing: border-box;
border: 2px inset darkgray;
//border: 4px double white;

display: flex;
justify-content: center;
align-items: center;

margin: -10px auto 20px;
padding: 10px;

background-color: transparent;

cursor: pointer;

`
const BtnSpan = styled.span`
color: whitesmoke;
font-size: 35px;
font-weight: bold;

-webkit-text-stroke-width: 1.4px;
-webkit-text-stroke-color: #a6a6a6;

`
export default Add;
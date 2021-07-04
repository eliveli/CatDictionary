import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { editDictFB } from './redux/modules/dict'
import title_img from "./image/color_cat.png";
import pencil_img from "./image/pencil.png";

const Edit = (props) => {

    const dict_list = useSelector(state => state.dict.list);
    console.log(dict_list,"dictList");

    const edit_dict = dict_list.filter((item) => item.id === props.match.params.id );
    console.log(edit_dict[0]); //샹 너 왜 리스트 안에 들어가있니 하하 몇 시간 삽질ㅋㅋㅋ

    const [dict, setDict] = useState({
        load_word: edit_dict[0].word, load_desc: edit_dict[0].desc, load_exmp: edit_dict[0].exmp
    });
    const { load_word, load_desc, load_exmp } = dict;
    console.log(dict, "load_dict");

    // const load_word= edit_dict[0].word;
    // const load_desc= edit_dict[0].desc;
    // const load_exmp= edit_dict[0].exmp;

    const word = useRef();
    const desc = useRef();
    const exmp = useRef();
    
    const dispatch = useDispatch();

    const editDict = () => {
        const dict = { id: edit_dict[0]["id"], word: word.current.value, desc: desc.current.value, exmp: exmp.current.value };
        console.log(dict,"editDict");

        if(dict.word) {
            dispatch(editDictFB(dict));
            props.history.goBack();
        } else {
            alert("Edit Please😀")
        }
    
    }

        //인풋은 꼭 타입 설정하자.. type="text" ... 그리고 react에서 input value 초기화는 defaultValue...
        //콘솔->타입 언디파인드

        //스테이트 가져와 추출해도 [ ] 리스트 안에 들어가있으면 [0] 으로 접근해야 함...ㅋㅋ 
        //콘솔 꼭 찍어보고 뭐가 문제인지 확인해야 함...
    return (
        <Container>
            <TitleContainer>
                <Title>EDIT WORD</Title>
                <TitleImg></TitleImg>
                <PencilImg></PencilImg>
            </TitleContainer>

            <Background>
                <Part><PartLine>WORD</PartLine></Part>
                <Input type="text" ref={word} part={"50px"} defaultValue={load_word}></Input>
            </Background>

            <Background>
                <Part><PartLine>DEFINITION</PartLine></Part>
                <Textarea ref={desc} part={"100px"} defaultValue={load_desc}></Textarea>
            </Background>

            <Background>
                <Part><PartLine>EXAMPLE</PartLine></Part>
                <Textarea ref={exmp} part={"100px"} defaultValue={load_exmp}></Textarea>
            </Background>

            <Btn onClick={editDict}><BtnSpan>EDIT</BtnSpan></Btn>

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

`
const BtnSpan = styled.span`
color: whitesmoke;
font-size: 35px;
font-weight: bold;

-webkit-text-stroke-width: 1.4px;
-webkit-text-stroke-color: #a6a6a6;

`
export default Edit;
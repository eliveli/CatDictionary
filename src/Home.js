import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import img from "./image/cat.png";
import title_img from "./image/cat2.png";
import pencil_img from "./image/yellow_pencil2.png";

const Home = (props) => {
    const dict_list = useSelector(state => state.dict.list)
    console.log(dict_list);
    return (
        <Container>
            <TitleContainer>
                <Title>MY<div />DICTIONARY</Title>
                <TitleImg></TitleImg>
            </TitleContainer>
            { dict_list.map((dict,idx) => {
                return (
                    <Background>
                        <Part>WORD</Part>
                        <ContentBox word={true}>
                        <Content word={true}>{dict.word}</Content>
                        </ContentBox>

                        <Part>DEFINITION</Part>
                        <ContentBox>
                        <Content>{dict.desc}</Content>
                        </ContentBox>

                        <Part>EXAMPLE</Part>
                        <ContentBox>
                        <Content isEx={true}>{dict.exmp}</Content>
                        </ContentBox>

                        <Img></Img>

                        {idx === 1?
                        <Add onClick={()=>{props.history.push("/add")}}>
                        </Add>
                        : null }
                        

                        <EditBtn onClick={()=>{props.history.push("/edit/"+dict.id)}}>EDIT</EditBtn>
                    </Background>
                )
            }) }
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

height: 232px;
margin: -10px 0 30px 0;
padding: 7px;
box-sizing: border-box;

// border-top: 5px groove white;
border: 4px double white;

display: flex;
flex-direction: column;
justify-content: center;
`

const Title = styled.h1`
text-align: center;
color: #012840;
font-size: 47px;
line-height: 1.5em;

-webkit-text-stroke-width: 1.2px;
-webkit-text-stroke-color: #a6a6a6;

`
const TitleImg = styled.div`
position: absolute;
left: 3%;
bottom : 3%;

width: 150px;
height: 150px;

background-repeat: no-repeat;
background-image: url(${title_img});
background-size: contain;
`

const Background = styled.div`
position: relative;

display: flex;
flex-direction: column;
align-items: flex-start;

margin-bottom: 35px;
padding: 4px 0 6px 0 ;
box-sizing: border-box;
background-color: #ffffff;
border: 4px double gray;
`

const Img = styled.div`
position: absolute;
right: 0px;
top: 20px;
width: 110px;
height: 90px;

background-repeat: no-repeat;
background-image: url(${img});
background-size: contain;

`
const Part = styled.p`
margin-left: 20px;
margin-bottom: 5px;
border-bottom: 1px dotted gray;
`
const ContentBox = styled.div`
box-sizing: border-box;
width: 100%;
padding: ${(props)=>(props.word? "0" : "7px 0")};
`

const Content = styled.div`
text-align: center;

padding-left: 10px;
padding-right: 10px;
padding-bottom: ${(props) => ( props.isEx ? "5px" : "0" )};

font-weight: bold;
font-size: ${(props)=>(props.word? "1.5em" : "1.2em")};

color: ${(props) => ( props.isEx ? "#3565E8" : "black" )};
`
const Add = styled.div`
position: fixed;
z-index: 2;

bottom: 40px;
right: 40px;

background-image: url(${pencil_img});
background-repeat: no-repeat;
background-size: contain;

width: 80px;
height: 80px;

cursor: pointer;
`

const EditBtn = styled.div`
position: absolute;
z-index: 1;
top: 58px;
right: 8%;

font-size: 20px;
font-weight: bold;
color: #429ef5;
border-bottom: 2px solid #429ef5;
cursor: pointer;
`
export default Home;
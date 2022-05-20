import { Link } from "react-router-dom";
import styled from "styled-components"
import {mobile} from "../../responsive";

const Container = styled.div`
flex: 1;
margin: 2px;
height: 70vh;
position: relative;
`;

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({height: "30vh"})}

`;
const Info = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Button = styled.button`
border: none;
padding: 8px;
background-color: white;
color: gray;
font-weight: 600;
cursor: pointer;

`;
const Title = styled.h2`
font-size: 1.6rem;
color: white;
margin-bottom: 20px;
`;
const CategoryItem = ({item}) => {
  return (
    <>
    <Container>
        <Image src={item.image}/>
        <Info>
            <Title>{item.title}</Title>
            <Link to={`/${item.title}`}><Button>SHOP NOW</Button></Link>
        </Info>

    </Container>
    </>
  )
}

export default CategoryItem
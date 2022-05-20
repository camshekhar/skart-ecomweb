import styled from "styled-components";
import * as Icon from "react-bootstrap-icons";
import {mobile} from "../../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    margin: 20px;
    align-items: center;
    justify-content: center;
  ${mobile({flexDirection: "column", margin: "0px", width: "100%"})}

`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  ${mobile({width: "100%"})}

`;

const Logo = styled.h2`
    font-size: 30px;
    font-weight: 900;
  ${mobile({textAlign: "center"})}

`;

const Desc = styled.p`
margin: 10px 0px;
${mobile({textAlign: "center"})}

`;

const SocialContainer = styled.div`
    display: flex;
  ${mobile({justifyContent: "center"})}

`;

const SocialIcon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #${props=>props.color};
    color: white;
    justify-content: center;
    display: flex;
    align-items: center;
    margin-right: 20px;
`;
const Center = styled.div`

    flex: 1;
    padding: 20px;
  ${mobile({display: "none"})}

`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
  ${mobile({backgroundColor: "#f8efef", width: "100%"})}

    
`;

const Title = styled.h3`
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 10px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 50%;
    font-size: 14px;
    font-weight: 500;
    margin-top: 10px;
    color: black;
`;

const ContactItem = styled.div`
    margin: 10px 0;
    font-weight: 500;
    display: flex;
    align-items: center;
    color: black;
`; 

const Payment = styled.img`
    max-width: 200px;
    max-height: 60px;
    top: 0;
    left: 0;
`;
const Footer = () => {
  return (
    <>
      <Container>
          <Left>
              <Logo>sKart</Logo>
              <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus reprehenderit pariatur, doloremque voluptates nisi?</Desc>
              <SocialContainer>
                  <SocialIcon color="3B5999">
                      <Icon.Facebook/>
                  </SocialIcon >
                  <SocialIcon color="0077b5">
                      <Icon.Linkedin/>
                  </SocialIcon>
                  <SocialIcon color="E4405F">
                      <Icon.Instagram/>
                  </SocialIcon>
                  <SocialIcon color="55ACEE">
                      <Icon.Twitter/>
                  </SocialIcon>
              </SocialContainer>
          </Left>
          <Center>
              <Title>Useful Links</Title>
              <List>
                  <ListItem><Link to="/" style={{textDecoration: "none", color: "black"}}>Home</Link></ListItem>
                  <ListItem><Link to="/cart" style={{textDecoration: "none", color: "black"}}>Cart</Link></ListItem>
                  <ListItem><Link to="#" style={{textDecoration: "none", color: "black"}}>Men's Fashion</Link></ListItem>
                  <ListItem><Link to="#" style={{textDecoration: "none", color: "black"}}>Women's Fashion</Link></ListItem>
                  <ListItem><Link to="#" style={{textDecoration: "none", color: "black"}}>Accessories</Link></ListItem>
                  <ListItem><Link to="/login" style={{textDecoration: "none", color: "black"}}>My Account</Link></ListItem>
                  <ListItem>Order Tracking</ListItem>
                  <ListItem>Wishlist</ListItem>
                  <ListItem>FAQs</ListItem>
                  <ListItem>Terms</ListItem>


              </List>
          </Center>
          <Right>
              <Title>Contact</Title>
              <ContactItem>
                 <Icon.GeoAltFill style={{marginRight:"10px"}}/> Patna, Bihar - 800020
              </ContactItem>
              <ContactItem>
               <Icon.TelephoneForwardFill style={{marginRight:"10px"}}/> +91-9999999999
              </ContactItem>
              <ContactItem>
              <Icon.EnvelopeOpenFill style={{marginRight:"10px"}}/> contact@skart.com
              </ContactItem>
              <Payment src="https://jamiepharma.com/wp-content/uploads/2021/11/48-480088_payment-method-credit-card-master-card-hd-png.png"/>
          </Right>
      </Container>
    </>
  );
};

export default Footer;

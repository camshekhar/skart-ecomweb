import { Link } from "react-router-dom";
import styled from "styled-components";
import {mobile} from "../responsive";
const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  margin: 0 10px;
  padding: 20px;
  width: 320px;
  height: 400px;
  background-color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* ${mobile({width: "80%"})} */

`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  color: black;
`;

const Hr = styled.hr`
  margin: 0 0 10px 0;
  width: 100%;
  border: 1px solid gray;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 100%;
  margin: 20px 10px 0 0;
  padding: 8px;
  font-size: 0.8rem;
`;
const Button = styled.button`
  justify-content: center;
  align-items: center;
  width: 50%;
  border: 1px solid teal;
  padding: 5px;
  background-color: white;
  color: black;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background-color: teal;
    color: white;
    font-weight: 600;
  }
`;
const ForgotPassword = styled.span`
  display: flex;
  margin: 5px 0 0 0;  
`;
const Register = styled.span`
  margin-top: 5px;
`;

const Login = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>LOGIN</Title>
          <Hr />
          <Form>
            <Input type={"email"} placeholder="Email" />
            <Input type={"password"} placeholder="Password" />
            <ForgotPassword><Link to="/forgotPassword">Forgot Password?</Link></ForgotPassword>.
            <Button>LOGIN</Button>
            <Register>
              New User? <Link to="/register" style={{textDecoration: "none"}}>Register Here</Link>.
            </Register>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;

import { Link } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1920&q=60")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;
const Wrapper = styled.div`
  margin: 10px 10px;
  padding: 20px;
  width: 400px;
  height: 450px;
  background-color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
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
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 8px;
  font-size: 0.8rem;
`;
const Agreement = styled.p`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  justify-content: center;
  align-items: center;
  width: 100%;
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
const Login = styled.span`
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
`;

const Register = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Hr />
          <Form>
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Username" />
            <Input type={"email"} placeholder="Email" />
            <Input type={"password"} placeholder="Password" />
            <Input type={"password"} placeholder="Confirm Password" />
            <Agreement>
              By creating an account, I consent to the processing of my personal
              detail in accordance with the <b>PRIVACY POLICY</b>.
            </Agreement>
            <Button>CREATE ACCOUNT</Button>
            <Login>
              Already Registered? <Link to="/login" style={{textDecoration: "none"}}>Login Here</Link>.
            </Login>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;

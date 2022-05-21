import React from "react";
import styled from "styled-components";
import * as Icon from "react-bootstrap-icons";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Container = styled.div`
  height: 50px;
  width: 100%;
  background-color: #e4f1fb;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  width: 100%;
  bottom: 2px;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 1px solid gray;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 25px 8px 25px;
  padding: 5px;
  background-color: white;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  margin-right: 4px;
  background-color: white;
  ${mobile({ width: "50px", fontSize: "12px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  justify-content: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center", alignItems: "center", flex: 2 })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  align-items: center;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Navbar = () => {
  // window.location.reload(false);
  const [cartitems, setCartitems] = useState([]);

  useEffect(() => {
    async function getAllCategory() {
      try {
        const cartitems = await axios.get(" https://skart-ecomweb-backend.herokuapp.com/api/cart/");
        setCartitems(cartitems.data);
        // console.log(cartitems.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllCategory();
    // console.log(cartitems)
  }, []);
  // eslint-disable-next-line
  // console.log(cartitems.length)
  var cartCount = 0;
  for (let count = 0; count < cartitems.length; count++) {
    cartCount += 1;
  }
  //  console.log(cartCount)
  // eslint-disable-next-line
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="Search.." />
              <Icon.Search style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                sKart
              </Link>
            </Logo>
          </Center>
          <Right>
            <MenuItem>
              {" "}
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "black" }}
              >
                Register
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "black" }}
              >
                Login
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="/cart"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Icon.Cart3 />
                <span className="position-absolute translate-middle badge rounded-pill bg-primary">
                  {cartCount}
                </span>
              </Link>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;

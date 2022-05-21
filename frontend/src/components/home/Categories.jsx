import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import {mobile} from "../../responsive";
import { useEffect, useState } from "react";

const Container = styled.div`
display: flex;
padding: 0 20px;
justify-content: space-between;
${mobile({padding: "0px", flexDirection: "column"})}


`;

const Categories = () => {
  const [categories, setCategories] = useState([])
  useEffect(()=>{
    fetch(" https://skart-ecomweb-backend.herokuapp.com/api/categories").then((result)=>{
      result.json().then((response)=>{
        setCategories(response)
      })
    })

  },[])
  return (
    <>
    
    <Container>
      
        {categories.map((item, i) => (
            <CategoryItem item={item} key={i}/>
           
        ))}

    </Container>;
    </>
  )
};

export default Categories
import styled from "styled-components"
import * as Icon from "react-bootstrap-icons";

const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;

`;
const AnnouncementMessage = styled.div`
  
`;
const Announcement = () => {
  return (
    <Container>
      <Icon.MegaphoneFill/>
      <Icon.Soundwave style={{marginRight: "5px"}}/>
      <AnnouncementMessage>Super Deal! Free Shipping on Orders Above Rs.500.</AnnouncementMessage>
    </Container>
  )
}

export default Announcement
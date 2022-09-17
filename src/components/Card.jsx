import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Container= styled.div`
width:${(props) => props.type !== "sm" && "230px"};
margin-bottom:${(props) => props.type === "sm" ? "10px":"45px"};
margin:20px;
display: ${(props) => props.type === "sm" && "flex"};


`;

const Image = styled.img`
height: ${(props) => props.type === "sm" ? "120px":"155px"};
width:${(props) => props.type === "sm" ? "180px":"245px"};
`;

const Details = styled.div`
display: flex;
margin-top:${(props) => props.type !== "sm" && "10px"};


`;

const ChannelImage = styled.img`
border-radius: 50%;
background-color: #999;
width:35px;
height:35px;
display:${(props) => props.type === "sm" && "none"};

`;

const Texts = styled.div`
padding-left:10px;
over-flow-hidden;
text-overflow: ellipsis; 
flex-wrap:wrap;
width:230px;

`;

const Title = styled.h1`
font-size:${(props) => props.type === "sm" ? "14px":"0.9rem;"};
margin-right:0;
over-flow-hidden;
text-overflow: ellipsis; 
white-space:wrap;
font-weight: 500;
letter-spacing:0.1px;
color:white;
`;

const ChannelName = styled.p`
font-size: ${(props) => props.type === "sm" ? "12px":"14px"};
color: #aaaaaa !important;`;

const Info = styled.p`
font-size: ${(props) => props.type === "sm" ? "12px":"14px"};
color: #aaaaaa !important;
`;

const Card = ({type}) => {
  return (
     <Container type={type}>
        <Link to='/video/test' style={{textDecoration:'none'}}>
        <Image type={type} src='https://besthqwallpapers.com/Uploads/4-11-2021/180260/thumb2-netflix-red-logo-4k-red-brickwall-netflix-logo-brands.jpg'     alt='Video'/>
        <Details type={type}>
        <ChannelImage type={type}/>
        <Texts>
          <Title>New Video</Title>
          <ChannelName>Joe Winter</ChannelName>
          <Info>660,908 vistas • hace 2 dias</Info>
        </Texts>
      </Details>
      </Link>
    </Container>
  )
}

export default Card

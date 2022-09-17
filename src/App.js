import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Menu,NavBar} from './components';
import {Home,Video} from './pages';
import styled from 'styled-components';

const Container = styled.div`
display:flex;

`;

const Main = styled.div`
flex:7;
background-color: #181818;
color:white;
`

const Wrapper = styled.div`
padding: 0px 7px;
`;

function App() {
  return (
    <Container>
      <BrowserRouter>
      <Menu/>
      <Main>
        <NavBar/>        
        <Wrapper>
          <Routes>
          <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path="video">
              <Route path=':id' element={<Video/>}>
              </Route>
            </Route>
          </Route>
          </Routes>
          </Wrapper>
      </Main>
      </BrowserRouter>
    </Container>
  );
}

export default App;

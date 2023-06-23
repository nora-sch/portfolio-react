import styled from "styled-components";
import "./App.css";
import AboutMe from "./components/AboutMe";
import NavBar from "./components/NavBar";
import bgSpace from "./assets/img/background-1.jpg";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <TopWrapper>
        <NavBar />
        <AboutMe />
      </TopWrapper>
      <Skills />
    </div>
  );
}

export default App;
const TopWrapper = styled.div`
  background-image: linear-gradient(
      to bottom,
      #2f334e,
      transparent,
      #43455c4e,
      #2f334e
    ),
    url(${bgSpace});
  background-size: cover;
`;

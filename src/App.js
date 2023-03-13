import Header from "./Pages/Header";
import Ability from "./Pages/Ability";
import Marker from "./Pages/Marker";
import Portfolio from "./Pages/Portfolio";
import PartOfPortfolio from "./Pages/PartOfPortfolio";
import PartOfPortfolio2 from "./Pages/PartOfPortfolio2";
import Pricceing from "./Pages/Pricceing";
import GetInTouch from "./Pages/GetInTouch";
import NavBar from "./Components/NavBar";
import OverView from "./Components/OverView";
import PartOfPortfolio3 from "./Pages/PartOfPortFolio3";
import Skill from "./Pages/Skill";
import SkillBar from "./Pages/SkillBar";
import { Element } from "react-scroll";

function App() {
  return (
    <div>
      <Element name="section1" className="element">
        <NavBar />
        <OverView />
        {/* <Ability /> */}
        <Skill />
        {/* <Marker /> */}
        <SkillBar />
        <Portfolio />
        <PartOfPortfolio />
        <PartOfPortfolio2 />
        <PartOfPortfolio3 />
        <Pricceing />
        <GetInTouch />
      </Element>
    </div>
  );
}

export default App;

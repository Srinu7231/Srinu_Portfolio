import './index.css';
import Navbar from './Components/navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Features from "./Components/features/Features";
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contacts/Contact'; 

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <Navbar/>
      <Banner/>
      <Features/>
      <Projects/>
      <Resume/>
      <Contact/>
    </div>
  );
}

export default App;

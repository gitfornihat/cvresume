import './App.css';
import Head from './Components/Head';
import PersonalInfo from './Components/PersonalInfo';
import Contacts from './Components/Contacts';
import Education from './Components/Education';
import Skills from './Components/Skills';
function App() {
  return (
    <div className='cv'>
      <Head/>
      <PersonalInfo/>
      <Contacts/>
      <Education/>
      <Skills/>
    </div>
  );
}

export default App;
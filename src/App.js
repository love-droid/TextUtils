
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {
  return (
    <>
    <Navbar title="Text-utils"/>
    <div className="container my-4">
            <Textform heading="Enter Text To Analyze"/>
    </div>
   
    </>
  );
}

export default App;

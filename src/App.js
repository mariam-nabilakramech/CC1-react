import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import NavigationBar from './composant/Navbar';
import Api from './composant/Api';
import Slider from './composant/Imgslide';
import Calculatrice from './composant/TP1';
import Todo from './composant/FormeTasks';
import Langcontext from './context/Langcontext';
import Ccontent from './composant/Ccontent';
import Cicones from './composant/Cicones';
import Content from './composant/Content/Content'
import ThemeContextProvider from './context/ThemeContext';


function App() {
   return (
 <div className="App">
  <NavigationBar />
  
<Routes>
<Route path="/Api" element={< Api/>}    />
<Route path="/Imgslide"  element={< Slider/>} />
<Route path="/TP1"  element={< Calculatrice/>} />
<Route path="/FormeTasks" element={< Todo/>}   />
<Route path="*" element={<h1>404 : this page not found</h1>} />
<Route path="/context/Langcontext" element={
  <Langcontext>
    <Cicones/>
    <Ccontent/>
  </Langcontext>
}   />
 </Routes>
 
 <ThemeContextProvider>
        <Content />
  </ThemeContextProvider>
 </div> );
}
export default App;

import { useState } from 'react'
import Header from './Header';
import Center from './Center';
import Bottom from './Bottom';
import Footer from './Footer';
import LandingPage from './LandingPage';

import './App.css';


function App() {
const [login, setlogin] = useState(true)
  return (
    <div id="App">
       {
        login ?
        <> 
        <Header/>
        <Center/>
        <Bottom/>
        <Footer/>
        </> :
        <>
        <LandingPage/>
        </>
       }
    </div>
  )
}




export default App

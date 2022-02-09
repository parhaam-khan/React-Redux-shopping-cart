import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import './App.css'
import Home from "./pages/Home/Home";

const App = () => {
    return (
        <div className="app">
        <Header/>
        <Home/>
        <Footer/>
    </div>
        
 );
}
 
export default App;
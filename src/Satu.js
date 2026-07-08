import { Link } from "react-router-dom"; 
 
class Satu extends React.Component { 
    render() { 
        return ( 
            <ul className="navbar-nav mr-auto"> 
                <li className="nav-item active"> 
                    <Link to="/" className="nav-link">Home</Link> 
                </li> 
 
5 
 
                <li className="nav-item"> 
                    <Link to="/about" className="nav-link">About</Link> 
                </li> 
            </ul> 
        ) 
    } 
} 
export default Satu; 
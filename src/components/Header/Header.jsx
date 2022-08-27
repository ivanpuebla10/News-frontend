import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <span><Link to="/">News</Link></span>
            <span><Link to="/archive" >Archive</Link> </span>
      </nav>
    )
  }
  
  export default Header
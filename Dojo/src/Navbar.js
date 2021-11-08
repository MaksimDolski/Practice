import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <Link to="/" className="standard-text">Home</Link>
        <Link to="/create" className="create pink-btn">New Blog</Link>
      </div>
    </nav>
  )
}
 
export default Navbar;



//  <a href="/create" className="create" style={{ 
//           color: 'white', 
//           backgroundColor: '#f1356d',
//           borderRadius: '8px',
//           paddingLeft: '10px',
//           paddingRight: '10px',
//         }}>New Blog</a>
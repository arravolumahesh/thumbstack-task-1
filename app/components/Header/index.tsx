import './index.css'
import {BiSearch} from 'react-icons/bi'
import {FiBell} from 'react-icons/fi'
import {FaAngleDown} from 'react-icons/fa6'

const Header = () => (
  <div className="header-container">
    <BiSearch className="logo" />
    <FiBell className="logo" />
    <div className="content-container">
      <img
        alt="logo"
        className="image"
        src="https://res.cloudinary.com/devj4jofj/image/upload/v1694097726/Ellipse_11_ypl72w.jpg"
      />
      <div>
        <h1 className="name">Sam Jackson</h1>
        <p className="email">sam@gmail.com</p>
      </div>
      <FaAngleDown className="image1" />
    </div>
  </div>
)

export default Header
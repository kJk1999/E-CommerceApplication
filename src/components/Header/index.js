// Write your JS code here

import './index.css'

const Header = () => (
  <div className="header-container">
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="logo"
      />
    </>
    <ul className="navigation-buttons">
      <li className="list-element">Home</li>
      <li className="list-element">Products</li>
      <li className="list-element">Cart</li>
      <li className="list-element">
        <button className="logout-button" type="button">
          Logout
        </button>
      </li>
    </ul>
  </div>
)

export default Header

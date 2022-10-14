import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* getting title from parent component via props.title */}
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home/</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About"> Go To About</Link>
              </li>
              {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" to="#">Action</a></li>
            <li><a class="dropdown-item" to="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a className="dropdown-item" to="#">Something else here</a></li>
          </ul>
        </li> */}
              {/* <li className="nav-item">
          <a className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Header
Header.propTypes = {
  title: PropTypes.string,
  searchbar: PropTypes.bool.isRequired
}
Header.defaultProps = {
  title: "Your Titlr Here",
  searchbar: true
}

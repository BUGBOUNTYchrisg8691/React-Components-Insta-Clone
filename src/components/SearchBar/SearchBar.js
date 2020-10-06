// You do not need to change any code in this file for MVP
import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faCircle, faCompass } from '@fortawesome/free-regular-svg-icons';
import "./SearchBar.css";

const SearchBar = (props) => {
  const { handleSearch } = props
  // const [filterDisplay, setFilterDisplay] = useState(props.posts)
  // const searchRef = useRef()

  // const handleSearch = () => {
  //   const text = searchRef.current.value;
  //   if (text === '') return
  //   filterSearch(text)
  // }

  return (
    <div className="search-bar-wrapper">
      <div className="social">
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <form className="search-form">
        <input /*ref={ searchRef }*/ type="text" placeholder="Search" onChange={ e => handleSearch(e.target.value) } />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <FontAwesomeIcon icon={faCompass} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

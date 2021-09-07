import React from "react";
import BottomNav from "../components/bottomNavigation";
import SearchIcon from "../assets/icons/searchIcon.svg";
import Filter from "../assets/icons/filter.svg";

const Search = () => {
  return (
    <div className="search">
      <div className="main-section">
        <div className="filter">
          <div className="search-section">
            <input type="text" placeholder="Search" />
            <img src={SearchIcon} alt="" />
          </div>
          <div className="filter-img">
            <img src={Filter} alt="" height={30} />
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Search;

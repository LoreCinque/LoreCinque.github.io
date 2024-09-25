"use client";
import { toggleSearchModalClose } from "@/redux/features/searchModalSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React from "react";

const SearchModal = () => {
  const dispatch = useAppDispatch();
  const isSearchModalOpen = useAppSelector(
    (state) => state.searchModal.isSearchModalOpen
  );
  const closeSearchModal = () => {
    dispatch(toggleSearchModalClose());
  };
  return (
    <div className={`search-box-10-wrap ${isSearchModalOpen ? "active" : ""}`}>
      <div className="serchbox-overlay">
        <button className="close-search-10" onClick={closeSearchModal}>
          <i className="fa-thin fa-times"></i>
        </button>
      </div>
      <form>
        <input type="search" placeholder="Search Here..." required />
        <button>
          <i className="fa-light fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchModal;

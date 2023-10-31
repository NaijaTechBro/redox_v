import React from 'react';
import './pagination.css';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const pageNumbers = [];

  // Calculate total pages based on total items and items per page
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
    }

    return (
    <ul className="pagination">
        {pageNumbers.map((number) => (
        <li
            key={number}
            className={`page-item ${number === currentPage ? 'active' : ''}`}
            onClick={() => onPageChange(number)}
        >
            <button className="page-link">{number}</button>
        </li>
        ))}
    </ul>
    );
};

export default Pagination;

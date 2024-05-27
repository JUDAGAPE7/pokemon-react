
import './Styles/pagination.css'

function Pagination({ totalCards, cardsPerPage, currentPage, setCurrentPage }) {
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="pagination">
      <button
        onClick={handlePrevClick}
        disabled={currentPage === 1}
        className="button_1"
      >
        Previous
      </button>
      <span className="counter">
        {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
        className="button_2"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;

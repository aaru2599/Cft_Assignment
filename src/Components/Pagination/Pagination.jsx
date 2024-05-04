const Pagination = ({ paginate, currentPage, totalPost, postPerPage }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      <ul className="flex  justify-center gap-3">
        {pageNumber.map((number) => {
          return (
            <li key={number}>
              <a
              onClick={()=>paginate(number)}
              href="#">{number}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;

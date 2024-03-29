import { useState } from "react";
import ReactPaginate from "react-paginate";
// import Loading from "./Loading";
import RepoList from "../components/RepoList";
import Profile from "../components/Profile";
import Footer from "../components/Footer";

export default function Repo({ items, user }) {
  const [pageNumber, setPageNumber] = useState(0);
  const repoPerPage = 6;
  const pagesVisited = pageNumber * repoPerPage;
  const pageCount = Math.ceil(items.length / repoPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  // !items ? <Loading /> :
  return (
    <>
      <h1
        data-aos="fade-up"
        className="text-2xl text-white text-center font-bold mb-4"
      >
        {user}'s GitHub Repositories
      </h1>

      <Profile user={user} />
      <div className="grid gap-8 my-10 lg:grid-cols-2 xl:grid-cols-3 xl:px-6">
        {items.slice(pagesVisited, pagesVisited + repoPerPage).map((item) => (
          <RepoList key={item.id} {...item} />
        ))}
      </div>

      <ReactPaginate
        breakLabel="..."
        pageRangeDisplayed={1}
        renderOnZeroPageCount={null}
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtns"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />

      <Footer />
    </>
  );
}

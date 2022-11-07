import ReactPaginate from "react-paginate";
import Loading from "../components/Loading";
import Profile from "../components/Profile";
import RepoList from "../components/RepoList";

export default function Repo({items, user, pageCount, pagesVisited, repoPerPage, changePage}) {
  
  return (
    <>
      <h1 className="text-2xl text-white text-center font-bold mb-4">
        {user}'s GitHub Repositories
      </h1>
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
    </>
  )
}

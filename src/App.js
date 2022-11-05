// import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Loading from "./components/Loading";
import Profile from "./components/Profile";
import Repo from "./pages/Repo";
import FullRepoDetails from "./pages/FullRepoDetails";
// import { motion } from "framer-motion";

function App() {
  const [user] = useState("Jay035");
  const [items, setItems] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const repoPerPage = 5;
  const pagesVisited = pageNumber * repoPerPage;
  const pageCount = Math.ceil(items.length / repoPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(
        `https://api.github.com/users/${user}/repos?page=1&per_page=30&sort=updated`
      );
      const data = await res.json();
      console.log(data);
      setItems(data);
    };

    fetchRepos();
  }, []);

  AOS.init();
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Repo
              items={items}
              user={user}
              pageCount={pageCount}
              pagesVisited={pagesVisited}
              repoPerPage={repoPerPage}
              changePage={changePage}
            />
          }
        />
        <Route path="/repo/:id" element={<FullRepoDetails items={items} />} />
      </Routes>
    </Router>

    //   <Loading />
    // ) : (
    //   <main
    //     // data-aos="fade-in"
    //     // data-aos-duration="1000"
    //     className="App font-Barlow bg-[#1a1c1e] text-[#e7e8e8] h-screen overflow-x-hidden leading-normal pt-8 px-4"
    //   >
    //     <h1 className="text-2xl text-white text-center font-bold mb-4">
    //       {user}'s GitHub Repositories
    //     </h1>
    //     <div className="grid gap-8 my-10 lg:grid-cols-2 xl:grid-cols-3 xl:px-6">
    //       {items.slice(pagesVisited, pagesVisited + repoPerPage).map((item) => (
    //         <Profile key={item.id} {...item} />
    //       ))}
    //     </div>

    //     <ReactPaginate
    //       breakLabel="..."
    //       pageRangeDisplayed={1}
    //       renderOnZeroPageCount={null}
    //       previousLabel={"Previous"}
    //       nextLabel={"Next"}
    //       pageCount={pageCount}
    //       onPageChange={changePage}
    //       containerClassName={"paginationBtns"}
    //       previousLinkClassName={"previousBtn"}
    //       nextLinkClassName={"nextBtn"}
    //       disabledClassName={"paginationDisabled"}
    //       activeClassName={"paginationActive"}
    //     />
    //   </main>
  );
}

export default App;

// import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Loading from "./components/Loading";
import Repo from "./pages/Repo";
import FullRepoDetails from "./pages/FullRepoDetails";
// import { motion } from "framer-motion";

function App() {
  const [user] = useState("Jay035");
  const [items, setItems] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(true);

  const repoPerPage = 6;
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
      setItems(data);
      setLoading(false);
    };

    fetchRepos();
  }, []);

  AOS.init();
  return (
    <Router>
      <main
        data-aos="fade-in"
        // data-aos-duration="1000"
        className="font-Barlefair bg-[#1a1c1e] text-[#e7e8e8] h-screen overflow-x-hidden leading-normal pt-8 px-4"
      >
        <Routes>
          <Route
            exact
            path="/"
            element={
              loading ? (
                <Loading />
              ) : (
                <Repo
                  items={items}
                  loading={loading}
                  user={user}
                  pageCount={pageCount}
                  pagesVisited={pagesVisited}
                  repoPerPage={repoPerPage}
                  changePage={changePage}
                />
              )
            }
          />
          <Route
            path="/repo/:name"
            element={<FullRepoDetails items={items} loading={loading} />}
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

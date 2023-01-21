import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Loading from "./pages/Loading";
import Repo from "./pages/Repo";
import FullRepoDetails from "./pages/FullRepoDetails";
import Footer from "./components/Footer";
import Error404Page from "./pages/Error404Page";
// import { motion } from "framer-motion";

function App() {
  const [user, setUser] = useState("Jay035");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

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
        className="font-Barlefair bg-[#1a1c1e] text-[#e7e8e8] h-screen mb-[50px] overflow-x-hidden leading-normal pt-8 px-4"
      >
        <Routes>
          {/* Home page */}
          <Route
            exact
            path="/"
            element={loading ? <Loading /> : <Repo items={items} user={user} />}
          />

          {/* Full repo details */}
          <Route
            path="/repo/:name"
            element={<FullRepoDetails items={items} loading={loading} />}
          />

          {/* when a user goes to a non-existent route */}
          <Route path="*" element={<Error404Page />} />
        {/* <Footer /> */}
        </Routes>

      </main>
    </Router>
  );
}

export default App;

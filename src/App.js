// import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";
import RepoCard from "./components/RepoCard";
// import { motion } from "framer-motion";

function App() {
  const [user] = useState("Jay035");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(
        `https://api.github.com/users/${user}/repos?page=1&per_page=10&sort=updated`
      );
    };
  }, []);

  AOS.init();
  return (
    !loading && (
      <main
        // data-aos="fade-in"
        // data-aos-duration="1000"
        className="App font-Barlow bg-[#161819] h-full overflow-x-hidden leading-normal pt-8 px-4"
      >
        <h1 className="text-2xl text-center font-bold">{user}'s GitHub Repositories</h1>
        <RepoCard />
      </main>
    )
  );
}

export default App;

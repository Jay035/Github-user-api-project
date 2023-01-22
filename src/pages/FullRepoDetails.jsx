import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Loading from "./Loading";

export default function FullRepoDetails({ items}) {
  const { name } = useParams();

  return (
    <>
      <Link
        to="/"
        className="flex items-center p-3 rounded text-lg transition-colors outline-none text-white bg-[#2bc070] w-fit hover:bg-[#2bc070]/50"
      >
        <i className="ri-arrow-left-s-line"></i> Go back
      </Link>
      <div className="flex flex-col justify-center items-center h-[80vh]">
        {items
          ?.filter((item) => item.name === name)
          .map((repo, index) => (
            <section
              key={index}
              className="bg-[#282a2e] w-full max-w-[700px] mx-auto p-4 rounded-lg text-base flex flex-col gap-6"
            >
              <article className="flex justify-start gap-4">
                <img
                  className="w-24 h-24 rounded-full shadow"
                  src={repo.owner.avatar_url}
                  alt={repo.owner.login}
                />
                <div className="flex flex-col gap-2 ">
                  <h1 className="font-bold text-lg">{repo.owner.login}</h1>
                  <p className="text-sm capitalize">{repo.name}</p>
                  {repo.private ? (
                    <p className="bg-[#f46674] text-white text-sm px-2 py-1 w-fit rounded-lg">
                      Private
                    </p>
                  ) : (
                    <p className="bg-[#2bc070] text-white text-sm px-2 py-1 w-fit rounded-lg">
                      Public
                    </p>
                  )}
                </div>
              </article>
              <div className="">
                <p>
                  This repository was created on{" "}
                  {new Date(repo.created_at).toLocaleDateString()} by{" "}
                  {repo.owner.login}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1">
                  <a href={repo.html_url} className="underline cursor-pointer">
                    View Repo
                  </a>
                  <a href={repo.homepage} className="underline cursor-pointer">
                    View Site
                  </a>
                </div>
                <ul>
                  <li>{repo.stargazers_count} stars</li>
                  <li>{repo.watchers_count.toLocaleString()} watchers</li>
                </ul>
              </div>

              <div className="flex flex-wrap justify-between items-center gap-4">
                {/* languages */}
                {repo.language && (
                  <p className="bg-[#4e5051] p-2 inline-block rounded-lg shadow text-xs">
                    {repo.language}
                  </p>
                )}
                {repo.topics && (
                  <ul className="flex justify-between items-center gap-2">
                    {repo.topics.map((topic, index) => (
                      <li
                        key={index}
                        className="bg-[#4e5051] p-2 inline-block rounded-lg shadow text-xs"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                )}

                {repo.open_issues !== 0 && (
                  <p className="text-xs">{repo.open_issues} issues</p>
                )}
              </div>
            </section>
          ))}
      </div>
      <Footer />
    </>
  );
}

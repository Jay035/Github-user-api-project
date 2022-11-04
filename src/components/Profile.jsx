import { useState } from "react";

export default function Profile(props) {

  return (
      <section className="bg-[#282a2e] w-full max-w-[600px] mx-auto p-4 rounded-lg text-base flex flex-col gap-6">
        <article className="flex justify-start gap-4">
          <img
            className="w-24 h-24 rounded-full shadow"
            src={props.owner.avatar_url}
            alt={props.owner.login}
          />
          <div className="flex flex-col gap-2 ">
            <h1 className="font-bold text-lg">{props.owner.login}</h1>
            <p className="text-sm capitalize">{props.name}</p>
            {props.private ? (
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
            {new Date(props.created_at).toLocaleDateString()} by {props.owner.login}{" "}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <a href={props.html_url} className="underline">
            View Repo
          </a>
          <ul>
            <li>{props.stargazers_count} stars</li>
            <li>{props.watchers_count.toLocaleString()} watchers</li>
          </ul>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-4">
          {/* languages */}
          {props.language && (
            <p className="bg-[#4e5051] p-2 inline-block rounded-lg shadow text-xs">
              {props.language}
            </p>
          )}
          {props.topics && (
            <ul className="flex justify-between items-center gap-2">
              {props.topics.map((topic, index) => (
                <li
                  key={index}
                  className="bg-[#4e5051] p-2 inline-block rounded-lg shadow text-xs"
                >
                  {topic}
                </li>
              ))}
            </ul>
          )}

          {props.open_issues !== 0 && (
            <p className="text-xs">{props.open_issues} issues</p>
          )}
        </div>
      </section>
  );
}

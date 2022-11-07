import { Link } from "react-router-dom";

export default function RepoList(props) {
  return (
    <section className="bg-[#282a2e] w-full max-w-[600px] mx-auto p-4 rounded-lg text-base flex flex-col gap-4">
      <div className="flex gap-6 items-center">
        <h1 className="text-xl font-semibold capitalize">{props.name}</h1>
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
      <Link to={`/repo/${props.name}`} className="bg-[#4e5051] p-2 w-fit rounded-lg shadow text-sm hover:bg-[#4e5051]/50">View more</Link>
    </section>
  );
}

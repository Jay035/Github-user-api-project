import { Link } from "react-router-dom";

export default function Error404Page() {
  return (
    <div className="mx-auto max-w-[600px] w-full leading-7 flex flex-col gap-6 justify-center min-h-screen">
      <h1 className="text-4xl font-bold">404</h1>
      <h2 className="text-2xl font-bold">Oops!!!....PAGE NOT FOUND</h2>
      <Link
        to="/"
        className="underline uppercase px-7 py-2 bg-[#4e5051] w-fit rounded-lg"
      >
        Go back
      </Link>
    </div>
  );
}

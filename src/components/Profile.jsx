import { useState } from "react";
import { useEffect } from "react";

export default function Profile({ user }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(`https://api.github.com/users/${user}`);
      const data = await res.json();
      console.log(data);
      console.log(data.avatar_url);
      setData(data);
    };

    fetchRepos();
  }, []);
  
  return (
    <div className="mt-12">
      <div className="flex flex-wrap gap-8">
        <img
          className="w-28 shadow-md rounded-full"
          src={data?.avatar_url}
          alt="profile img"
        />
        <h1 className="flex flex-col">
          <span className="text-2xl font-semibold">{data.name}</span>
          <span>{data.login}</span>
        </h1>
      </div>
      Profile
    </div>
  );
}

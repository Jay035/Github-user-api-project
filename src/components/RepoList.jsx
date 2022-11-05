
export default function RepoList(props) {
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
    </section>
  )
}

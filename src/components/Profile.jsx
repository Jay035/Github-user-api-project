export default function Profile() {
  return (
    <section className="">
        <article className="flex justify-start gap-4">
            <img className='w-24 rounded-full' src="" alt="user profile pic" />
            <div className="">
                <h1 className="font-bold text-lg">Username</h1>
                <p className="text-sm">Repo name</p>
                <p className="bg-[#1d4a48] text-[#8d8d8f]">Public</p>
            </div>
        </article>
        <div className="">
            <p>This repository was created on 'created_at' by owner.login </p>
        </div>

        <div className="">
            <a href="" target="_blank" rel="norefferer">View Repo</a>
            <ul>
                <li>'props.stargazers_count' stars</li>
                <li>'props.watchers_count' watchers</li>
            </ul>
        </div>

        <div className="">
            {/* languages */}
            <ul>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
            </ul>

            <p>Open issues</p>
        </div>
    </section>
  )
}

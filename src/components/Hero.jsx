import { heroItems, heroBtns } from "../constant/data";
import profilepic from "/images/CSW11.png";
const Hero = () => {
    return (
        <section className="mt-28" id="#">
            <div className="container">
                <div className="grid gap-14 md:grid-cols-2 md:items-center">
                    <div>
                        <p className="text-lg md:text-xl font-medium
                        text-emerald-600">Hi, I'm Farhad Nuri</p>
                        <h1 className="text-3xl my-[10px_16px]">Full Stack Developer & Problem Solver</h1>
                        <p>Passionate in building large scale web applications using my 
                            knowledge in system design and design patterns. I enjoy working on projects that challenge me to learn new technologies.
                        </p>
                    </div>
                    <div className="w-2xs h-72 rounded-full overflow-hidden mx-auto lg:mx-0" >
                        <img src={profilepic} alt="Profile" 
                        width={280}
                        height={280}
                        className="w-full h-full object-cover"/>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 items-center gap-5
                md:divide-x divide-zinc-200 mt-5
                dark:divide-zinc-900">
                    {heroItems.map((item) => (
                        <div key={item.id}>
                            <div key={item.id} className="flex gap-2 items-start"> 
                                <span className="size-10 flex bg-zinc-100 items-center justify-center
                                rounded-xl border
                                border-zinc-100
                                text-zinc-800
                                dark:bg-zinc-900
                                dark:text-zinc-300
                                dark:border-zinc-900"> 
                                    <item.icon size={26} />
                                </span>
                                <div className="space-y-1">
                                    <h2 className="text-lg">{item.subtitle}</h2>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-4 mt-8 sm:flex-row">
                    {heroBtns.map((btn) => (
                        <button key={btn.id} 
                        className="btn border-zinc-200
                        dark:border-zinc-900
                        relative overflow-hidden
                        before:absolute before:top-0 before:left-0
                        before:right-0 before:bottom-0
                        before:bg-emerald-700 before:-z-10
                        before:scale-y-0 hover:before:scale-y-100
                        before:transition-transform before:origin-top
                        hover:text-zinc-100">
                            <span>
                                <btn.icon />
                            </span>
                            {btn.label}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
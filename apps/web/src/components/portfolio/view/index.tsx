import Image from "next/image";
import PurwadhikaLogo from "../../../assets/purwadhika_logo.jpg";
import VercelLogo from "../../../assets/vercel.png";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./style.css";

export default function PortfolioView() {
    return (
        <div className="flex flex-col mx-auto gap-4 *:mx-auto">
            <p className="text-4xl sm:text-5xl font-serif mb-4 sm:mb-8 text-center">
                My name is <span className="hidden sm:inline">Genesius </span><b>Julian</b><span className="hidden sm:inline"> Muljadi</span>
            </p>
            <div className="flex flex-col gap-4">
                <p className="text-xl font-sans text-center">
                    I'm an upstarting front/back-end web developer from Purwadhika Digital Technology School.
                </p>
                <Link href="https://purwadhika.com/" target="_blank"
                    className="flex flex-row mx-auto rounded-l-sm rounded-r-2xl"
                >
                    <Image
                        className="bg-[#00697b] rounded-l-sm shadow-sm shadow-[#00858b]"
                        src={PurwadhikaLogo}
                        alt="purwadhika logo"
                        aria-hidden
                        width={50}
                    />
                    <div className="m-auto h-full flex flex-row gap-2 font-mono bg-[#cacaca] dark:bg-[#f7f7f7] text-red-800 px-2 rounded-r-2xl shadow-sm shadow-gray-600 dark:shadow-[#f7f7f7]">
                        <div className="m-auto">
                            <span className="hidden sm:inline mx-1">Purwadhika Digital Technology School</span>
                            <span className="inline sm:hidden">Purwadhika</span>
                        </div>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{color: "#991b1b",}}
                            className="m-auto size-5"
                        />
                    </div>
                </Link>
            </div>
            <div className="mt-4 w-full border-b border-zinc-500 dark:border-zinc-200" id="h-line1" />
            <div className="flex flex-row gap-4 mx-auto dark:invert *:border *:border-black *:bg-[#cccccc] *:shadow-sm *:shadow-slate-400 text-black
                *:px-3 *:py-2 *:rounded-md"
                id="links"
            >
                <Link href="https://www.linkedin.com/in/genesius-muljadi-4077141ab" target="_blank"
                    className="hover:bg-[#a9a9a9] active:bg-[#909090] flex flex-row gap-2 cursor-pointer *:m-auto"
                >
                    <FontAwesomeIcon icon={faLinkedinIn} aria-hidden
                        className="size-5 text-black"    
                    />
                    <div>
                        LinkedIn
                    </div>
                </Link>
                <Link href="https://github.com/Genesius-Julian-Muljadi" target="_blank"
                    className="hover:bg-[#a9a9a9] active:bg-[#909090] flex flex-row gap-2 cursor-pointer *:m-auto">
                    <FontAwesomeIcon icon={faGithub} aria-hidden
                        className="size-5 text-black"    
                    />
                    <div>
                        Github
                    </div>
                </Link>
                <Link href="mailto:juliangenesiusmuljadi@gmail.com"
                    className="hover:bg-[#a9a9a9] active:bg-[#909090] flex flex-row gap-2 cursor-pointer *:m-auto">
                    <FontAwesomeIcon icon={faEnvelope} aria-hidden
                        className="size-5 text-black"    
                    />
                    <div>
                        <span className="inline sm:hidden">Email</span>
                        <span className="hidden sm:inline">juliangenesiusmuljadi@gmail.com</span>
                    </div>
                </Link>
            </div>
            <div className="flex flex-col gap-2">
                <div className="text-2xl font-semibold text-center mt-4 mb-1">
                    Projects
                </div>
                <div className="flex flex-row gap-4 mx-auto dark:invert *:border *:border-black *:bg-[#cccccc] *:shadow-sm *:shadow-slate-400 text-black
                    *:px-3 *:py-2 *:rounded-md">
                    <Link href="https://coding-challenge2-company-website.vercel.app/" target="_blank"
                        className="hover:bg-[#a9a9a9] active:bg-[#909090] flex flex-row gap-2 cursor-pointer *:m-auto">
                        <Image
                            className=""
                            src={VercelLogo}
                            alt="vercel_logo"
                            aria-hidden
                            width={24}
                        />
                        <p>
                            <span className="hidden sm:inline">Vercel Project: </span>Company Website
                        </p>
                    </Link>
                    <Link href="https://github.com/Genesius-Julian-Muljadi/CodingChallenge2_CompanyWebsite" target="_blank"
                        className="hover:bg-[#a9a9a9] active:bg-[#909090] flex flex-row gap-2 cursor-pointer *:m-auto">
                        <FontAwesomeIcon icon={faGithub} aria-hidden
                            className="size-5 text-black"    
                        />
                        <div>
                            Github
                        </div>
                    </Link>
                </div>
                <div className="flex flex-row gap-4 mx-auto dark:invert *:border *:border-black *:bg-[#cccccc] *:shadow-sm *:shadow-slate-400 text-black
                    *:px-3 *:py-2 *:rounded-md">
                    <Link href="https://miniprojectweb-three.vercel.app/" target="_blank"
                        className="hover:bg-[#a9a9a9] active:bg-[#909090] flex flex-row gap-2 cursor-pointer *:m-auto">
                        <Image
                            className=""
                            src={VercelLogo}
                            alt="vercel_logo"
                            aria-hidden
                            width={24}
                        />
                        <p>
                            <span className="hidden sm:inline">Vercel Project: </span>Event Management Website
                        </p>
                    </Link>
                    <Link href="https://github.com/Genesius-Julian-Muljadi/finpro-nextjs-express-prisma" target="_blank"
                        className="hover:bg-[#a9a9a9] active:bg-[#909090] flex flex-row gap-2 cursor-pointer *:m-auto">
                        <FontAwesomeIcon icon={faGithub} aria-hidden
                            className="size-5 text-black"    
                        />
                        <div>
                            Github
                        </div>
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 grid-rows-[2fr_3fr] sm:grid-cols-[2fr_3fr] sm:grid-rows-1 w-full gap-8 mt-6">
                <div className="flex flex-col gap-2" id="languages">
                    <div className="text-lg font-semibold">
                        Languages
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4">
                        <div className="language">
                            Typescript
                        </div>
                        <div className="language">
                            Javascript
                        </div>
                        <div className="language">
                            Python
                        </div>
                        <div className="language">
                            SQL
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2" id="tools">
                    <p className="text-lg font-semibold">
                        Tools: <span className="text-[#d8b4fe]">Front-end</span>/<span className="text-[#70ecbd]">Back-end (Preferred)</span>
                    </p>
                    <div className="grid grid-cols-3 grid-rows-3 gap-4">
                        <div className="frontend">
                            Next.js
                        </div>
                        <div className="frontend">
                            Tailwind CSS
                        </div>
                        <div className="frontend">
                            Vite
                        </div>
                        <div className="frontend">
                            React
                        </div>
                        <div className="frontend">
                            Redux
                        </div>
                        <div className="backend">
                            Node.js
                        </div>
                        <div className="backend">
                            Express
                        </div>
                        <div className="backend">
                            Prisma
                        </div>
                        <div className="backend">
                            JWT
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
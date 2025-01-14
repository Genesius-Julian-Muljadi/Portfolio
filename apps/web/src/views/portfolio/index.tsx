import Image from "next/image";
import PurwadhikaLogo from "../../assets/purwadhika_logo.jpg";
import VercelLogo from "../../assets/vercel.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faDownload,
  faEnvelope,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
// import "./style.css";
import projectLinks from "@/data/projectLinks";
import { backendTools, frontendTools } from "@/data/tools";
import { languages } from "@/data/languages";

export default function PortfolioPage() {
  return (
    <div className="flex flex-col mx-auto gap-4 *:mx-auto">
      <p className="text-4xl sm:text-5xl font-serif mb-4 sm:mb-8 text-center">
        My name is <span className="hidden sm:inline">Genesius </span>
        <b>Julian</b>
        <span className="hidden sm:inline"> Muljadi</span>
      </p>
      <div className="flex flex-col gap-4">
        <p className="text-xl font-sans text-center">
          I'm an upstarting front/back-end web developer from Purwadhika Digital
          Technology School.
        </p>
        <Link
          href="https://purwadhika.com/"
          target="_blank"
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
              <span className="hidden sm:inline mx-1">
                Purwadhika Digital Technology School
              </span>
              <span className="inline sm:hidden">Purwadhika</span>
            </div>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              style={{ color: "#991b1b" }}
              className="m-auto size-5"
            />
          </div>
        </Link>
      </div>
      <div
        className="mt-4 w-full border-b border-zinc-500 dark:border-zinc-200"
        id="h-line1"
      />
      <div
        className="flex flex-row flex-wrap gap-4 place-content-center dark:invert *:border *:border-black *:bg-[#cccccc] *:shadow-sm *:shadow-slate-400 text-black
                *:px-3 *:py-2 *:rounded-md"
        id="links"
      >
        <Link
          href="https://www.linkedin.com/in/genesius-muljadi-4077141ab"
          target="_blank"
          className="hover:bg-[#a9a9a9] active:bg-[#909090] flex flex-row gap-2 cursor-pointer *:m-auto"
        >
          <FontAwesomeIcon
            icon={faLinkedinIn}
            aria-hidden
            className="size-5 text-black"
          />
          <div>LinkedIn</div>
        </Link>
        <Link
          href="https://github.com/Genesius-Julian-Muljadi"
          target="_blank"
          className="hover:bg-[#a9a9a9] active:bg-[#909090] flex flex-row gap-2 cursor-pointer *:m-auto"
        >
          <FontAwesomeIcon
            icon={faGithub}
            aria-hidden
            className="size-5 text-black"
          />
          <div>Github</div>
        </Link>
        <Link
          href="mailto:juliangenesiusmuljadi@gmail.com"
          className="hover:bg-[#a9a9a9] active:bg-[#909090] flex flex-row gap-2 cursor-pointer *:m-auto"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            aria-hidden
            className="size-5 text-black"
          />
          <div>
            <span className="inline sm:hidden">Email</span>
            <span className="hidden sm:inline">
              juliangenesiusmuljadi@gmail.com
            </span>
          </div>
        </Link>
        {/* <Link href="/downloads/resume.pdf" target="_blank"
                    className="hover:bg-[#a9a9a9] active:bg-[#909090] flex flex-row gap-2 cursor-pointer *:m-auto">
                    <FontAwesomeIcon icon={faFile} aria-hidden
                        className="size-5 text-black"
                    />
                    <div>
                        <span>Resume</span>
                    </div>
                    <FontAwesomeIcon icon={faDownload} aria-hidden
                        className="size-5 text-black"    
                    />
                </Link>
                <Link href="/downloads/stock.jpg" download target="_blank"
                    className="hover:bg-[#a9a9a9] active:bg-[#909090] flex flex-row gap-2 cursor-pointer *:m-auto">
                    <FontAwesomeIcon icon={faFile} aria-hidden
                        className="size-5 text-black"
                    />
                    <div>
                        <span>Stock example</span>
                    </div>
                    <FontAwesomeIcon icon={faDownload} aria-hidden
                        className="size-5 text-black"    
                    />
                </Link> */}
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-semibold text-center mt-4 mb-1">
          Projects
        </div>
        {projectLinks.map((link, index) => (
          <div
            key={`${index}-${link.title}`}
            className="flex flex-row justify-between w-full gap-4 mx-auto dark:invert *:border *:border-black *:bg-[#cccccc] *:shadow-sm *:shadow-slate-400 text-black
                    *:px-3 *:py-2 *:rounded-md"
          >
            <Link
              href={link.vercel}
              target="_blank"
              className="hover:bg-[#a9a9a9] active:bg-[#909090] flex flex-row gap-2 cursor-pointer *:m-auto"
            >
              <Image
                className=""
                src={VercelLogo}
                alt="vercel_logo"
                aria-hidden
                width={24}
              />
              <p>
                <span className="hidden sm:inline">Vercel Project: </span>
                {link.title}
              </p>
            </Link>
            <Link
              href={link.github}
              target="_blank"
              className="hover:bg-[#a9a9a9] active:bg-[#909090] flex flex-row gap-2 cursor-pointer *:m-auto"
            >
              <FontAwesomeIcon
                icon={faGithub}
                aria-hidden
                className="size-5 text-black"
              />
              <div>Github</div>
            </Link>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 grid-rows-[2fr_3fr] sm:grid-cols-[2fr_3fr] sm:grid-rows-1 w-full gap-8 mt-6">
        <div className="flex flex-col gap-2" id="languages">
          <div className="text-lg font-semibold">Languages</div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {languages.map((language, index) => (
              <div
                key={`language=${index}-${language}`}
                className="border border-[#6b91af] dark:border-[#9acdf7] rounded-md py-2 px-3 text-center font-semibold font-custom3 text-[#6b91af] dark:text-[#9acdf7]"
              >
                {language}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2" id="tools">
          <p className="text-lg font-semibold">
            Tools:{" "}
            <span className="text-[#9f86ba] dark:text-[#d8b4fe]">
              Front-end
            </span>
            /
            <span className="text-[#408a6e] dark:text-[#70ecbd]">Back-end</span>
          </p>
          <div className="grid grid-cols-3 grid-rows-3 gap-4">
            {frontendTools.map((toolName, index) => (
              <div
                key={`frontend-${index}-${toolName}`}
                className="border border-[#9f86ba] dark:border-[#d8b4fe] rounded-md py-2 px-3 text-center text-[#9f86ba] dark:text-[#d8b4fe] font-custom2 dark:font-custom1"
              >
                {toolName}
              </div>
            ))}
            {backendTools.map((toolName, index) => (
              <div
                key={`backend-${index}-${toolName}`}
                className="border border-[#408a6e] text-[#408a6e] dark:border-[#70ecbd] dark:text-[#70ecbd] rounded-md py-2 px-3 text-center font-semibold font-custom1 dark:font-custom2"
              >
                {toolName}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import type { NextPage } from "next";
import Head from "next/head";
import { Meta } from "../partials/Meta";
import { useRef } from "react";

const isValidURL = (str: string) => {
  try {
    new URL(str);
    const validURL = str.startsWith("https://open.spotify.com/playlist");
    if (validURL) {
      return true;
    } else {
      throw new Error("Invalid URL");
    }
  } catch (e) {
    return false;
  }
};

const Home: NextPage = () => {
  const ref = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(isValidURL(ref.current?.value as string));
  };

  return (
    <div className="h-screen w-screen bg-[#0d0d0d] text-white overflow-hidden">
      <Head>
        <Meta />
      </Head>

      <div className="h-full container px-[2rem]">
        <div className="h-full grid place-content-center">
          <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] xl:text-[3rem] 2xl:text-[3.5rem] font-bold mb-8">
            Enter Playlist Link
          </h1>
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col md:flex-row w-full gap-4"
          >
            <input
              ref={ref}
              required={true}
              className="px-3 py-2 lg:py-3 grow bg-[#0d0d0d] leading-tight text-white rounded border-[1px] border-neutral-700 shadow appearance-none focus:outline-none text-[16px] focus:border-indigo-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;

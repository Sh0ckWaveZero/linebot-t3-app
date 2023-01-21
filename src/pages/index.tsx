import React, { FC } from "react";
import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";

import { Fragment } from "react";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Otter🦦 App</title>
        <meta name="description" content="Otter🦦 App" />
        <meta name="theme-color" content="text-[hsl(280,100%,70%)]"></meta>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦦</text></svg>"
        />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <span className="text-[hsl(280,100%,70%)]">Otter🦦 </span> App
          </h1>
          <div className="flex flex-col items-center gap-2">
            <AuthShowcase />
          </div>
        </div>
      </main>
    </Fragment>
  );
};
export default Home;

const AuthShowcase: FC = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {sessionData ? (
        <Fragment>
          <div className="container mx-auto my-2 p-2">
            <div className="flex flex-row justify-center">
              <div className="h-50 w-50 relative m-1 mr-2 flex items-center justify-center rounded-full bg-gray-500 text-xl text-white">
                <img
                  src={sessionData?.user?.image || "/otter.png"}
                  className="h-40 w-40 rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="flex max-w-xs flex-col  items-center justify-center gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
            <h3 className="text-2xl font-bold">
              {sessionData && <span>เข้าสู่ระบบด้วย →</span>}
            </h3>
            <div className="text-lg">
              {sessionData && sessionData.user?.name}
            </div>
          </div>
        </Fragment>
      ) : null}
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "ลงชื่อออก" : "ลงชื่อใช้งาน"}
      </button>
    </div>
  );
};

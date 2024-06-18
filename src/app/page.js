import React from "react";
import Feed from "./components/Feed";
import Posts from "./components/Posts";
import MiniProfile from "./components/MiniProfile";

export default function Home() {
  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl   mx-auto">
        {/* Posts.jsx */}
        <section className="md:col-span-2">
          <Posts></Posts>
        </section>
        {/* Mini Profile.jsx */}
        <section className="hidden md:inline-grid md:col-span-1">
          <div className="fixed w-[380px]">
            <MiniProfile></MiniProfile>
          </div>
        </section>
      </main>
    </>
  );
}

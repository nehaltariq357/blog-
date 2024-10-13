/* eslint-disable @typescript-eslint/no-unused-vars */
import Footer from "./footer/page";
import Nav from "./Nav/page";
import RecentBlog from "./RecentBlog/page";

export default function Home() {
  return (
    <div>
      <Nav />
      <RecentBlog />
      <Footer />
    </div>
  );
}

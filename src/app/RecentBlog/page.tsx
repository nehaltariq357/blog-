import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
const RecentBlog = () => {
  return (
    <main className="mx-auto">
       <p className="ml-4 md:ml-[102px] mt-10 font-bold text-xl md:text-2xl">Recent Blog Post</p>
      
      {/* recent blog using grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 ">
        <Link href="./DetailPages/Blog1">
          <div className="ml-4 md:ml-[102px] mt-10 mb-10 group">
            <Image
              src="/images/recent1.png"
              alt="pic"
              width={650}
              height={100}
              className="group-hover:scale-90 duration-500"
            />
            <p className="capitalize text-purple-700 text-xs mt-5 mb-5">Olivia Rhye. 1 Jan 2023</p>
            <div className="flex items-center gap-6 md:gap-40">
              <p className="font-bold text-lg">UX Reviews Presentations</p>
              <MdArrowOutward />
            </div>
            <p className="text-xs w-full md:w-[80%]">
              How do you create compelling presentations that wow your colleagues and impress your managers?
            </p>
            <div className="list-none text-xs flex justify-start gap-4">
              <li className="text-purple-600 mt-4 mb-4 bg-purple-100 rounded-lg p-1 font-semibold">Design</li>
              <li className="text-blue-600 mt-4 mb-4 bg-blue-100 rounded-lg p-1 font-semibold">Research</li>
              <li className="text-pink-600 mt-4 mb-4 bg-pink-100 rounded-lg p-1 font-semibold">Presentation</li>
            </div>
          </div>
        </Link>

        <div className="ml-4 mt-10 mb-10">
          <Link href="./DetailPages/Blog2">
            <div className="flex flex-col md:flex-row gap-4 group ">
              <Image
                src="/images/recent2.png"
                alt="pic"
                width={300}
                height={200}
                className="mb-6 group-hover:scale-90 duration-500"
              />
              <div className="w-full md:w-60 ml-0 md:ml-8">
                <p className="text-purple-700 font-semibold capitalize mb-3">Phoenix Baker. 1 Jan 2023</p>
                <h1 className="capitalize font-bold">Migrating to Linear 101</h1>
                <p>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here how to get started.</p>
                <div className="list-none text-xs flex justify-start gap-4">
                  <li className="text-pink-600 mt-4 mb-4 bg-pink-100 rounded-lg p-1 font-semibold">Design</li>
                  <li className="text-blue-600 mt-4 mb-4 bg-blue-100 rounded-lg p-1 font-semibold">Research</li>
                </div>
              </div>
            </div>
          </Link>

          <Link href="./DetailPages/Blog3">
            <div className="flex flex-col md:flex-row gap-4 mt-6 group">
              <Image
                src="/images/recent3.png"
                alt="pic"
                width={300}
                height={200}
                className="mt-2 group-hover:scale-90 duration-500"
              />
              <div className="w-full md:w-60 ml-0 md:ml-8">
                <p className="text-purple-700 font-semibold capitalize mb-3">Lana Steiner. 1 Jan 2023</p>
                <h1 className="capitalize font-bold">Building Your API Stack</h1>
                <p>APIs are integral to software projects, enabling flexibility and interaction between different systems.</p>
                <div className="list-none text-xs flex justify-start gap-4">
                  <li className="text-pink-600 mt-4 mb-4 bg-pink-100 rounded-lg p-1 font-semibold">Design</li>
                  <li className="text-blue-600 mt-4 mb-4 bg-blue-100 rounded-lg p-1 font-semibold">Research</li>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* second section */}
      <div className="mt-10 mb-10 flex flex-col md:flex-row gap-6">
        <Link href="./DetailPages/Blog4">
          <div className="ml-4 md:ml-[102px] group">
            <Image
              src="/images/recent4.png"
              alt="pic"
              width={650}
              height={100}
              className="group-hover:scale-90 duration-500"
            />
            <div className="w-full md:w-[50%]">
              <p className="capitalize text-purple-700 text-xs mt-5 mb-5 font-semibold">Olivia Rhye. 1 Jan 2023</p>
              <div className="flex items-center">
                <p className="font-bold text-lg">Grid System for Better UI Design</p>
                <MdArrowOutward />
              </div>
              <p className="text-xs w-full md:w-[80%]">
                A grid system is a design tool used to arrange content on a webpage.
              </p>
              <div className="list-none text-xs flex justify-start gap-4">
                <li className="text-purple-600 mt-4 mb-4 bg-purple-100 rounded-lg p-1 font-semibold">Design</li>
                <li className="text-pink-600 mt-4 mb-4 bg-pink-100 rounded-lg p-1 font-semibold">Research</li>
              </div>
            </div>
          </div>
        </Link>
      </div>
{/* all blogs */}
<p className="ml-4 md:ml-[102px] mt-10 font-bold text-xl md:text-2xl capitalize mb-5 ">All Blog Posts</p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:ml-[100px] ml-5">
{/* blog1 */}
<Link href="./DetailPages/Blog5">
<div className="group">
          <Image
            src="/images/allblog1.png"
            alt="pic"
            width={384}
            height={240}
            className="group-hover:scale-90 duration-500"
          />
          <p className="capitalize text-purple-700 text-xs mt-5 mb-5 ">
            alec whitten.1 jan 2023
          </p>
          <div className="flex items-center gap-[125px]">
            <p className="font-bold text-lg">
             Bill walsh Leadership Lessons
            </p>
            <p className="">
              <MdArrowOutward />
            </p>
          </div>
          <p className="text-xs w-[80%]">
            How do you create compilling presentations that wow your colleagues
            and impress your managers?
          </p>
          <div className="list-none text-xs flex justify-start gap-4">
            <li className="text-purple-600 mt-4 mb-4 bg-purple-100 rounded-lg p-1 font-semibold">
              Leadership
            </li>
            <li className="text-gray-600 mt-4 mb-4 bg-gray-100 rounded-lg p-1 font-semibold">
              Management
            </li>
          </div>
        </div>
        </Link>
{/* blog2 */}
<Link href="./DetailPages/Blog6">
<div className="group">
          <Image
            src="/images/allblog2.png"
            alt="pic"
            width={384}
            height={240}
            className="group-hover:scale-90 duration-500"
          />
          <p className="capitalize text-purple-700 text-xs mt-5 mb-5 ">
          Demi wllkinson.1 jan 2023
          </p>
          <div className="flex items-center gap-[215px]">
            <p className="font-bold text-lg">
            PM mental models
            </p>
            <p className="">
              <MdArrowOutward />
            </p>
          </div>
          <p className="text-xs w-[80%]">
            Mental models are simple expressions of complex process or relationships.
          </p>
          <div className="list-none text-xs flex justify-start gap-4">
            <li className="text-blue-600 mt-4 mb-4 bg-blue-100 rounded-lg p-1 font-semibold">
              Product
            </li>
            <li className="text-purple-600 mt-4 mb-4 bg-purple-100 rounded-lg p-1 font-semibold">
              Research
            </li>
            <li className="text-orange-600 mt-4 mb-4 bg-orange-100 rounded-lg p-1 font-semibold">
              frameWorks
            </li>
          </div>
        </div>
        </Link>
{/* blog3 */}
<Link href="./DetailPages/Blog7">
<div className="group">
          <Image
            src="/images/allblog3.png"
            alt="pic"
            width={384}
            height={240}
            className="group-hover:scale-90 duration-500"
          />
          <p className="capitalize text-purple-700 text-xs mt-5 mb-5 ">
            candice wu.1 jan 2023
          </p>
          <div className="flex items-center gap-[185px]">
            <p className="font-bold text-lg">
            What is Wireframing?
            </p>
            <p className="">
              <MdArrowOutward />
            </p>
          </div>
          <p className="text-xs w-[80%]">
           Introduction to Wireframing and its principles.Learn from the best in the industry.
          </p>
          <div className="list-none text-xs flex justify-start gap-4">
            <li className="text-purple-600 mt-4 mb-4 bg-purple-100 rounded-lg p-1 font-semibold">
              Design
            </li>
            <li className="text-blue-600 mt-4 mb-4 bg-blue-100 rounded-lg p-1 font-semibold">
              Research
            </li>
          </div>
        </div>
        </Link>
{/* blog4 */}
<Link href="./DetailPages/Blog8">
<div className="group">
          <Image
            src="/images/allblog4.png"
            alt="pic"
            width={384}
            height={240}
            className="group-hover:scale-90 duration-500"
          />
          <p className="capitalize text-purple-700 text-xs mt-5 mb-5 ">
            natali crag.1 jan 2023
          </p>
          <div className="flex items-center">
            <p className="font-bold text-lg w-[80%]">
             How collaboration makes us better designers.
            </p>
            <p className="">
              <MdArrowOutward />
            </p>
          </div>
          <p className="text-xs w-[70%]">
           collaboration can make our teams stronger, and our individual designs better.
          </p>
          <div className="list-none text-xs flex justify-start gap-4">
          <li className="text-purple-600 mt-4 mb-4 bg-purple-100 rounded-lg p-1 font-semibold">
              Design
            </li>
            <li className="text-blue-600 mt-4 mb-4 bg-blue-100 rounded-lg p-1 font-semibold">
              Research
            </li>
          </div>
        </div>
        </Link>
{/* blog5 */}
<Link href="./DetailPages/Blog9">
<div className="group">
          <Image
            src="/images/allblog5.png"
            alt="pic"
            width={384}
            height={240}
            className="group-hover:scale-90 duration-500"
          />
          <p className="capitalize text-purple-700 text-xs mt-5 mb-5 ">
            Drew cano.1 jan 2023
          </p>
          <div className="flex items-center gap-[40px]">
            <p className="font-bold text-lg">
            Our top 10 Javascript framworks to use
            </p>
            <p className="">
              <MdArrowOutward />
            </p>
          </div>
          <p className="text-xs w-[80%]">
            Javascript framworks make development easy with extensive features and functionalities.
          </p>
          <div className="list-none text-xs flex justify-start gap-4">
            <li className="text-green-600 mt-4 mb-4 bg-green-100 rounded-lg p-1 font-semibold">
             Software Development
            </li>
            <li className="text-pink-600 mt-4 mb-4 bg-pink-100 rounded-lg p-1 font-semibold">
              Tools
            </li>
            <li className="text-red-600 mt-4 mb-4 bg-red-100 rounded-lg p-1 font-semibold">
             SaaS
            </li>
          </div>
        </div>
        </Link>
{/* 
blog6 */}
<Link href="./DetailPages/Blog10">
<div className="group">
          <Image
            src="/images/blog10img4.png"
            alt="pic"
            width={384}
            height={240}
            className="group-hover:scale-90 duration-500"
          />
          <p className="capitalize text-purple-700 text-xs mt-5 mb-5 ">
            orlando diggs.1 jan 2023
          </p>
          <div className="flex items-center gap-[35px]">
            <p className="font-bold text-lg">
             Podcast:Creating a better CX Community
            </p>
            <p className="">
              <MdArrowOutward />
            </p>
          </div>
          <p className="text-xs w-[80%]">
           Starting a community does not need be complicated, but how do you get started?
          </p>
          <div className="list-none text-xs flex justify-start gap-4">
            <li className="text-purple-600 mt-4 mb-4 bg-purple-100 rounded-lg p-1 font-semibold">
              Podcasts
            </li>
            <li className="text-gray-600 mt-4 mb-4 bg-gray-100 rounded-lg p-1 font-semibold">
              Customer Success
            </li>
          </div>
        </div>
        </Link>



</div>

    </main>
  );
};

export default RecentBlog;

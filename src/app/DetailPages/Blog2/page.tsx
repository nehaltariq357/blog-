import React from 'react';
import Image from 'next/image';

const Blog2 = () => {
  return (
    <main className="max-w-4xl mx-auto p-6">
      {/* Blog Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Migrating to Linear 101</h1>
        <div className="flex items-center text-gray-600">
          <span className="mr-4">Author: Phoenix Baker</span>
          <span>Date: January 1, 2023</span>
        </div>
      </header>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-gray-700 leading-relaxed">
          In the fast-paced world of software development, project management tools play a pivotal role in ensuring efficiency and collaboration. Linear has emerged as a popular choice among development teams for its streamlined interface and robust feature set. This guide will walk you through the essentials of migrating to Linear, ensuring a smooth transition for your team.
        </p>
        {/* Introduction Image */}
        <div className="mt-4 w-full rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/blog2img2.png" 
            alt="Linear Migration Overview"
            width={800}
            height={400}
            layout="responsive"
            objectFit="cover"
            priority
          />
        </div>
      </section>

      {/* Why Choose Linear? */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Why Choose Linear?</h2>
        <p className="text-gray-700 leading-relaxed">
          Linear offers a modern approach to project management, focusing on speed, simplicity, and integration. Key benefits include:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>
            <span className="font-semibold">Intuitive User Interface:</span> Clean design that reduces the learning curve.
          </li>
          <li>
            <span className="font-semibold">Seamless Integrations:</span> Connects effortlessly with tools like GitHub, Slack, and Figma.
          </li>
          <li>
            <span className="font-semibold">Efficient Workflow:</span> Features like issue tracking, sprints, and roadmaps are designed to enhance productivity.
          </li>
        </ul>
        {/* Why Choose Linear Image */}
        <div className="mt-4 w-full rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/blog2img1.png" 
            alt="Linear Benefits"
            width={800}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      {/* Preparing for Migration */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Preparing for Migration</h2>
     
      </section>

      

      {/* Conclusion */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed">
          Migrating to Linear can significantly enhance your project management efficiency, fostering better collaboration and streamlined workflows. By following this comprehensive guide, you can ensure a smooth transition, allowing your team to leverage Linear powerful features to their fullest potential. Embrace the change, and watch your project management processes transform for the better.
        </p>
        {/* Conclusion Image */}
        <div className="mt-4 w-full rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/blog11img.png" 
            alt="Successful Linear Migration"
            width={800}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>
    </main>
  );
};

export default Blog2;
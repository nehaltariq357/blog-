// components/Top10JSFrameworks.js

import React from 'react';
import Image from 'next/image';

const Blog9 = () => {
  return (
    <main className="max-w-4xl mx-auto p-6">
      {/* Blog Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Top 10 JavaScript Frameworks to Use</h1>
        <div className="flex items-center text-gray-600">
          <span className="mr-4">Author: Web Development Team</span>
          <span>Date: October 12, 2024</span>
        </div>
      </header>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-gray-700 leading-relaxed">
          JavaScript frameworks make development faster and more efficient. In this blog, we’ll explore the top 10 JavaScript frameworks that every developer should consider for their projects, based on factors like performance, popularity, and ease of use.
        </p>
        {/* Introduction Image */}
        <div className="mt-4 w-full rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/blog9img1.png"
            alt="Top JavaScript Frameworks"
            width={800}
            height={400}
            layout="responsive"
            objectFit="cover"
            priority
          />
        </div>
      </section>

      {/* Framework Highlights */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Top Frameworks</h2>

        {/* Framework 1 */}
        <h3 className="text-xl font-semibold mt-4">1. React</h3>
        <p className="text-gray-700 leading-relaxed">
          <strong>Overview:</strong> React is a highly popular library for building user interfaces, developed by Facebook. It uses a virtual DOM for efficient rendering and is widely used for single-page applications.
        </p>

        {/* Framework 2 */}
        <h3 className="text-xl font-semibold mt-4">2. Vue.js</h3>
        <p className="text-gray-700 leading-relaxed">
          <strong>Overview:</strong> Vue.js is a progressive framework known for its simplicity and flexibility. It’s easy to integrate into existing projects and is great for building dynamic user interfaces.
        </p>

        {/* Framework 3 */}
        <h3 className="text-xl font-semibold mt-4">3. Angular</h3>
        <p className="text-gray-700 leading-relaxed">
          <strong>Overview:</strong> Angular is a comprehensive framework developed by Google. It offers powerful tools for building complex single-page applications and provides built-in features like two-way data binding and dependency injection.
        </p>

        {/* Image for Framework Highlights */}
        <div className="mt-4 w-full rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/blog9img2.png"
            alt="JavaScript Framework Highlights"
            width={800}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>

        {/* More Frameworks */}
        <h3 className="text-xl font-semibold mt-4">4. Svelte</h3>
        <p className="text-gray-700 leading-relaxed">
          <strong>Overview:</strong> Svelte is a modern framework that shifts the work to compile time, resulting in lightweight and fast web applications.
        </p>

        <h3 className="text-xl font-semibold mt-4">5. Next.js</h3>
        <p className="text-gray-700 leading-relaxed">
          <strong>Overview:</strong> Next.js is a React-based framework that supports server-side rendering and static site generation, making it ideal for SEO and performance.
        </p>

        <h3 className="text-xl font-semibold mt-4">6. Nuxt.js</h3>
        <p className="text-gray-700 leading-relaxed">
          <strong>Overview:</strong> Built on top of Vue.js, Nuxt.js provides server-side rendering and static site generation out of the box, enhancing both performance and SEO.
        </p>

        <h3 className="text-xl font-semibold mt-4">7. Ember.js</h3>
        <p className="text-gray-700 leading-relaxed">
          <strong>Overview:</strong> Ember.js is an opinionated framework that emphasizes convention over configuration, providing a strong structure for building ambitious web applications.
        </p>

        <h3 className="text-xl font-semibold mt-4">8. Backbone.js</h3>
        <p className="text-gray-700 leading-relaxed">
          <strong>Overview:</strong> Backbone.js is a lightweight framework that offers minimal structure and is great for small or single-page applications.
        </p>

        <h3 className="text-xl font-semibold mt-4">9. Express.js</h3>
        <p className="text-gray-700 leading-relaxed">
          <strong>Overview:</strong> Express.js is a backend framework for Node.js, providing robust routing and middleware capabilities for building web and mobile applications.
        </p>

        <h3 className="text-xl font-semibold mt-4">10. Meteor.js</h3>
        <p className="text-gray-700 leading-relaxed">
          <strong>Overview:</strong> Meteor.js is a full-stack framework that simplifies building real-time web applications, integrating seamlessly with MongoDB and supporting both frontend and backend development.
        </p>
      </section>

      {/* Conclusion */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed">
          The JavaScript ecosystem offers a wide range of frameworks, each suited to different needs. Whether you’re building a dynamic single-page app, a full-stack application, or a real-time collaborative platform, these top 10 frameworks provide the tools and support to make your development process faster and more efficient.
        </p>
        {/* Conclusion Image */}
        <div className="mt-4 w-full rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/blog11img.png"
            alt="JavaScript Frameworks Overview"
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

export default Blog9;

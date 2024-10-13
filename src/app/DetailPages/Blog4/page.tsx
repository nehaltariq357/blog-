// components/GridSystemForBetterUI.js

import React from 'react';
import Image from 'next/image';

const Blog4 = () => {
  return (
    <main className="max-w-4xl mx-auto p-6">
      {/* Blog Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Grid System for Better Design User Interface</h1>
        <div className="flex items-center text-gray-600">
          <span className="mr-4">Author: Alex Johnson</span>
          <span>Date: October 12, 2024</span>
        </div>
      </header>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-gray-700 leading-relaxed">
          A well-implemented grid system is a powerful tool in designing user interfaces. It helps structure content, align elements, and create a consistent layout across various screen sizes. In this blog, we will explore how to utilize grid systems to create intuitive, responsive, and visually appealing UIs.
        </p>
        {/* Introduction Image */}
        <div className="mt-4 w-full rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/blog4img1.png"
            alt="Grid system illustration"
            width={800}
            height={400}
            layout="responsive"
            objectFit="cover"
            priority
          />
        </div>
      </section>

      {/* Benefits of Using a Grid System */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Benefits of Using a Grid System</h2>
        <h3 className="text-xl font-semibold mt-4">1. Structure and Alignment</h3>
        <p className="text-gray-700 leading-relaxed">
          Grids provide structure to a layout by creating consistent spacing and alignment. This helps in organizing content in a way that is easy to navigate and aesthetically pleasing.
        </p>
        <h3 className="text-xl font-semibold mt-4">2. Responsive Design</h3>
        <p className="text-gray-700 leading-relaxed">
          Grid systems allow your design to be more responsive by automatically adjusting the layout based on screen size. This ensures a seamless experience across devices, from mobile phones to desktops.
        </p>
        {/* Benefits Image */}
        <div className="mt-4 w-full rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/blog4img2.png"
            alt="Responsive grid layout"
            width={800}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      {/* Types of Grid Systems */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Types of Grid Systems</h2>
        <h3 className="text-xl font-semibold mt-4">1. Fixed Grid System</h3>
        <p className="text-gray-700 leading-relaxed">
          A fixed grid system uses set pixel values for the layout, offering a stable and precise structure. However, it might not adapt well to different screen sizes.
        </p>
        <h3 className="text-xl font-semibold mt-4">2. Fluid Grid System</h3>
        <p className="text-gray-700 leading-relaxed">
          Fluid grids use percentage-based widths, allowing the layout to resize and adapt to different screen dimensions. This approach is highly effective for responsive designs.
        </p>
        {/* Grid Types Image */}
        <div className="mt-4 w-full rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/blog4img3.png"
            alt="Different types of grid systems"
            width={800}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      {/* Grid System in Practice */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Grid System in Practice</h2>
        <h3 className="text-xl font-semibold mt-4">CSS Grid</h3>
        <p className="text-gray-700 leading-relaxed">
          CSS Grid is one of the most powerful tools for implementing grid systems. It allows for creating complex, responsive layouts with minimal code and offers extensive control over alignment and positioning.
        </p>
        <h3 className="text-xl font-semibold mt-4">Flexbox Grid</h3>
        <p className="text-gray-700 leading-relaxed">
          Flexbox is another popular option for grid-based layouts. While not as flexible as CSS Grid, it excels in single-direction layouts and is easy to implement for simple grid structures.
        </p>
        {/* Grid in Practice Image */}
        <div className="mt-4 w-full rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/blog4img4.png"
            alt="CSS Grid and Flexbox"
            width={800}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      {/* Conclusion */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed">
          Implementing a grid system in your UI design can greatly enhance both the visual appeal and usability of your application. By understanding the different types of grids and knowing when to use them, you can create a responsive and structured layout that provides a seamless user experience. Start experimenting with grid systems today and take your designs to the next level!
        </p>
        {/* Conclusion Image */}
        <div className="mt-4 w-full rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/blog11img.png"
            alt="Effective grid design"
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

export default Blog4;

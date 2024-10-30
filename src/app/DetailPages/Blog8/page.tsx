// components/HowCollaborationMakesUsBetterDesigners.js

import React from 'react';
import Image from 'next/image';

const Blog8 = () => {
  return (
    <main className="max-w-4xl mx-auto p-6">
      {/* Blog Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">How Collaboration Makes Us Better Designers</h1>
        <div className="flex items-center text-gray-600">
          <span className="mr-4">Author: Natali Crag</span>
          <span>Date: January 1, 2023</span>
        </div>
      </header>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-gray-700 leading-relaxed">
          In the dynamic field of design, collaboration often serves as the catalyst for innovation and excellence. Working together with diverse perspectives and skill sets not only enriches the creative process but also elevates the quality of the final product. This blog explores how collaboration enhances our capabilities as designers, fostering personal growth, improving project outcomes, and building stronger professional networks.
        </p>
        {/* Introduction Image */}
        <div className="mt-4 w-full rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/blog8img1.png" 
            alt="Collaboration in Design"
            width={800}
            height={400}
            layout="responsive"
            objectFit="cover"
            priority
          />
        </div>
      </section>

      {/* The Power of Diverse Perspectives */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">The Power of Diverse Perspectives</h2>
        <h3 className="text-xl font-semibold mt-4">1. Enhancing Creativity</h3>
        <p className="text-gray-700 leading-relaxed">
          Collaborating with individuals from different backgrounds brings a multitude of ideas to the table. Diverse perspectives challenge conventional thinking and inspire creative solutions that might not emerge in isolation.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Example:</strong> A team comprising designers, developers, and marketers can blend aesthetic appeal with functionality and marketability, resulting in a more well-rounded product.
        </p>
        {/* Image for Enhancing Creativity */}
        <div className="mt-4 w-full rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/blog8img2.png" 
            alt="Enhancing Creativity through Collaboration"
            width={800}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      {/* Repeat similar structure for other sections like Problem-Solving Synergy, Personal and Professional Growth, etc. */}
      {/* Due to brevity, only one section is shown here. Expand similarly for others. */}

      {/* Conclusion */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed">
          Collaboration is not just a buzzword in the design industry; it is a fundamental practice that drives innovation, enhances personal growth, and leads to superior project outcomes. By embracing collaborative efforts, designers can leverage diverse perspectives, refine their skills, and build stronger professional networks. Ultimately, collaboration transforms individual talent into collective excellence, enabling designers to create impactful and user-centric products that stand out in a competitive landscape. Embrace collaboration as a cornerstone of your design practice and witness the transformative impact it can have on your work and career.
        </p>
        {/* Conclusion Image */}
        <div className="mt-4 w-full rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/blog11img.png" 
            alt="Successful Collaboration"
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

export default Blog8;

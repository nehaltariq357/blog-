// components/PodcastCreatingABetterCXCommunity.js

import React from 'react';
import Image from 'next/image';

const Blog10 = () => {
  return (
    <main className="max-w-4xl mx-auto p-6">
      {/* Blog Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Podcast: Creating a Better CX Community</h1>
        <div className="flex items-center text-gray-600">
          <span className="mr-4">Author: Orlando Diggs</span>
          <span>Date: January 1, 2023</span>
        </div>
      </header>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-gray-700 leading-relaxed">
          Customer Experience (CX) is a critical factor in the success of any business, shaping how customers perceive and interact with a brand. Building a robust CX community fosters collaboration, knowledge sharing, and continuous improvement. This podcast explores strategies and best practices for creating a better CX community, featuring insights from industry experts and real-world examples.
        </p>
        {/* Introduction Image */}
        <div className="mt-4 w-full rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/blog10img1.png" 
            alt="CX Community Podcast"
            width={800}
            height={400}
            layout="responsive"
            objectFit="cover"
            priority
          />
        </div>
      </section>

      {/* Episode Highlights */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Episode Highlights</h2>
        <h3 className="text-xl font-semibold mt-4">1. Understanding the Importance of a CX Community</h3>
        <p className="text-gray-700 leading-relaxed">
          <strong>Definition and Benefits:</strong> A CX community is a network of professionals dedicated to enhancing customer experiences through shared knowledge, resources, and support.<br/>
          <strong>Impact on Business:</strong> Engaged CX communities contribute to improved customer satisfaction, loyalty, and advocacy, driving business growth and success.
        </p>
        <h3 className="text-xl font-semibold mt-4">2. Building the Foundation for Your CX Community</h3>
        <p className="text-gray-700 leading-relaxed">
          <strong>Identify Your Purpose:</strong> Clearly define the goals and objectives of your CX community. Whether it’s knowledge sharing, networking, or problem-solving, a clear purpose guides the community’s direction.<br/>
          <strong>Choose the Right Platform:</strong> Select platforms that facilitate effective communication and engagement. Options include online forums, social media groups, dedicated community platforms like Discourse or Slack, and in-person meetups.<br/>
          <strong>Establish Guidelines:</strong> Create rules and guidelines to ensure respectful and productive interactions. Clear policies help maintain a positive and inclusive environment.
        </p>
        {/* Image for Episode Highlights */}
        <div className="mt-4 w-full rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/blog10img2.png" 
            alt="CX Community Highlights"
            width={800}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      {/* Guest Insights */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Guest Insights</h2>
        <h3 className="text-xl font-semibold mt-4">Jane Smith, CX Director at Innovate Corp</h3>
        <p className="text-gray-700 leading-relaxed">
          Creating a successful CX community starts with fostering a sense of belonging. When members feel valued and connected, they are more likely to actively participate and contribute meaningful insights.
        </p>
        <h3 className="text-xl font-semibold mt-4">Mark Johnson, Community Manager at CustomerFirst</h3>
        <p className="text-gray-700 leading-relaxed">
          Leveraging technology is crucial. Tools that facilitate seamless communication and content sharing can significantly enhance member engagement and satisfaction.
        </p>
        {/* Image for Guest Insights */}
        <div className="mt-4 w-full rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/blog10img3.png" 
            alt="CX Community Guests"
            width={800}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </section>

      {/* Real-World Success Story */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Real-World Success Story</h2>
        <h3 className="text-xl font-semibold mt-4">Case Study: The CX Excellence Network</h3>
        <p className="text-gray-700 leading-relaxed">
          The CX Excellence Network is a thriving online community that brought together over 5,000 CX professionals from around the globe. By focusing on regular webinars, interactive forums, and a mentorship program, the network fostered a collaborative environment that led to numerous successful initiatives, including a global CX best practices repository and a yearly CX innovation summit.
        </p>
        {/* Image for Success Story */}
        <div className="mt-4 w-full rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/blog10img4.png" 
            alt="CX Excellence Network"
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
          Building a better CX community requires intentional planning, consistent engagement, and a commitment to providing value to its members. By understanding the importance of community, establishing a strong foundation, fostering active participation, leveraging technology, and continuously measuring and improving your efforts, you can create a vibrant CX community that drives excellence and innovation. Whether you’re starting from scratch or looking to enhance an existing community, these strategies will help you cultivate a network that empowers CX professionals to deliver outstanding customer experiences.
        </p>
        {/* Conclusion Image */}
        <div className="mt-4 w-full rounded-lg shadow-md overflow-hidden">
          <Image
            src="/images/blog11img.png" 
            alt="CX Community Success"
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

export default Blog10;

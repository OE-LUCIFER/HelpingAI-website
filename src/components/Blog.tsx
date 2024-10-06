import React from 'react';

const blogPosts = [
  { title: 'Advancing Emotional AI', excerpt: 'Exploring the latest developments in emotional intelligence for AI systems.' },
  { title: 'HelpingAI in Education', excerpt: 'How our AI models are transforming the learning experience for students worldwide.' },
  { title: 'The Future of Customer Service', excerpt: 'Implementing emotionally intelligent AI for superior customer interactions.' },
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Latest Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a href="#" className="text-blue-500 font-semibold hover:text-blue-600 transition duration-300">
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
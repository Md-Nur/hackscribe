'use client';
import Navbar from './components/Navbar'
// import BlogContainer from './components/Blog'

import { Client, Databases } from 'appwrite';
import Link from 'next/link';
import { useState, useEffect } from "react";
import Footer from './components/Footer';

const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
  .setProject('6499e205c12da2c3c9c5') // Your project ID




export default function Home() {

  // Dummy blog post data
  const [blogPosts, setblogPosts] = useState([])

  useEffect(() => {

    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "649a70b52ea132347018",//"[DATABASE_ID]"
      "649a70cf368950371e78"// "[COLLECTION_ID]",
    );

    promise.then(function (response) {
      console.log(response);
      setblogPosts(response.documents)
    }, function (error) {
      console.log(error);
    });

  }, [])

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-4">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white p-4 shadow-md">
              <img
                src={post.Image}
                alt={post.Title}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{post.Title}</h3>
              <p className="text-gray-700 my-5">{post.MetaDesc} ...</p>
              <Link href={`/blogs/${post.slug}`} className="bg-blue-500 text-white py-2 px-4 mt-4 rounded">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

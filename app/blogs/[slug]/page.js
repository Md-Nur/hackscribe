'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Client, Databases, Query } from 'appwrite';
import Head from 'next/head';
import Navbar from '@/app/components/Navbar';

const BlogPost = ({ params }) => {
  const { slug } = params;

  // Fetch blog post data based on the slug
  const client = new Client();
  client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('6499e205c12da2c3c9c5') // Your project ID
  // Replace this with your own data fetching logic

  const [blogPost, setblogPost] = useState()

  useEffect(() => {

    const databases = new Databases(client);

    let promise = databases.listDocuments(
      "649a70b52ea132347018",//"[DATABASE_ID]"
      "649a70cf368950371e78",// "[COLLECTION_ID]",
      [
        Query.equal('slug', slug)
      ],
    );

    promise.then(function (response) {
      console.log(response);
      setblogPost(response.documents[0])
    }, function (error) {
      console.log(error);
    });

  }, [])


  if (!blogPost) {
    // Add your own loading state or error handling logic here
    return <div>Loading...</div>;
  }

  return (

    <>
    <Head>
      <title>{blogPost.Title}</title>
      <meta name="description" content={blogPost.MetaDesc} />
    </Head>
    <Navbar />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{blogPost.Title}</h1>
        <div className="relative h-80 mb-6">
          <Image
            src={blogPost.Image}
            alt={blogPost.Title}
            fill="responsive"
            />
        </div>
        {/* Dangerous Html code  */}
        <div dangerouslySetInnerHTML={{__html: blogPost.Content}}></div>
        <p>{blogPost.Content}</p>
        {/* Dangerous Html code  */}
      </div>
    </div>
            </>
    )
};

export default BlogPost;

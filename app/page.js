"use client";
import Navbar from './components/Navbar'
import Image from 'next/image'
let image = "https://images.unsplash.com/photo-1417733403748-83bbc7c05140?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
let title = "Blog Post Title"
let content = "This is content for the blog post."

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>{title}</h1>
            <Image src={image} alt="blog post image" width="870" height="400" />
            <p>{content}</p>
          </div>
        </div>
      </div >



    </>
  )
}

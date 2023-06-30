"use client"
import { useState } from 'react';
import Image from 'next/image'

import { Client, Databases, ID } from "appwrite";

const client = new Client();

const databases = new Databases(client);

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
  .setProject('6499e205c12da2c3c9c5') // Your project ID
  ;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const promise = databases.createDocument('649a70b52ea132347018', '649f026dcef8d9bb4536', ID.unique(), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      promise.then(function (response) {
        // console.log(response); // Success

        setFormData({
          name: '',
          email: '',
          message: '',
        });
        alert('Your message has been sent!');
      }, function (error) {
        console.log(error); // Failure
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className="bg-gray-100 min-h-screen flex items-center flex-col w-screen py-10">
      <h2 className="mb-5 text-4xl font-bold">Contact Me</h2>
      <div className="md:grid md:justify-items-center md:grid-cols-2 flex flex-col items-center w-screen">

        <div className="hidden sm:flex sm:justify-start">
          <Image src="/connection.png" alt="Picture of the author" width={500} height={500} />
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold m-auto">Contact Form</h3>
          <form className="space-y-4 min-w-[80vw] md:min-w-[40vw] p-5" autoComplete='off' onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                autoSave='false'
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#c8ebf5] rounded focus:border-[#32445d]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoSave='false'
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#c8ebf5] rounded focus:border-[#32445d]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                required
                autoSave='false'
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-[#c8ebf5] rounded focus:border-[#32445d]"
              ></textarea>
            </div>
            <div className='flex justify-center'>
              <button
                type="submit"
                className="px-6 py-2 text-[#c8ebf5] bg-[#32445d] rounded hover:bg-[#3f5472]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section >
  );
};

export default ContactForm;

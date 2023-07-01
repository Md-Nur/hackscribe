"use client"
import { useState } from 'react';
import Image from 'next/image'
import contact from '../../public/connection.png'

import { Client, Databases, ID } from "appwrite";
import { textFont, titleFont } from '../utils/font';

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
    <section className="bg-gray-100 min-h-screen flex items-center flex-col py-10">
      <h2 className={`font-[heebo] mb-5 text-4xl font-bold ${titleFont.className}`}>Contact Me</h2>
      <div className="flex items-center md:grid md:grid-cols-2 md:justify-items-center">

        <div className="hidden sm:flex sm:justify-start">
          <Image src={contact} alt="Picture of the author" />
        </div>

        <div className="flex flex-col items-center">
          <h3 className={`hidden sm:block text-2xl font-bold m-auto ${textFont.className}`}>Contact Form</h3>
          <form className="space-y-4 p-3 sm:w-[40vw] w-[80vw]" autoComplete='off' onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder='Your Name'
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-secondary rounded focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder='your_email@email.com'
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-secondary rounded focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder='Give me your message. If you want to hire me, please give me your project details.'
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-secondary rounded focus:border-primary"
              ></textarea>
            </div>
            <div className='flex justify-center'>
              <button
                type="submit"
                className="px-6 py-2 text-secondary bg-primary rounded hover:bg-primaryDark"
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

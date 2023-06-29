// const Contact = () => {
//     return (
//         <section className="bg-gray-100 py-10">
//             <div className="container mx-auto px-4">
//                 <div className="max-w-xl mx-auto">
//                     <h2 className="text-4xl font-semibold text-center mb-6">Contact Me</h2>
//                     <form className="flex flex-col space-y-4">
//                         <input
//                             type="text"
//                             placeholder="Your Name"
//                             className="py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
//                         />
//                         <input
//                             type="email"
//                             placeholder="Your Email"
//                             className="py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
//                         />
//                         <textarea
//                             placeholder="Your Message"
//                             className="py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
//                         ></textarea>
//                         <button
//                             type="submit"
//                             className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300"
//                         >
//                             Send Message
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Contact;



// BlogForm.js
"use client"
import { useState } from 'react';
import { Client, Databases, ID } from "appwrite";


const BlogForm = () => {

    // app write documentation
    const client = new Client();

    const databases = new Databases(client);

    client
        .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
        .setProject('6499e205c12da2c3c9c5') // Your project ID
        ;

    // const promise = databases.createDocument('[DATABASE_ID]', '[COLLECTION_ID]', '[DOCUMENT_ID]', {});

    // promise.then(function (response) {
    //     console.log(response); // Success
    // }, function (error) {
    //     console.log(error); // Failure
    // });
    // App write doc


    const [formData, setFormData] = useState({
        Title: '',
        Content: '',
        Image: '',
        MetaDesc: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Title	Content	slug	Image	MetaDesc
            let { Title, Image, Content, MetaDesc } = formData;
            let slug = Title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
            console.log(MetaDesc);
            // Remove html tags form content to enter MetaDesc and slice it to 100 characters
            MetaDesc = Content.replace(/(<([^>]+)>)/gi, "").slice(0, 100);

            // If no image is provided or image is not a url, set a default image
            if (Image === '' || Image.type != URL) {
                Image = "https://images.unsplash.com/photo-1417733403748-83bbc7c05140?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80";
            }
            if (Content.length > 5000) {
                alert('Content must be less than 5000 characters.');
                return;
            }
            if (Title.length > 100) {
                alert('Title must be less than 100 characters.');
                return;
            }
            if (Content.length < 100) {
                alert('Content must be more than 100 characters.');
                return;
            }

            const dataBaseId = '649a70b52ea132347018'; // Replace with your Appwrite database ID
            const collectionId = '649a70cf368950371e78'; // Replace with your Appwrite collection ID
            const documentId = ID.unique(); // Replace with your Appwrite document ID

            // Create a new document in the Appwrite collection


            const promise = databases.createDocument(dataBaseId, collectionId, documentId, {
                Title,
                Content,
                slug,
                Image,
                MetaDesc,
            });
            promise.then(function (response) {
                console.log(response); // Success
            }, function (error) {
                console.log(error); // Failure
            });

            // Reset form data
            setFormData({
                Title: '',
                Image: '',
                Content: '',
                MetaDesc: '',
            });
            alert('Blog post created successfully!');

        } catch (error) {
            console.error('Error creating blog post:', error);
            // Handle error, display an error message to the user, etc.
        }
    };

    return (
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <div className="max-w-xl mx-auto">
                    <h2 className="text-4xl font-semibold text-center mb-6">Create A Blog</h2>

                    <form className="flex flex-col space-y-4 h-screen" onSubmit={handleSubmit}>
                        <label>
                            Title:
                        </label>
                        <input
                            type="text"
                            name="Title"
                            placeholder='Title'
                            required
                            value={formData.Title}
                            onChange={handleChange}
                            className="py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                        />
                        <label>
                            Image Url
                        </label>
                        <input
                            type="url"
                            name="Image"
                            placeholder='Enter a url for your image'
                            value={formData.Image}
                            onChange={handleChange}
                            className="py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                        />
                        <label >
                            Content:
                        </label>
                        <textarea
                            name="Content"
                            placeholder='Create a new blog post within 5000 characters.'
                            required
                            value={formData.Content}
                            onChange={handleChange}
                            className="py-3 px-4 border h-full border-gray-300 rounded-md focus:outline-none focus:border-purple-500"

                        />

                        <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BlogForm;

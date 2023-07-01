import React from 'react'

function Loadingblog() {
  return (
    <section className="container mx-80 sm:px-6 lg:px-8 p-10 px-80">
          <div className="animate-pulse my-10 bg-gray-500 rounded-md w-80 h-10  mb-2"></div>
          <div className="animate-pulse my-10 bg-gray-500 rounded-md w-1/2 h-60 mb-4"></div>
          <div className="animate-pulse my-10 bg-gray-500 rounded-md w-1/2 h-screen  mb-4"></div>

        </section>
  )
}

export default Loadingblog
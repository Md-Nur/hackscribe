
const Loading = () => {


  let loading = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    
    <>

      {loading.map((item) => (
        <div className="container">
          <div className="animate-pulse bg-gray-500 rounded-md h-40 mb-4"></div>
          <div className="animate-pulse bg-gray-500 h-6 w-3/4 mb-2"></div>
          <div className="animate-pulse bg-gray-500 h-4 w-2/4 mb-4"></div>
          <div className="animate-pulse bg-gray-500 h-10 w-20"></div>

        </div>
      ))}


    </>

  );
};

export default Loading;

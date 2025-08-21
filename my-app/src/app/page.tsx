import Timer from "./_componets/Timer";

export default function Page() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 relative text-white">
      
      {/* Top Title */}
      <h1 className="absolute top-10 text-xl md:text-4xl font-extrabold text-center drop-shadow-lg">
        Periyar University <br />
        <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-xl">
          Symposium 2k25
        </span>
      </h1>

      {/* Timer Center */}
      <div className="w-full flex items-center justify-center ">
       <div className="w-full">
         <Timer />
       </div>
      </div>
    </div>
  );
}

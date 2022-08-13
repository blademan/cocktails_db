import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
 return (
  <section className=" bg-blue-100/50 h-screen">
   <div className="text-center w-[40rem] mx-auto py-20">
    <h1 className="text-3xl font-bold text-gray-700 pb-12 ">Oops! It's A Dead End</h1>
    <Link to="/">
     <button className="bg-green-700 px-6 py-2 rounded text-white uppercase  tracking-widest hover:bg-green-600">
      Back Home
     </button>
    </Link>
   </div>
  </section>
 );
}

import React from 'react';

export default function SearchForm() {
 return (
  <section className="pb-20">
   <form className="bg-white w-[40rem] mx-auto py-12 px-10 rounded-md">
    <label className="text-green-800 " htmlFor="search">
     Search Your Favorite Cocktail
    </label>
    <input
     id="search"
     className="bg-gray-100 w-full p-2 mt-6 rounded-md"
     type="text"
     placeholder="Search"
    />
   </form>
  </section>
 );
}

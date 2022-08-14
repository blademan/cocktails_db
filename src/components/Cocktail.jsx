import React from 'react';
import { Link } from 'react-router-dom';

export default function Cocktail({ id, name, image, info, glass }) {
 return (
  <article className="bg-white shadow shadow-black/20 rounded-lg hover:shadow-2xl hover:shadow-black/50 duration-500 overflow-hidden">
   <img src={image} alt="Drink" className="" />
   <div className="flex flex-col p-6 space-y-4">
    <h3 className="text-gray-500 text-2xl uppercase font-bold">{name}</h3>
    <h4>{glass}</h4>
    <p>{info}</p>
    <Link
     to={`/cocktail/${id}`}
     className="bg-green-800 text-white text-center capitalize py-2 hover:bg-green-600">
     details
    </Link>
   </div>
  </article>
 );
}

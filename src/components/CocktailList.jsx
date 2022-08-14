import React from 'react';
import Cocktail from './Cocktail';
import { useGlobalContext } from '../context';

export default function CocktailList() {
 const { cocktails } = useGlobalContext();

 return (
  <section className="pb-20 px-12">
   <h1 className="text-3xl text-center font-bold text-gray-700 pb-12 tracking-widest">Cocktails</h1>
   <div className="grid grid-cols-3 gap-x-10 gap-y-20">
    {cocktails.map((item) => (
     <Cocktail key={item.id} {...item} />
    ))}
   </div>
  </section>
 );
}

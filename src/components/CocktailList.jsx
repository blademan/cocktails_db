import React from 'react';
import Cocktail from './Cocktail';
import { useGlobalContext } from '../context';
import Loading from './loading/Loading';

export default function CocktailList() {
 const { cocktails, loading } = useGlobalContext();

 if (loading) {
  return <Loading />;
 }

 if (cocktails.length < 1) {
  return (
   <h2 className="text-2xl font-bold text-gray-700 pb-12 tracking-widest text-center">
    no cocktails matched your search criteria
   </h2>
  );
 }

 return (
  <section className="px-12 ">
   <h1 className="text-3xl text-center font-bold text-gray-700 pb-12 tracking-widest">Cocktails</h1>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-20">
    {cocktails.map((item) => (
     <Cocktail key={item.id} {...item} />
    ))}
   </div>
  </section>
 );
}

import React from 'react';
import SearchForm from '../components/SearchForm';
import SingleCocktail from '../pages/SingleCocktail';

export default function Home() {
 return (
  <main className="bg-blue-100/50 h-screen py-20">
   <SearchForm />
   <SingleCocktail />
  </main>
 );
}

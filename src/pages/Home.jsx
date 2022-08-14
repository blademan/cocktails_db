import React from 'react';
import SearchForm from '../components/SearchForm';
import CocktailList from '../components/CocktailList';

export default function Home() {
 return (
  <main className="bg-blue-100/50 h-[94vh] pt-20">
   <SearchForm />
   <CocktailList />
  </main>
 );
}

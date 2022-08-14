import React from 'react';
import SearchForm from '../components/SearchForm';
import CocktailList from '../components/CocktailList';

import { useGlobalContext } from '../context';

export default function Home() {
 const { cocktails } = useGlobalContext();

 return (
  <main className="bg-blue-100/50 h-full py-20">
   <SearchForm />
   <CocktailList />
  </main>
 );
}

import React from 'react';
import { useGlobalContext } from '../context';
import { DebounceInput } from 'react-debounce-input';

export default function SearchForm() {
 const { setSearchString } = useGlobalContext();
 const inputRef = React.useRef('');

 React.useEffect(() => {
  inputRef.current.focus();
 }, []);

 function searchCocktail(e) {
  setSearchString(e.target.value);
 }
 function handleSubmit(e) {
  e.preventDefault();
 }

 return (
  <section className="pb-20">
   <form
    onSubmit={handleSubmit}
    className="bg-white md:w-[20rem] md:w-[40rem] mx-auto py-12 px-10 rounded-md">
    <label ref={inputRef} className="text-green-800 " htmlFor="search">
     Search Your Favorite Cocktail
    </label>
    <DebounceInput
     debounceTimeout={500}
     onChange={searchCocktail}
     id="search"
     className="bg-gray-100 w-full p-2 mt-6 rounded-md"
     type="text"
     name="name"
     placeholder="Search"
    />
   </form>
  </section>
 );
}

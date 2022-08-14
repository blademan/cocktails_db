import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loading from '../components/loading/Loading';

export default function SingleCocktail() {
 const { id } = useParams();
 const [loading, setLoading] = useState(false);
 const [cocktail, setCocktail] = useState(null);

 useEffect(() => {
  setLoading(true);
  async function getCocktail() {
   try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    if (data.drinks) {
     const {
      strDrink: name,
      strDrinkThumb: image,
      strAlcoholic: info,
      strCategory: category,
      strGlass: glass,
      strInstructions: instructions,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
     } = data.drinks[0];
     const ingredients = [
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
     ];
     const newCocktail = {
      name,
      image,
      info,
      category,
      glass,
      instructions,
      ingredients,
     };
     setCocktail(newCocktail);
    } else {
     setCocktail(null);
    }
   } catch (error) {
    console.log(error);
   }
   setLoading(false);
  }
  getCocktail();
 }, [id]);
 if (loading) {
  return <Loading />;
 }
 if (!cocktail) {
  return <h2 className="section-title">no cocktail to display</h2>;
 } else {
  const { name, image, category, info, glass, instructions, ingredients } = cocktail;

  return (
   <section className="text-center py-20">
    <Link
     to="/"
     className="bg-green-800 hover:bg-green-600 duration-300 text-white px-6 py-2 rounded capitalize">
     back home
    </Link>
    <h2 className="text-3xl text-center font-bold text-gray-700 py-16 tracking-widest">{name}</h2>

    <div className="flex space-x-10 px-32 mx-auto items-center">
     <div className="w-1/3">
      <img src={image} alt="drink" />
     </div>

     <div className="flex flex-col space-y-6 text-left">
      <p>
       <span className="bg-green-500  rounded px-2 py-1 mr-3">Name :</span> {name}
      </p>
      <p>
       <span className="bg-green-500  rounded px-2 py-1 mr-3">Category :</span> {category}
      </p>
      <p>
       <span className="bg-green-500  rounded px-2 py-1 mr-3">Info :</span> {info}
      </p>{' '}
      <p>
       <span className="bg-green-500  rounded px-2 py-1 mr-3">Glass :</span> {glass}
      </p>
      <p>
       <span className="bg-green-500  rounded px-2 py-1 mr-3">Instructons :</span> {instructions}
      </p>{' '}
      <p>
       <span className="bg-green-500  rounded px-2 py-1 mr-3">Ingredients :</span> {ingredients}
      </p>
     </div>
    </div>
   </section>
  );
 }
}

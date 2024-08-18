import React from 'react';
import foodRecipe from '../assets/foodRecipe.png';
import RecipeItem from '../components/RecipeItem';


export default function Home() {
  return (
    <>
      <section className='Home'>
        <div className='left'>
          <h1 className='h1'>Food Recipe</h1>
            <h5 className='h5'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ,<br/> standard dummy text ever since the 1500s, when an unknown printer took a galle noLeLorem Ipsum.
            </h5>
            <button className='sbutton'>Share your recipe</button>
        </div>
        <div className='right'>
            <img className='rightImage'
             src={foodRecipe}
             alt='Delicious food'
             width="320px" 
             height="260px"/>        
        </div>
      </section>
        <div className="bg">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
              <path
                  fill="#d4f6e8"
                  fillOpacity="1" 
                  d="M0,96L48,106.7C96,117,192,139,288,160C384,181,480,203,576,202.7C672,203,768,181,864,165.3C960,149,1056,139,1152,133.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
              </svg>
        </div>
        <div>
            <RecipeItem />
        </div>
    </>
  );
}





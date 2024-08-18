import React from 'react';
import { useLoaderData } from 'react-router-dom';
import foodImg from "../assets/foodRecipe1.png";
import { BsStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";

export default function RecipeItem() {
const allRecipes=useLoaderData();

  return (
    <>
        <div className='card-container'>
          {
            allRecipes.map((item,index) => {
              return(
                <div key={index} className='card'>
                  <img src={foodImg} width='120px' height='100px'></img>
                  <div className='card-body'>
                    <div className='title'>{item.title}</div>
                      <div className='icons'>
                        <div className='timer'><BsStopwatchFill />30m</div>
                          <FaHeart />
                      </div>
                  </div>
                </div>
              )
            })
          }
        </div>
    </>
  )
}

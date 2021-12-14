import React, { useState } from 'react'

import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { BsFillPlayFill } from "react-icons/bs";
import { CgMathPlus } from "react-icons/cg";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

function RowMovies({ items, title }) {
  const [scrollX, setScrollX] = useState(0)
  function LeftArrow() {
    let x = scrollX + 500
    if (x > 0) {
      x = 0
    }
    setScrollX(x)
  }

  function RightArrow() {
    let x = scrollX - 500
    let list = items.results.length * 220
    if ((window.innerWidth - list) > x) {
      x = (window.innerWidth - list) - 60
    }
    setScrollX(x)
    console.log(list)
  }
  return (

    <div className="wrapper">
      <h1>{title}</h1>
      <div className="teste">
        <button onClick={LeftArrow} className='left_button'><FiChevronLeft /></button>
        <button onClick={RightArrow} className='right_button'><FiChevronRight /></button>
        <div style={{ marginLeft: scrollX }} className="slide">
          {
            items.results.map((item, index) => {
              return (

                <div key={index} className="card">
                  <img className="image" src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} />
                  <div className='info'>
                    <div className='controllers'>
                      <span><BsFillPlayFill /></span>
                      <span><CgMathPlus /></span>
                      <span><BiLike /></span>
                      <span><BiDislike /></span>
                    </div>
                    <div className="recomend">
                      <span>{item.vote_average * 10}% Relevante</span>
                      <span>L</span>
                    </div>
                    <span>{item.name}</span>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  );
}

export default RowMovies;

/*
 <div style={{ marginLeft: scrollX }} className="slide"></div>
  <div className="wrapper">
          <button onClick={LeftArrow} className='left_button'><FiChevronLeft /></button>
          <button onClick={RightArrow} className='right_button'><FiChevronRight /></button>
          <div style={{ marginLeft: scrollX }} className="slide">

            {
              movies.map((item, index) => {
                return (

                  <div key={index} className="card">
                    <span> {item.title}</span>
                    <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} />
                    <div className='info'>
                      <div className='controllers'>
                        <span><BsFillPlayFill /></span>
                        <span><CgMathPlus /></span>
                        <span><BiLike /></span>
                        <span><BiDislike /></span>
                      </div>
                      <div className="recomend">
                        <span>{item.vote_average * 10}% Relevante</span>
                        <span>L</span>
                      </div>
                      <span>{item.name}</span>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>



*/


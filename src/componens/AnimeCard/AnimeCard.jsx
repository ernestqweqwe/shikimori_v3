import { BASE_URL } from 'node-shikimori';
import React from 'react';
import cl from './Anime.card.module.css'

function AnimeCard({ data }) {
  return (
    <div className={cl.card}>
      <div className={cl.card__img_container}>
        <img className={cl.card__img} src={`${BASE_URL}${data.image.original}`} alt="" />
      </div>
      <div className='card__info'>
        <div className={cl.card__title}>{data.russian}</div>
        <div className={cl.card__subtitle}>
          <div>{data.kind}</div>
          <div>{data.aired_on.slice(0,4)}</div>
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;

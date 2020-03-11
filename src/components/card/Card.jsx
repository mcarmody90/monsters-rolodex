import React from 'react';
import './card.styles.css';

export const Card = (props) => {
  return (
    <div className='card-container'>
      <div class="card">
        <div class="card__side card__side--front">
            <div class="card__picture">
            <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt="monster"/>
            </div>
            <h4 class="card__heading">
                <span class="card__heading-span card__heading-span">
                    { props.monster.name }
                </span>
            </h4>
        </div>
        <div class="card__side card__side--back">
            <div class="card__cta">
                <div class="card__info">
                    <h3 class="card__info-title">Info</h3>
                    <p><span>Username:</span> { props.monster.username }</p>
                    <p><span>Email:</span> { props.monster.email }</p>
                    <p><span>Website:</span> { props.monster.website }</p>
                    <p><span>Company:</span> { props.monster.company.name }</p>
                </div>
                <a href={`https://www.google.com/search?q=${props.monster.name}`} class="btn btn--blue">Learn More</a>
            </div>
        </div>
      </div>
    </div>
  )
}

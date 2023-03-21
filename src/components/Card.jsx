import React from 'react'


const Card = (props) => {
  return (
    <div className="cards">
        <img src={props.image} alt="" />
        <div className="cards-body">
            <h2>{props.text}</h2>
            <p>[学習した内容]</p>
            <h5>{props.skill}</h5>
            <a href={props.link}>サイトを見に行く→</a>
        </div>
    </div>
  )
}

export default Card

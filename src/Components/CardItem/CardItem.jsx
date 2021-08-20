import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function CardItem({ path, label, src, text }) {
  return (
    <Fragment>
      <li className='cards__item'>
        <Link className='cards__item__link' to={path}>
          <figure className='cards__item__pic-wrap' data-category={label}>
            <img src={src} alt='Travel Image' className='cards__item__img' />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{text}</h5>
          </div>
        </Link>
      </li>
    </Fragment>
  );
}

export default CardItem;

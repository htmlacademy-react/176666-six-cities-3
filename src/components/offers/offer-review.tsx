import { Review } from '../../types/models';
import { getCurrentDate, getMonthAndYear } from '../../utils';

type OfferReviewProps = {
  currentReview: Review;
}

export default function OfferReview ({currentReview}: OfferReviewProps) {
  const {avatar, name, text, date} = currentReview;
  const convertData = new Date(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime={getCurrentDate(convertData)}>{getMonthAndYear(convertData)}</time>
      </div>
    </li>
  );
}

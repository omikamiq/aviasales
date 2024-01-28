import React from 'react';
import styles from './Item.module.css';
import item_logo from '../../assets/item_logo.png';
import { Ticket } from '../../types/tickets';
import { getHours, getMinutes } from 'date-fns';

const transferTransform = (arrLen: number) => {
  switch (arrLen) {
    case 0:
      return 'Без пересадок';
    case 1:
      return '1 пересадка';
    case 2:
      return '2 пересадки';
    case 3:
      return '3 пересадки';
    case 4:
      return '4 пересадки';
  }
};

const timeTableTransform = (date, duration) => {
  const departureHours =
    getHours(date) < 10 ? `0${getHours(date)}` : getHours(date);
  const departureMins =
    getMinutes(date) < 10 ? `0${getMinutes(date)}` : getMinutes(date);
  const arrivalDate = new Date(Date.parse(date) + duration * 60 * 1000);
  const arrivalHours =
    getHours(arrivalDate) < 10
      ? `0${getHours(arrivalDate)}`
      : getHours(arrivalDate);
  const arrivalMins =
    getMinutes(arrivalDate) < 10
      ? `0${getMinutes(arrivalDate)}`
      : getMinutes(arrivalDate);
  return `${departureHours}:${departureMins} - ${arrivalHours}:${arrivalMins}`;
};

export const Item: React.FC<Ticket> = ({ price, carrier, segments }) => {
  const [to, back] = segments;
  const {
    origin: originTo,
    destination: destinationTo,
    date: dateTo,
    stops: stopsTo,
    duration: durationTo,
  } = to;
  const {
    origin: originBack,
    destination: destinationBack,
    date: dateBack,
    stops: stopsBack,
    duration: durationBack,
  } = back;

  return (
    <div className={styles.item_wrapper}>
      <div className={styles.price_and_logo_wrapper}>
        <div className={styles.price}>{`${price} P`}</div>
        <img src={item_logo} alt={carrier} className={styles.item_logo} />
      </div>
      <div className={styles.item_info_wrapper}>
        <div
          className={styles.direction1}
        >{`${originTo} - ${destinationTo}`}</div>
        <div className={styles.time_table1}>
          {timeTableTransform(dateTo, durationTo)}
        </div>
        <div className={styles.time_travel_title1}>В пути</div>
        <div className={styles.time_travel_value1}>{`${Math.trunc(
          durationTo / 60
        )}ч ${durationTo % 60}м`}</div>
        <div className={styles.transfers_title1}>
          {transferTransform(stopsTo.length)}
        </div>
        <div className={styles.transfers_names1}>{stopsTo.join(', ')}</div>
        <div
          className={styles.direction2}
        >{`${originBack} - ${destinationBack}`}</div>
        <div className={styles.time_table2}>
          {timeTableTransform(dateBack, durationBack)}
        </div>
        <div className={styles.time_travel_title2}>В пути</div>
        <div className={styles.time_travel_value2}>{`${Math.trunc(
          durationBack / 60
        )}ч ${durationBack % 60}м`}</div>
        <div className={styles.transfers_title2}>
          {transferTransform(stopsBack.length)}
        </div>
        <div className={styles.transfers_names2}>{stopsBack.join(', ')}</div>
      </div>
    </div>
  );
};

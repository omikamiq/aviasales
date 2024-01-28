import React, { useEffect, useState } from 'react';
import { Item } from '../Item/Item';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchTickets } from '../../store/action-creators/ticket';
import { Ticket } from '../../types/tickets';

import styles from './Itemlist.module.css';

export const ItemList = () => {
  const { tickets, loading, error } = useTypedSelector((state) => state.ticket);
  const { transferSort, speedOrDurationSort, totalCount } = useTypedSelector(
    (state) => state.sort
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTickets());
  }, []);

  const [ticketList, setTicketList] = useState(tickets);

  useEffect(() => {
    let filteredTickets: Ticket[] = [...tickets];
    if (transferSort.length === 0) {
      setTicketList(filteredTickets.sort((a, b) => a.price - b.price));
    } else {
      filteredTickets = tickets?.filter((ticket: Ticket) => {
        const { price, carrier, segments } = ticket;
        const [to, back] = segments;
        const { stops: stopsTo } = to;
        const { stops: stopsBack } = back;

        return transferSort.some(
          (value) => value === stopsTo.length + stopsBack.length
        );
      });
    }
    if (speedOrDurationSort === 'Самый дешевый') {
      setTicketList(filteredTickets.sort((a, b) => a.price - b.price));
      console.log(speedOrDurationSort);
    } else {
      setTicketList(
        filteredTickets.sort(
          (a, b) =>
            a.segments[0].duration +
            a.segments[1].duration -
            (b.segments[0].duration + b.segments[1].duration)
        )
      );
    }
  }, [transferSort, tickets, speedOrDurationSort]);

  if (loading) return <h1>Загружаем билеты...</h1>;
  if (error) return <h1>Произошла ошибка</h1>;

  return (
    <div className={styles.item_list}>
      {ticketList
        ?.map((ticket: Ticket) => {
          const { price, carrier, segments } = ticket;

          return <Item price={price} carrier={carrier} segments={segments} />;
        })
        .slice(0, totalCount)}
    </div>
  );
};

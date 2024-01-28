import { Dispatch } from 'redux';
import { TicketAction, TicketsActionTypes } from '../../types/tickets';

const searchIdUrl = 'https://aviasales-test-api.kata.academy/search';

export const fetchTickets = () => {
  return async (dispatch: Dispatch<TicketAction>) => {
    try {
      dispatch({ type: TicketsActionTypes.FETCH_TICKETS });
      const searchId = await fetch(searchIdUrl);
      const parsedSearchId = await searchId.json();

      const tickets = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${parsedSearchId.searchId}`
      );
      const parsedTickets = await tickets.json();

      dispatch({
        type: TicketsActionTypes.FETCH_TICKETS_SUCCESS,
        payload: parsedTickets.tickets,
      });
    } catch (e) {
      dispatch({
        type: TicketsActionTypes.FETCH_TICKETS_ERROR,
        payload: 'Извините, произошла ошибка при загрузке пользователей :(',
      });
    }
  };
};

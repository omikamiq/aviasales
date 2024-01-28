import {
  TicketAction,
  TicketState,
  TicketsActionTypes,
} from '../../types/tickets';

export const initialState: TicketState = {
  tickets: [],
  loading: false,
  error: false,
};

export const ticketReducer = (
  state = initialState,
  action: TicketAction
): TicketState => {
  switch (action.type) {
    case TicketsActionTypes.FETCH_TICKETS:
      return { ...state, tickets: [], loading: true, error: false };
    case TicketsActionTypes.FETCH_TICKETS_SUCCESS:
      return {
        ...state,
        tickets: action.payload,
        loading: false,
        error: false,
      };
    case TicketsActionTypes.FETCH_TICKETS_ERROR:
      return { ...state, tickets: [], loading: false, error: action.payload };
    default:
      return state;
  }
};

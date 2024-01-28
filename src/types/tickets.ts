export enum TicketsActionTypes {
  FETCH_TICKETS = 'FETCH_TICKETS',
  FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS',
  FETCH_TICKETS_ERROR = 'FETCH_TICKETS_ERROR',
}

export enum SortActionTypes {
  TRANSFER_SORT_SELECT = 'TRANSFER_SORT_SELECT',
  SPEED_DURATION_SORT_SELECT = 'SPEED_DURATION_SORT_SELECT',
  INCREASE_TOTAL_COUNT = 'INCREASE_TOTAL_COUNT',
}

export interface TicketState {
  tickets: Ticket[] | [];
  loading: boolean;
  error: string | boolean;
}

export interface SortState {
  transferSort: null | [] | number[];
  speedOrDurationSort: null | string;
  totalCount: number;
}

interface FetchTicketsAction {
  type: TicketsActionTypes.FETCH_TICKETS;
}

interface FetchTicketsSuccessAction {
  type: TicketsActionTypes.FETCH_TICKETS_SUCCESS;
  payload: Ticket[];
}

interface FetchTicketsErrorAction {
  type: TicketsActionTypes.FETCH_TICKETS_ERROR;
  payload: string;
}

interface TransferSortSelectAction {
  type: SortActionTypes.TRANSFER_SORT_SELECT;
  payload: [] | number[];
}

interface SpeedDurationSortSelectAction {
  type: SortActionTypes.SPEED_DURATION_SORT_SELECT;
  payload: string;
}

interface IncreaseTotalCountAction {
  type: SortActionTypes.INCREASE_TOTAL_COUNT;
  payload: number;
}

export type TicketAction =
  | FetchTicketsAction
  | FetchTicketsSuccessAction
  | FetchTicketsErrorAction;

export type SortAction =
  | TransferSortSelectAction
  | SpeedDurationSortSelectAction
  | IncreaseTotalCountAction;

export interface Ticket {
  // Цена в рублях
  price: number;
  // Код авиакомпании (iata)
  carrier: string;
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: [
    {
      // Код города (iata)
      origin: string;
      // Код города (iata)
      destination: string;
      // Дата и время вылета туда
      date: string;
      // Массив кодов (iata) городов с пересадками
      stops: string[];
      // Общее время перелёта в минутах
      duration: number;
    },
    {
      // Код города (iata)
      origin: string;
      // Код города (iata)
      destination: string;
      // Дата и время вылета обратно
      date: string;
      // Массив кодов (iata) городов с пересадками
      stops: string[];
      // Общее время перелёта в минутах
      duration: number;
    }
  ];
}

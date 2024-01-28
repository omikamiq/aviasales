import { SortAction, SortState, SortActionTypes } from '../../types/tickets';

const initialState: SortState = {
  transferSort: [],
  speedOrDurationSort: 'Самый дешевый',
  totalCount: 20,
};

export const sortReducer = (
  state = initialState,
  action: SortAction
): SortState => {
  switch (action.type) {
    case SortActionTypes.TRANSFER_SORT_SELECT:
      return { ...state, transferSort: action.payload };
    case SortActionTypes.SPEED_DURATION_SORT_SELECT:
      return { ...state, speedOrDurationSort: action.payload };
    case SortActionTypes.INCREASE_TOTAL_COUNT:
      return { ...state, totalCount: action.payload };

    default:
      return state;
  }
};

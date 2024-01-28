import { Dispatch } from 'redux';
import { SortAction, SortActionTypes } from '../../types/tickets';

export const transferSelect = (transferList) => {
  return async (dispatch: Dispatch<SortAction>) => {
    dispatch({
      type: SortActionTypes.TRANSFER_SORT_SELECT,
      payload: transferList,
    });
  };
};

export const durationOrSpeedSelect = (option) => {
  return async (dispatch: Dispatch<SortAction>) => {
    dispatch({
      type: SortActionTypes.SPEED_DURATION_SORT_SELECT,
      payload: option,
    });
  };
};

export const increaseTotalCount = (totalCount) => {
  return async (dispatch: Dispatch<SortAction>) => {
    dispatch({
      type: SortActionTypes.INCREASE_TOTAL_COUNT,
      payload: totalCount,
    });
  };
};

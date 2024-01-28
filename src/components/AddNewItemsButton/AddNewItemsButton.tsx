import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { increaseTotalCount } from '../../store/action-creators/sort';
import styles from './AddNewItemsButton.module.css';

export const AddNewItemsButton = () => {
  const [totalCount, setTotalCount] = useState(20);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(increaseTotalCount(totalCount));
  }, [totalCount]);

  const onClick = () => {
    const newTotalCount = totalCount + 5;
    setTotalCount(newTotalCount);
  };

  return (
    <Button
      className={styles.add_new_items_button}
      type='primary'
      onClick={onClick}
    >
      Показать еще 5 билетов!
    </Button>
  );
};

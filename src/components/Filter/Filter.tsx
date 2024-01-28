import React, { useState, useEffect } from 'react';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import { useDispatch } from 'react-redux';
import { transferSelect } from '../../store/action-creators/sort';

import styles from './Filter.module.css';

const CheckboxGroup = Checkbox.Group;
const plainOptions = [
  { label: 'Без пересадок', value: 0 },
  { label: '1 пересадка', value: 1 },
  { label: '2 пересадки', value: 2 },
  { label: '3 пересадки', value: 3 },
];
const defaultCheckedList = [];

export const Filter: React.FC = () => {
  const [checkedList, setCheckedList] =
    useState<CheckboxValueType[]>(defaultCheckedList);

  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < plainOptions.length;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transferSelect(checkedList));
  }, [checkedList]);

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? [0, 1, 2, 3] : []);
  };

  return (
    <div className={styles.filter}>
      <p className={styles.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
        className={styles.label}
      >
        Все
      </Checkbox>
      <CheckboxGroup
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
        className={styles.label_group}
      />
    </div>
  );
};

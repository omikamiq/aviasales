import React, { useState, useEffect } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import { useDispatch } from 'react-redux';
import { durationOrSpeedSelect } from '../../store/action-creators/sort';
import styles from './Tabs.module.css';

const Tabs = () => {
  const [value, setValue] = useState('Самый дешевый');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(durationOrSpeedSelect(value));
  }, [value]);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <Radio.Group
      options={[
        { label: 'Самый дешевый', value: 'Самый дешевый' },
        { label: 'Самый быстрый', value: 'Самый быстрый' },
      ]}
      onChange={onChange}
      optionType='button'
      buttonStyle='solid'
      size='large'
      className={styles.tabs}
    />
  );
};

export default Tabs;

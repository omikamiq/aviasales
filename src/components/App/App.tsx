import React from 'react';
import Tabs from '../Tabs/Tabs';
import { ItemList } from '../ItemList/ItemList';
import { Filter } from '../Filter/Filter';
import { AddNewItemsButton } from '../AddNewItemsButton/AddNewItemsButton';
import logo from '../../assets/Logo.svg';

import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.app}>
      <img className={styles.logo} src={logo} />
      <div className={styles.body_wrapper}>
        <div className={styles.filter_wrapper}>
          <Filter />
        </div>
        <div className={styles.item_list_wrapper}>
          <Tabs />
          <ItemList />
          <AddNewItemsButton />
        </div>
      </div>
    </div>
  );
};

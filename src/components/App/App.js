import React from 'react'
import ProductList from '../ProductList/ProductList'

import styles from './App.module.scss'

const App = () => {
  return (
    <>
      <h1 className="visually-hidden">FUNBOX Тестовое задание</h1>
      <section className={styles.sectionProducts}>
        <p className={styles.title}>Ты сегодня <br className={styles.tableBr} /> покормил кота?</p>
        <ProductList />
      </section>
    </>
  )
}

export default App

import React from 'react'
import Product from '../Product/Product'

import styles from './ProductList.module.scss'

const ProductList = () => {
  return (
    <div className={styles.products}>
      <Product
        initialStatus="default"
        type="С фуа-гра"
        benefits={['10 порций', 'мышь в подарок']}
        weight="0,5"
        description={[
          'Печень утки разварная с артишоками.',
          'Печалька, с фуа-гра закончился.'
        ]}
      />
      <Product
        initialStatus="active"
        type="C рыбой"
        benefits={['40 порций', '2 мыши в подарок']}
        weight="2"
        description={[
          'Головы щучьи с чесноком да свежайшая сёмгушка.',
          'Печалька, с рыбой закончился.'
        ]}
      />
      <Product
        initialStatus="disabled"
        type="C курой"
        benefits={['100 порций', '5 мышей в подарок', 'заказчик доволен']}
        weight="5"
        description={[
          'Филе из цыплят с трюфелями в бульоне.',
          'Печалька, с курой закончился.'
        ]}
      />
    </div>
  )
}

export default ProductList

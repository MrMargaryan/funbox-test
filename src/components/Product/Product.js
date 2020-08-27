import React, { useState } from 'react'
import classNames from 'classnames'

import styles from './Product.module.scss'

const Product = ({ initialStatus, type, benefits, weight, description }) => {
  const [status, setStatus] = useState(initialStatus)
  const [isHover, setIsHover] = useState(false)

  const renderBackgroundColor = (ending) => {
    return classNames(
      styles[ending],
      status === 'default' && styles.default,
      status === 'default' && isHover && styles.defaultHover,
      status === 'active' && styles.active,
      status === 'active' && isHover && styles.activeHover,
      status === 'disabled' && styles.disabled
    )
  }

  const renderTextStyles = (ending) => {
    return classNames(
      styles[ending],
      ending === 'subtitle' && status == 'active' && isHover && styles.subtitleActive,
      status === 'disabled' && styles.disabledContent
    )
  }

  const onProductClick = () => {
    setIsHover(false)
    if (status === 'default') {
      setStatus('active')
    } else {
      setStatus('default')
    }
  }

  const onProductMouseLeave = () => {
    setIsHover(false)
  }

  const onProductMouseEnter = () => {
    setIsHover(true)
  }

  const onBuyTextClick = () => {
    setStatus('active')
  }

  return (
    <div className={styles.productWrapper}>
      <div
        className={renderBackgroundColor('productBorder')}
        onClick={onProductClick}
        onMouseLeave={onProductMouseLeave}
        onMouseEnter={onProductMouseEnter}
      >
        <div className={classNames(styles.productContent, status === 'disabled' && styles.productContentDisabled)}>
          <p className={renderTextStyles('subtitle')}>
            {
              status === 'active' && isHover
                ? 'Котэ не одобряет?'
                : 'Сказочное заморское яство'
            }
          </p>
          <h2 className={renderTextStyles('title')}>
            Нямушка <br /> <span className={styles.type}>{type}</span>
          </h2>
          <ul className={renderTextStyles('benefits')}>
            {
              benefits.map((benefit, index) => {
                const number = parseInt(benefit) || ''
                const restPart = benefit.split(parseInt(benefit))

                return (
                  <li
                    key={benefit + index}
                    className={styles.benefitsItem}
                  >
                    {
                      number
                        ? <><span className={styles.benefitQty}>{number}</span>{restPart}</>
                        : benefit
                    }
                  </li>
                )
              })
            }
          </ul>
          <div className={renderBackgroundColor('weightWrapper')}>
            <span className={styles.weight}>{weight}</span>
            <span className={styles.kilogram}>Кг</span>
          </div>
        </div>
      </div>
      <p className={classNames(styles.action, status === 'disabled' && styles.actionDisabled)}>
        {status === 'default' && <>Чего сидишь? Порадуй котэ, <span className={styles.buyText} onClick={onBuyTextClick}>купи.</span></>}
        {status === 'active' && description[0]}
        {status === 'disabled' && description[1]}
      </p>
    </div>
  )
}

export default Product

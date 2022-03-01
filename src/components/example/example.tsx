import React from 'react'
import styles from './example.module.scss';

type ExampleProps = {

}

const Example: React.FC<ExampleProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.linkCard_1}>
        <span><p>🍕</p> ASD</span>
        <a>open in github</a>
      </div>
      <div className={styles.linkCard_2}>
        <span><p>🍕</p> ASD</span>
        <a>open in github</a>
      </div>
      <div className={styles.linkCard_3}>
        <span><p>🍕</p> ASD</span>
        <a>open in github</a>
      </div>
    </div>
  )
}

export default Example

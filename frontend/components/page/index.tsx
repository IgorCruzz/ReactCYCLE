import React from 'react'

import styles from './styles.module.scss'

const Page: React.FC = ({ children }: { children?: React.ReactNode}) => {
  return (
    <div id={styles.pageContainer}>
      <div id={styles.pageContent}>
        {children}
      </div>
    </div>
  )
}

export default Page

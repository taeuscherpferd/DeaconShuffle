import React, { useState } from 'react'
import styles from './Home.module.scss'

type IProps = {}

const Home: React.FC<IProps> = (props) => {
  const [peopleToPair, setPeopleToPair] = useState<string>()
  const [peopleToAssign, setPeopleToAssign] = useState<string>()
  const [results, setResults] = useState<string>()


  return (
    <div className={styles.Home}>
      <div className={styles.textContainer}>
        <div>
          <textarea value={peopleToPair} onChange={(x) => setPeopleToPair(x.target.value)} className={styles.textArea}></textarea>
        </div>
        <div>
          <textarea value={peopleToAssign} onChange={(x) => setPeopleToAssign(x.target.value)} className={styles.textArea}></textarea>
        </div>
        <div>
          <textarea value={results} onChange={(x) => setResults(x.target.value)} className={styles.textArea}></textarea>
        </div>
      </div>
    </div>
  )
}

export default Home

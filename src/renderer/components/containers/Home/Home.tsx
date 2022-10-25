import React, { useState } from 'react'
import { HomeLogic } from 'src/renderer/components/containers/Home/Home.logic'
import styles from './Home.module.scss'

type IProps = {}

const Home: React.FC<IProps> = (props) => {
  const [peopleToPair, setPeopleToPair] = useState<string>()
  const [peopleToAssign, setPeopleToAssign] = useState<string>()
  const [results, setResults] = useState<string>()

  const onGenerateClick = () => {
    const pairArray = peopleToPair.split("\n")
    const assignArray = peopleToAssign.split("\n")
    const res = HomeLogic.generateMinisteringAssignments(pairArray, assignArray)
    setResults(res.reduce((p, x, i) => {
      let ministerTitle = x.ministers.reduce((pr, j, i) => {
        pr += j + " / "
        return pr
      }, "")
      ministerTitle = ministerTitle.slice(0, -3) + "\n"
      let ministereesList = x.ministerees.reduce((pr, j, i) => {
        pr += "    " + j + '\n'
        return pr
      }, "")
      p += ministerTitle + ministereesList + "\n"
      return p
    }, ""))
  }

  return (
    <div className={styles.Home}>
      <div className={styles.textContainer}>
        <div className={styles.poolContainer}>
          <span className={styles.title}>{"Minister Pool"}</span>
          <textarea value={peopleToPair} onChange={(x) => setPeopleToPair(x.target.value)} className={styles.textArea}></textarea>
        </div>
        <div className={styles.poolContainer}>
          <span className={styles.title}>{"Ministeree Pool"}</span>
          <textarea value={peopleToAssign} onChange={(x) => setPeopleToAssign(x.target.value)} className={styles.textArea}></textarea>
        </div>
        <div className={styles.poolContainer}>
          <span className={styles.title}>{"Results"}</span>
          <textarea value={results} onChange={(x) => setResults(x.target.value)} className={styles.textArea}></textarea>
        </div>
      </div>
      <button className={styles.generateButton} onClick={onGenerateClick}>{"Generate"}</button>
    </div>
  )
}

export default Home

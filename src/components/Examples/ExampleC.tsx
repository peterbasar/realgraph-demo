'use client'
import { useEffect, useState } from 'react'
import styles from '@/components/main.module.css'
import RealGraph from '@/components/RealGraphWindow'

export default function ExampleC() {
  const [points, setPoints] = useState([
    { x: Date.now() - 1000, y: 10 },
    { x: Date.now() - 700, y: 30 },
    { x: Date.now() - 400, y: 20 },
    { x: Date.now() - 200, y: 80 },
  ])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPoints([
        ...points,
        {
          x: Date.now(),
          y: 100 * Math.random(),
        },
      ])
    }, 500)
    return () => {
      clearInterval(intervalId)
    }
  })

  return (
    <section className={styles['section-extra']}>
      <div className={styles['graph-example']}>
        <h3 className={styles['section-extra-title']}>Example C: Using own list of points</h3>
        <div className={styles['graph-example-content']}>
          <div className={styles['graph-example-code-wrapper']}>
            <div className={styles['graph-example-code']}>
              {`import { useEffect, useState } from 'react''`}
              <br />
              {`import Graph from 'realgraph'`}
              <br />
              <br />
              {`function Example() {`}
              <br />
              {`  // Default points`}
              <br />
              {`  const [points, setPoints] = useState([`}
              <br />
              {`    { x: Date.now() - 1200, y: 10 },`}
              <br />
              {`    { x: Date.now() - 700, y: 30 },`}
              <br />
              {`    { x: Date.now() - 300, y: 80 },`}
              <br />
              {`  ])`}
              <br />
              <br />
              {`  // Adding new points in intervals`}
              <br />
              {`  useEffect(() => {`}
              <br />
              {`    const intervalId = setInterval(() => {`}
              <br />
              {`      setPoints([`}
              <br />
              {`        ...points,`}
              <br />
              {`        {`}
              <br />
              {`          x: Date.now(),`}
              <br />
              {`          y: 100 * Math.random(),`}
              <br />
              {`        },`}
              <br />
              {`      ])`}
              <br />
              {`    }, 500)`}
              <br />
              {`    return () => {`}
              <br />
              {`      clearInterval(intervalId)`}
              <br />
              {`    }`}
              <br />
              {`  })`}
              <br />
              <br />
              {`  return (`}
              <br />
              {`    <RealGraph`}
              <br />
              {`      points={points} // Provide points to Graph`}
              <br />
              {`      isCallback={false} // Do not call callbacking function`}
              <br />
              {`      isGraphMoving={true} // Graph moves in realtime`}
              <br />
              {`      max={110} // Maximum value in a graph`}
              <br />
              {`      min={-10} // Minumum value in a graph`}
              <br />
              {`    />`}
              <br />
              {`  )`}
              <br />
              {'}'}
            </div>
          </div>

          <div className={styles['graph-example-graph']}>
            <RealGraph
              points={points}
              isCallback={false}
              isGraphMoving={true}
              max={110}
              min={-10}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

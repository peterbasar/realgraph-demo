'use client'
import { useEffect, useRef, ForwardedRef } from 'react'
import styles from '@/components/main.module.css'
import RealGraph from '@/components/RealGraphWindow'
import { graphExportRefI } from 'realgraph'

export default function ExampleD() {
  const ref: ForwardedRef<graphExportRefI | null> = useRef(null)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (ref && ref.current) {
        ref.current.addPoint(100 * Math.random())
      }
    }, 500)
    return () => {
      clearInterval(intervalId)
    }
  })

  return (
    <section className={`${styles['section-extra']} ${styles['section-bg-dark']}`}>
      <div className={styles['graph-example']}>
        <h3 className={styles['section-extra-title']}>
          Example D: Adding points to internal Graph list of points
        </h3>
        <div className={styles['graph-example-content']}>
          <div className={styles['graph-example-code-wrapper']}>
            <div className={styles['graph-example-code']}>
              {`import { useEffect, useRef, ForwardedRef } from 'react'`}
              <br />
              {`import Graph from 'realgraph'`}
              <br />
              <br />
              {`function Example() {`}
              <br />
              {`  // Define ref`}
              <br />
              {`  const ref: ForwardedRef<graphExportRefI | null> = useRef(null)`}
              <br />
              <br />
              {`  // Adding new points in intervals`}
              <br />
              {`  useEffect(() => {`}
              <br />
              {`    const intervalId = setInterval(() => {`}
              <br />
              {`      if (ref && ref.current) {`}
              <br />
              {`        ref.current.addPoint(100 * Math.random())`}
              <br />
              {`      }`}
              <br />
              {`    }, 500)`}
              <br />
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
              {`      ref={ref} // Pass your ref and get access to additional functions`}
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
            <RealGraph ref={ref} isCallback={false} isGraphMoving={true} max={110} min={-10} />
          </div>
        </div>
      </div>
    </section>
  )
}

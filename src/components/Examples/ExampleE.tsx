'use client'
import { useEffect, useRef, ForwardedRef } from 'react'
import styles from '@/components/main.module.css'
import RealGraph from '@/components/RealGraphWindow'
import { graphExportRefI } from 'realgraph'

export default function ExampleE() {
  const ref: ForwardedRef<graphExportRefI | null> = useRef(null)

  return (
    <section className={`${styles['section-extra']}`}>
      <div className={styles['graph-example']}>
        <h3 className={styles['section-extra-title']}>Example E: Export options</h3>
        <div className={styles['graph-example-content']}>
          <div className={styles['graph-example-code-wrapper']}>
            <div className={styles['graph-example-code']}>
              {`import { useRef, ForwardedRef } from 'react'`}
              <br />
              {`import Graph from 'realgraph'`}
              <br />
              <br />
              {'function Example() {'}
              <br />
              {`  const ref: ForwardedRef<graphExportRefI | null> = useRef(null)`}
              <br />
              <br />
              {'  return ('}
              <br />
              {'    <>'}
              <br />
              {'      <Graph'}
              <br />
              {'        ref={ref}'}
              <br />
              {'        width={width} // Manually set graph width'}
              <br />
              {'        height={height} // Manually set graph height'}
              <br />
              {'      />'}
              <br />
              <br />
              {`      <button`}
              <br />
              {`        onClick={() => {`}
              <br />
              {`          if (ref && ref.current) console.log('points', ref.current.getPoints())`}
              <br />
              {`        }}`}
              <br />
              {`      >`}
              <br />
              {`        Log points`}
              <br />
              {`      </button>`}
              <br />
              <br />
              {`      <button`}
              <br />
              {`        onClick={() => {`}
              <br />
              {`          if (ref && ref.current) ref.current.downloadCsv()`}
              <br />
              {`        }}`}
              <br />
              {`      >`}
              <br />
              {`        Download CSV`}
              <br />
              {`      </button>`}
              <br />
              <br />
              {`      <button`}
              <br />
              {`        onClick={() => {`}
              <br />
              {`          if (ref && ref.current) ref.current.downloadSvg()`}
              <br />
              {`        }}`}
              <br />
              {`      >`}
              <br />
              {`        Visible graph SVG`}
              <br />
              {`      </button>`}
              <br />
              <br />
              {`      <button`}
              <br />
              {`        onClick={() => {`}
              <br />
              {`          if (ref && ref.current) ref.current.downloadSvgFull()`}
              <br />
              {`        }}`}
              <br />
              {`      >`}
              <br />
              {`        Full graph SVG`}
              <br />
              {`      </button>`}
              <br />
              {'    </>'}
              <br />
              {'  )'}
              <br />
              {'}'}
            </div>
          </div>

          <div className={styles['graph-example-graph']}>
            <RealGraph ref={ref} />
          </div>
        </div>
        <div className={styles['graph-example-buttons']}>
          <button
            className={styles['graph-button']}
            onClick={() => {
              if (ref && ref.current) console.log('points', ref.current.getPoints())
            }}
          >
            Log points
          </button>
          <button
            className={styles['graph-button']}
            onClick={() => {
              if (ref && ref.current) ref.current.downloadCsv()
            }}
          >
            Download CSV
          </button>
          <button
            className={styles['graph-button']}
            onClick={() => {
              if (ref && ref.current) ref.current.downloadSvg()
            }}
          >
            Visible graph SVG
          </button>
          <button
            className={styles['graph-button']}
            onClick={() => {
              if (ref && ref.current) ref.current.downloadSvgFull()
            }}
          >
            Full graph SVG
          </button>
        </div>
      </div>
    </section>
  )
}

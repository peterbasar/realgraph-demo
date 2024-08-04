'use client'
import styles from './main.module.css'
import RealGraph from '@/components/RealGraphWindow'
import Link from 'next/link'

export default function ExampleB() {
  return (
    <section className={styles['section-extra']}>
      <div className={styles['graph-example']}>
        <h3 className={styles['section-extra-title']}>Example B: Sine function</h3>
        <div className={styles['graph-example-content']}>
          <div className={styles['graph-example-code-wrapper']}>
            <code className={styles['graph-example-code']}>
              {`import Graph from 'realgraph'`}
              <br />
              <br />
              {'function Example() {'}
              <br />
              {'  return ('}
              <br />
              {'    <Graph'}
              <br />
              {'      getValueCallback={() => {'}
              <br />
              {`        return Math.sin(Date.now() / 1000)`}
              <br />
              {'      }}'}
              <br />
              {'      max={1.1} // Maximum value in a graph'}
              <br />
              {'      min={-1.1} // Minimum value in a graph'}
              <br />
              {'      count={50} // Number of points in a graph at a time'}
              <br />
              {'      interval={100} // Delay between callbacks in milliseconds'}
              <br />
              {'      interval={100} // Delay between callbacks in milliseconds'}
              <br />
              {'      axisXSectionCount={1} // Number of sections on X axis'}
              <br />
              {'      axisYSectionCount={6} // Number of sections on Y axis'}
              <br />
              {'      width={width} // Manually set graph width'}
              <br />
              {'      height={height} // Manually set graph height'}
              <br />
              {'    />'}
              <br />
              {'  )'}
              <br />
              {'}'}
            </code>
          </div>

          <div className={styles['graph-example-graph']}>
            <RealGraph
              getValueCallback={() => {
                return Math.sin(Date.now() / 1000)
              }}
              max={1.1}
              min={-1.1}
              count={50}
              interval={100}
              axisYSectionCount={6}
              axisXSectionCount={1}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

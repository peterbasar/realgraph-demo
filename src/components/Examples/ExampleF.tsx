'use client'
import { useEffect, useRef, ForwardedRef } from 'react'
import styles from '@/components/main.module.css'
import RealGraph from '@/components/RealGraphWindow'
import { styleB } from '../Styles'

export default function ExampleF() {
  return (
    <section className={`${styles['section-extra']}`}>
      <div className={styles['graph-example']}>
        <h3 className={styles['section-extra-title']}>Example E: Custom style</h3>
        <div className={styles['graph-example-content']}>
          <div className={styles['graph-example-code-wrapper']}>
            <div className={styles['graph-example-code']}>
              {`import Graph from 'realgraph'`}
              <br />
              <br />
              {`const style = {`}
              <br />
              {`  graphOuterContainer: {`}
              <br />
              {`    background: 'linear-gradient(0deg, rgba(9,32,74,1) 0%, rgba(20,66,147,1) 100%)',`}
              <br />
              {`  },`}
              <br />
              {`  cursorCircle: {`}
              <br />
              {`    fill: 'white',`}
              <br />
              {`  },`}
              <br />
              {`  cursorLineVertical: {`}
              <br />
              {`    stroke: 'white',`}
              <br />
              {`    strokeDasharray: '1,10',`}
              <br />
              {`  },`}
              <br />
              {`  cursorLineHorizontal: {`}
              <br />
              {`    stroke: 'white',`}
              <br />
              {`    strokeDasharray: '1,10',`}
              <br />
              {`  },`}
              <br />
              {`  cursorLineHorizontalText: {`}
              <br />
              {`    fontWeight: '200',`}
              <br />
              {`    style: {`}
              <br />
              {`      fill: 'white',`}
              <br />
              {`    },`}
              <br />
              {`  },`}
              <br />
              {`  cursorLineVerticalText: {`}
              <br />
              {`    fontWeight: '200',`}
              <br />
              {`    style: {`}
              <br />
              {`      fill: 'white',`}
              <br />
              {`    },`}
              <br />
              {`  },`}
              <br />
              {`  axisXTitle: {`}
              <br />
              {`    color: 'white',`}
              <br />
              {`    fontWeight: '200',`}
              <br />
              {`  },`}
              <br />
              {`  axisXText: {`}
              <br />
              {`    color: 'white',`}
              <br />
              {`    fontWeight: '200',`}
              <br />
              {`  },`}
              <br />
              {`  axisYTitle: {`}
              <br />
              {`    color: 'white',`}
              <br />
              {`    fontWeight: '200',`}
              <br />
              {`  },`}
              <br />
              {`  axisYText: {`}
              <br />
              {`    color: 'white',`}
              <br />
              {`    fontWeight: '200',`}
              <br />
              {`  },`}
              <br />
              {`  axisXSvg: {`}
              <br />
              {`    fill: 'white',`}
              <br />
              {`  },`}
              <br />
              {`  axisYSvg: {`}
              <br />
              {`    fill: 'white',`}
              <br />
              {`  },`}
              <br />
              {`  axisXLine: {`}
              <br />
              {`    stroke: 'white',`}
              <br />
              {`  },`}
              <br />
              {`  axisYLine: {`}
              <br />
              {`    stroke: 'white',`}
              <br />
              {`  },`}
              <br />
              {`  graphPath: {`}
              <br />
              {`    stroke: 'white',`}
              <br />
              {`    strokeWidth: '1',`}
              <br />
              {`  },`}
              <br />
              {`},`}
              <br />
              <br />
              {'function Example() {'}
              <br />
              {'  return ('}
              <br />
              {'    <Graph'}
              <br />
              {'      width={width} // Manually set graph width'}
              <br />
              {'      height={height} // Manually set graph height'}
              <br />
              {'      style={style} // Custom style'}
              <br />
              {'    />'}
              <br />
              {'  )'}
              <br />
              {'}'}
            </div>
          </div>

          <div className={styles['graph-example-graph']}>
            <RealGraph style={styleB} />
          </div>
        </div>
      </div>
    </section>
  )
}

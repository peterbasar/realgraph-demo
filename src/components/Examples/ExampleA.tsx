'use client'
import styles from '@/components/main.module.css'
import RealGraph from '@/components/RealGraphWindow'
import Link from 'next/link'

export default function ExampleA() {
  return (
    <section className={styles['section-intro']}>
      <header className={styles['section-intro-header']}>
        <h1 className={styles['section-intro-package-name']}>realgraph</h1>

        <h4 className={styles['section-intro-package-description']}>
          real time graph data visualization library for React
        </h4>
      </header>

      <div className={styles['section-intro-example']}>
        <a
          href="https://www.npmjs.com/package/realgraph"
          target="_blank"
          className={styles['section-intro-package-install-wrapper']}
        >
          <code className={styles['section-intro-package-install']}>npm install realgraph</code>
        </a>

        <div className={styles['graph-example']}>
          <h3 className={styles['section-extra-title']}>Example A: Basic</h3>
          <div className={styles['graph-example-content']}>
            <div className={styles['graph-example-code-wrapper']}>
              <div className={styles['graph-example-code']}>
                {`import Graph from 'realgraph'`}
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
                {'    />'}
                <br />
                {'  )'}
                <br />
                {'}'}
              </div>
            </div>

            <div className={styles['graph-example-graph']}>
              <RealGraph />
            </div>
          </div>
        </div>
      </div>

      <code className={styles['github-link']}>
        <Link href="https://github.com/peterbasar/realgraph">{'<code />'}</Link>
      </code>
    </section>
  )
}

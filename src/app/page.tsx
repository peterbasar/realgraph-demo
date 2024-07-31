import styles from "./page.module.css";
import RealGraph from "@/components/RealGraph";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className={styles['section-intro']}>
        <header className={styles['header']}>
          <h1 className={styles['package-name']}>
            realgraph
          </h1>

          <h4 className={styles['package-description']}>
            real time graph data visualization library for React
          </h4>
        </header>

        <div className={styles['section-intro-example']}>
          <div className={styles['package-install-wrapper']}>
            <code className={styles['package-install']}>
              npm install realgraph
            </code>
          </div>

          <div className={styles['graph-example-container']}>
            <div className={styles['graph-example-code-wrapper']}>
              <code className={styles['graph-example-code']}>
                {`import Graph from 'realgraph'`}<br/>
                <br/>
                {'function Example() {'}<br/>
                {'    return <Graph/>'}<br/>
                {'}'}
              </code>
            </div>

            <div className={styles['graph-example-graph']}>
              <RealGraph />
            </div>
          </div>
        </div>

        <code className={styles['github-link']}>
          <Link href="https://github.com/peterbasar/realgraph">{'<code />'}</Link>
        </code>

      </section>
    </main>
  );
}

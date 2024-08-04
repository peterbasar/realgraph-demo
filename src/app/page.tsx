import styles from './page.module.css'
import RealGraph from '@/components/RealGraphWindow'
import ExampleA from '@/components/ExampleA'
import ExampleB from '@/components/ExampleB'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <ExampleA />
      <ExampleB />
    </main>
  )
}

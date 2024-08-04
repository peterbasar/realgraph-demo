'use client'
import { useEffect, useState } from 'react'
import Graph, { GraphI } from 'realgraph'
import dynamic from 'next/dynamic'

function RealGraphWindow(params: GraphI) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const updateWidth = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  })

  if (windowWidth > 600) {
    return <Graph {...params} width={300} height={300} />
  } else {
    return <Graph {...params} width={180} height={300} />
  }
}

export default dynamic(() => Promise.resolve(RealGraphWindow), {
  ssr: false,
})

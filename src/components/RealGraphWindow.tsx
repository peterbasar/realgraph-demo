'use client'
import { ForwardedRef, useEffect, useState, forwardRef, RefObject } from 'react'
import Graph, { graphExportRefI, GraphI } from 'realgraph'

function RealGraphWindow({ ...params }: GraphI, ref: ForwardedRef<graphExportRefI>) {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1366,
  )

  const updateWidth = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  })

  if (windowWidth > 800) {
    return <Graph ref={ref} {...params} width={300} height={300} />
  } else {
    return <Graph ref={ref} {...params} width={180} height={300} />
  }
}

export default forwardRef(RealGraphWindow)

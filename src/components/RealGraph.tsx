"use client"
import { useEffect, useState } from "react";
import Graph from "realgraph";
import dynamic from 'next/dynamic'

function RealGraph() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  if (windowWidth > 500) {
    return <Graph />
  } else {
    return <Graph width={180} />
  }
}

export default dynamic(() => Promise.resolve(RealGraph), {
  ssr: false
})
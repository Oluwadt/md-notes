"use client"
import { useState } from "react"
import Editor from "../components/Editor"
import MDX from "../components/MDX"
import SideNav from "../components/SideNav"

const Notes = () => {
  const [isViewer, setIsViewer] = useState(true)
  const [text, setText] = useState('')

  function handleToggleViewer() {
    setIsViewer(!isViewer)
  }

  return (
    <main id="notes">
        <SideNav />
        {!isViewer && <Editor isViewer={isViewer} handleToggleViewer={handleToggleViewer} 
        text={text} setText={setText} />}
        {isViewer && <MDX isViewer={isViewer} handleToggleViewer={handleToggleViewer} 
        text={text} />}
    </main>
  )
}

export default Notes
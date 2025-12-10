import Editor from "../components/Editor"
import MDX from "../components/MDX"
import SideNav from "../components/SideNav"

const Notes = () => {
  const isViewer = true

  return (
    <main id="notes">
      <SideNav />
      {!isViewer && <Editor isViewer={isViewer} />}
      {isViewer && <MDX isViewer={isViewer} />}
    </main>
  )
}

export default Notes
import TopNav from "./TopNav"

const Editor = (props) => {

  return (
    <section className="notes-container">
      <TopNav {...props} />
      <textarea placeholder="In the beginning was the Word..." />
    </section>
  )
}

export default Editor
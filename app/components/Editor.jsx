import TopNav from "./TopNav"

const Editor = (props) => {
    const { text, setText } = props
    return (
        <section className="notes-container">
        <TopNav {...props} />
        <textarea value={text} onChange={(e) => {setText(e.target.value)}} 
        placeholder="In the beginning was the Word..." />
        </section>
    )
}

export default Editor
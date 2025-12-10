import Markdown from "markdown-to-jsx"
import TopNav from "./TopNav"

const MDX = (props) => {
    const {text} = props
    const md = 
    `# Header 1
## Header 2

Hello World
[click me!](https://www.google.com)
    `
  return (
    <section className="mdx-container">
      <TopNav {...props} />
      <article>
        <Markdown>{text.trim()}</Markdown>
      </article>
    </section>
  )
}

export default MDX
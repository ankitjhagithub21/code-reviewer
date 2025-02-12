import prism from "prismjs"
import { useEffect, useState } from "react"
import "prismjs/themes/prism-tomorrow.css"
import 'prismjs/components/prism-clike';
import Editor from 'react-simple-code-editor';
import Markdown from 'react-markdown';
import axios from "axios"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

const App = () => {

  const [code, setCode] = useState(` function sum(){
      return a+b
  }
  `)

  const [review,setReview] = useState('')
 
  useEffect(() => {
    prism.highlightAll()
  }, [])

  async function reviewCode(){
     const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}`,{prompt:code});
     setReview(res.data)
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              
            />
          </div>
          <div className="review" onClick={reviewCode}>
            Review
          </div>
        </div>
        <div className="right">
          <Markdown  rehypePlugins={[ rehypeHighlight ]}>
          {review}
          </Markdown>
        </div>
      </main>
    </>
  )
}

export default App
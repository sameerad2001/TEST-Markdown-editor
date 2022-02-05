import React, { useState } from "react"
import ReactMarkdown from "react-markdown";

function MarkdownEditor() {

    const sampleText =
        `## C++ :
\`\`\`c++
    #incldue < iostream >
    using namespace std;
    int main()
    {
        cout << "Hello world!";
    }
\`\`\`
---
## Plants : 
> They are necessary for survival -- probably someone
> - Plant : ![](https://images.unsplash.com/photo-1564578616487-9f49345e927d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=370&q=80) 
    
---`;

    const [markdownText, setMarkdownText] = useState(sampleText);

    return <div id="container" >

        <textarea
            id="editor"
            value={markdownText}
            onChange={(e) => {
                setMarkdownText(e.target.value)
            }}
        />

        <div id="output">

            <ReactMarkdown children={markdownText} />

        </div>

    </div>

}

export default MarkdownEditor
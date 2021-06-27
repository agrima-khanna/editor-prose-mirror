import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { MenuBar } from "./MenuBar";
import { extensions } from "./extensions";

function App() {
  const editor = useEditor({
    extensions: extensions,
    content: `
      <h2>
        Hi there,
      </h2>
      <p>
        this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
      </p>
      <ul>
        <li>
          That’s a bullet list with one …
        </li>
        <li>
          … or two list items.
        </li>
      </ul>
      <p>
        Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
      </p>
      <pre><code class="language-css">body {
  display: none;
}</code></pre>
      <p>
        I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
      </p>
      <blockquote>
        Wow, that’s amazing. Good work, boy! 👏
        <br />
        — Mom
      </blockquote>
    `,
    //add className for textArea of the editor
    editorProps: {
      attributes: {
        class: "editorTextArea",
      },
    },
    
    //force the cursor to jump in the editor on initialization.
    autofocus: true,
    // disable the CSS injected by titap
    injectCSS: false,
  });

  return (
    <div className="App">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}

export default App;

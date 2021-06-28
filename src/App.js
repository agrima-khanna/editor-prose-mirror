import React from "react";
import { Editor } from "@tiptap/core";
import { EditorContent } from "@tiptap/react";
import { MenuBar } from "./MenuBar";
import { extensions } from "./extensions";
import { plugins } from "./plugins/plugins";

function App() {
  const editor = new Editor({
    extensions: extensions,
    content: `
      <p>
      Markdown shortcuts make it easy to format the text while typing.
    </p>
    <p>
      To test that, start a new line and type <code>#</code> followed by a space to get a heading. Try <code>#</code>, <code>##</code>, <code>###</code>, <code>####</code>, <code>#####</code>, <code>######</code> for different levels.
    </p>
    <p>
      Those conventions are called input rules in tiptap. Some of them are enabled by default. Try <code>></code> for blockquotes, <code>*</code>, <code>-</code> or <code>+</code> for bullet lists, or <code>\`foobar\`</code> to highlight code, <code>~~tildes~~</code> to strike text, or <code>==equal signs==</code> to highlight text.
    </p>
    <p>
      You can overwrite existing input rules or add your own to nodes, marks and extensions.
    </p>
    <p>
      For example, we added the <code>Typography</code> extension here. Try typing <code>(c)</code> to see how it’s converted to a proper © character. You can also try <code>-></code>, <code>>></code>, <code>1/2</code>, <code>!=</code>, or <code>--</code>.
    </p>
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
  editor.registerPlugin(plugins[0]);
  console.log(editor.state);
  return (
    <div className="App">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}

export default App;

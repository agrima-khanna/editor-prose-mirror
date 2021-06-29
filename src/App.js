import React, { useEffect } from "react";
import { Editor } from "@tiptap/core";
import {
  EditorContent,
  BubbleMenu,
  FloatingMenu,
  useEditor,
} from "@tiptap/react";
import { MenuBar } from "./menuBars/MenuBar";
import { extensions } from "./extensions";
import { plugins } from "./plugins/plugins";
import { content } from "./content";
import { BubbleMenuBar } from "./menuBars/BubbleMenuBar";
import { FloatingMenuBar } from "./menuBars/FloatingMenuBar";

function App() {
  const editor = useEditor({
    extensions: extensions,
    content: content,
    // add className for textArea of the editor
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

  useEffect(() => {
    if (editor != null) editor.registerPlugin(plugins[0]);
  }, [editor, plugins]);

  return (
    <div className="App">
      {editor && (
        <BubbleMenu editor={editor}>
          <BubbleMenuBar editor={editor} />
        </BubbleMenu>
      )}
      {editor && (
        <FloatingMenu editor={editor}>
          <FloatingMenuBar editor={editor} />
        </FloatingMenu>
      )}
      <MenuBar editor={editor} />

      <EditorContent editor={editor} />
    </div>
  );
}

export default App;

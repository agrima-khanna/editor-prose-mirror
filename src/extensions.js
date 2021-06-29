// //Contains all the extensions used in the editor
// import StarterKit from "@tiptap/starter-kit";
// import Link from '@tiptap/extension-link'
// import Table from '@tiptap/extension-table'
// import TableRow from '@tiptap/extension-table-row'
// import TableCell from '@tiptap/extension-table-cell'
// import TableHeader from '@tiptap/extension-table-header'


// export var extensions = [StarterKit,Link,Table,TableRow,TableCell,TableHeader];


////////
import StarterKit from "@tiptap/starter-kit";
import Link from '@tiptap/extension-link'
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import Image from "@tiptap/extension-image";
import Collaboration from "@tiptap/extension-collaboration";
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import TextAlign from "@tiptap/extension-text-align"
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Text from '@tiptap/extension-text';
import TextStyle from '@tiptap/extension-text-style';
import FontFamily from '@tiptap/extension-font-family';
import Underline from '@tiptap/extension-underline'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'


// A new Y document
const ydoc = new Y.Doc();
// Registered with a WebRTC provider
const provider = new WebrtcProvider("example-document", ydoc);



export var extensions = [
  StarterKit,
  Link,
  Highlight,
  Typography,
  Table.configure({
    resizable: true,
  }),
  TableRow,
  TableHeader,
   TableCell,
  Image,
  TaskList,
  TaskItem,
  Text,
  TextStyle,
  FontFamily,
  Underline,
  Subscript,
  Superscript,
  TextAlign.configure({
    types: ['heading', 'paragraph'],
  }),
  Highlight.configure({ multicolor: true }),
  Collaboration.configure({
    document: ydoc,
  }),
  CollaborationCursor.configure({
    provider: provider,
    name: "Cyndi Lauper",
    color: "#f783ac",
  }),
];

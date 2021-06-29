//Contains all the extensions used in the editor
import StarterKit from "@tiptap/starter-kit";
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
import Mention from "@tiptap/extension-mention";
import { MentionList } from "./MentionList";
import tippy from "tippy.js";
import { ReactRenderer } from "@tiptap/react";
import { userNames } from "./userNames";

// A new Y document
const ydoc = new Y.Doc();
// Registered with a WebRTC provider
const provider = new WebrtcProvider("example-document", ydoc);

const CustomTableCell = TableCell.extend({
  addAttributes() {
    return {
      // extend the existing attributes …
      ...this.parent?.(),

      // and add a new one …
      backgroundColor: {
        default: null,
        parseHTML: (element) => {
          return {
            backgroundColor: element.getAttribute("data-background-color"),
          };
        },
        renderHTML: (attributes) => {
          return {
            "data-background-color": attributes.backgroundColor,
            style: `background-color: ${attributes.backgroundColor}`,
          };
        },
      },
    };
  },
});

export var extensions = [
  StarterKit,
  Highlight,
  Typography,
  Table.configure({
    resizable: true,
  }),
  TableRow,
  TableHeader,
  // Default TableCell
  // TableCell,
  // Custom TableCell with backgroundColor attribute
  CustomTableCell,
  Image,
  Collaboration.configure({
    document: ydoc,
  }),
  CollaborationCursor.configure({
    provider: provider,
    name: "Cyndi Lauper",
    color: "#f783ac",
  }),
  Mention.configure({
    HTMLAttributes: {
      class: "mention",
    },
    suggestion: {
      items: (query) => {
        return userNames
          .filter((item) => item.toLowerCase().startsWith(query.toLowerCase()))
          .slice(0, 5);
      },
      render: () => {
        let reactRenderer;
        let popup;

        return {
          onStart: (props) => {
            reactRenderer = new ReactRenderer(MentionList, {
              props,
              editor: props.editor,
            });

            popup = tippy("body", {
              getReferenceClientRect: props.clientRect,
              appendTo: () => document.body,
              content: reactRenderer.element,
              showOnCreate: true,
              interactive: true,
              trigger: "manual",
              placement: "bottom-start",
            });
          },
          onUpdate(props) {
            reactRenderer.updateProps(props);

            popup[0].setProps({
              getReferenceClientRect: props.clientRect,
            });
          },
          onKeyDown(props) {
            return reactRenderer.ref?.onKeyDown(props);
          },
          onExit() {
            popup[0].destroy();
            reactRenderer.destroy();
          },
        };
      },
    },
  }),
];

//Initialising  the menu bar

import React from "react";
import {Starter} from "./MenubarButtons/Starter"
import {Table} from "./MenubarButtons/tables"
import {Link} from "./MenubarButtons/links"
import {TextAlign} from "./MenubarButtons/textAlign"
import { TextHighlight } from "./MenubarButtons/textHighlight";
import {TaskItem} from './MenubarButtons/TaskItem';
import {FontFamily} from './MenubarButtons/FontFamily';
import {SubSuper} from './MenubarButtons/subSuper'

export var MenuBar = ({editor}) => {

  if (!editor) {
    return null;
  }
  return (
    <>
      <Starter editor={editor}/>
      <SubSuper editor={editor}/>
      <Link editor={editor}/>
      <Table editor={editor}/>
      <TextAlign editor={editor}/>
      <TextHighlight editor={editor}/>
      <TaskItem editor={editor}/>
      <FontFamily editor={editor}/>
    </>
  )
}

import { ITask } from "@/types/tasks";
import React from "react";

interface Props {
  task: ITask;
}

export default function Task({ task }: Props) {
  return (
    <tr key={task.id}>
      <td>{task.text}</td>
      <td>Blue</td>
    </tr>
  );
}

import { Workflow } from "@/types";
import TaskList from "./TaskList";

interface threadListProps {
    activeWorkflow: Workflow | undefined;
}

// ThreadList or Workflow
const ThreadList = (props: threadListProps) => {
    const threads = props.activeWorkflow?.threads;

    if (!threads){
        return (<>No threads</>);
    }

    return (
        <div className="grid grid-cols-3">
            <TaskList thread={threads[0]}/>
            <TaskList thread={threads[1]}/>
            <TaskList thread={threads[2]}/>
        </div>
    );
}

export default ThreadList;
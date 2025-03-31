import { Workflow } from "@/types"
import TaskPlayer from "./TaskPlayer"

interface workflowPlayerProps {
    selectedWorkflow: Workflow
}

const WorkflowPlayer = (props: workflowPlayerProps) => {
    const threads = props.selectedWorkflow?.threads;

    return (
        <div>
            <TaskPlayer thread={threads[0]} />
            <TaskPlayer thread={threads[1]} />
            <TaskPlayer thread={threads[2]} />
        </div>
    )
}

export default WorkflowPlayer
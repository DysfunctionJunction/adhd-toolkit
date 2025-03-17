import { Task as Task } from '@/types';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';

interface taskProps {
    task: Task
}

const TaskCard = (props: taskProps) => {
    return (
        <Card className="task">
            <CardTitle>{props.task.name}</CardTitle>
            {props.task.description && <CardDescription>{props.task.description}</CardDescription>}
        </Card>
    );
};

export default TaskCard;
import { Task } from '@/types';
import { Card, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';

interface taskProps {
    task: Task
}

const TaskCard = (props: taskProps) => {
    return (
        <Card className="p-3 task">
            <CardTitle>{props.task.name}</CardTitle>
            <CardDescription>
                {props.task.description && props.task.description}
            </CardDescription>
            <CardFooter>
                {props.task.duration && `${props.task.duration} seconds`}
            </CardFooter>
        </Card>
    );
};

export default TaskCard;
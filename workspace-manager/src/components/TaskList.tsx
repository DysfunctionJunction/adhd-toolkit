import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Thread } from "@/types";
import { ScrollArea } from "@/components/ui/scroll-area";
import TaskCard from "./Task";

interface taskListProps{
    thread: Thread;
}

// TaskList or Thread
const TaskList = (props: taskListProps) => {

    return (
        <Card className="m-4 flex-1 h-[calc(100vh-60px)]">
            <CardHeader>
                <CardTitle>{props.thread.name}</CardTitle>
                <CardDescription>{props.thread.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-fit w-full rounded-md border p-4">
                    {props.thread && props.thread.tasks.map(task => {
                        return (
                            <>
                                <TaskCard key={task.id} task={task} />
                            </>
                        )
                    })}
                </ScrollArea>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    );
}

export default TaskList;
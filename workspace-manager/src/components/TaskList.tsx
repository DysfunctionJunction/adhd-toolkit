import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Thread } from "@/types";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import TaskCard from "./Task";
import {  } from "@radix-ui/react-scroll-area";

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
            <CardContent className="flex flex-col overflow-y-scroll ">
                <ScrollArea type="always" className="flex-1 bg-accent-foreground">
                    <div>
                        {props.thread && props.thread.tasks.map(task => {
                            return (
                                <div key={task.id}>
                                    <TaskCard task={task} />
                                </div>
                            )
                        })}
                    </div>
                    <ScrollBar />
                </ScrollArea>
            </CardContent>
        </Card>
    );
}

export default TaskList;
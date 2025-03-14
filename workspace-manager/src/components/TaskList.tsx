import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Thread } from "@/types";

interface taskListProps{
    thread: Thread;
}

// TaskList or Thread
const TaskList = (props: taskListProps) => {

    return (
        <Card className="m-4">
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    );
}

export default TaskList;
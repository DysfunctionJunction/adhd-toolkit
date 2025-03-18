import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { WorkflowList } from "./WorkflowList";
import { useEffect, useState } from "react";
import { Thread, Workflow, Task } from "@/types";
import ThreadList from "./ThreadList";

const default_tasks: Task[] = [
    {
        id: "1",
        name: "Task 1",
        description: "First task description",
        status: "completed",
        duration: 1
    },
    {
        id: "2",
        name: "Task 2",
        description: "First task description",
        status: "completed",
        duration: 3
    },
    {
        id: "3",
        name: "Task 3",
        description: "First task description",
        status: "completed",
        duration: 5
    },
    {
        id: "4",
        name: "Task 4",
        description: "First task description",
        status: "completed",
        duration: 5
    },
    {
        id: "5",
        name: "Task 5",
        description: "First task description",
        status: "completed",
        duration: 5
    }
];

const default_threads: Thread[] = [
    {
        id: "1",
        name: "Thread 1",
        description: "Task Queue 1",
        tasks: default_tasks
    },
    {
        id: "2",
        name: "Thread 2",
        description: "Task Queue 2",
        tasks: default_tasks
    },
    {
        id: "3",
        name: "Thread 3",
        description: "Task Queue 3",
        tasks: default_tasks
    }
];

const workflows: Workflow[] = [
    {
        id: "1",
        name: "Morning Routine",
        description: "Daily morning tasks and rituals",
        threads: default_threads
    },
    {
        id: "2",
        name: "Work Setup",
        description: "Preparation for productive work session",
        threads: default_threads
    },
    {
        id: "3",
        name: "Evening Shutdown",
        description: "End of day wind-down routine",
        threads: default_threads
    }
];

const WorkflowPage = () => {
    const [isDark, setDark] = useState<boolean>(() => {
        return localStorage.getItem("theme") === "dark" ? true : false;
    });

    const [activeWorkflow, setActiveWorkflow] =useState<Workflow | undefined>(undefined);

    useEffect(() => {
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    const workflowListProps = {
        isDark,
        setDark,
        workflows,
        setActiveWorkflow
    }

    return (
        <div className={isDark ? "dark" : "light"}>
            <SidebarProvider>       
                <WorkflowList {...workflowListProps} />
                <main className="flex-1 bg-secondary">
                    <SidebarTrigger />
                    <ThreadList activeWorkflow={activeWorkflow} />
                </main>
            </SidebarProvider>
        </div>
    )
}

export default WorkflowPage;
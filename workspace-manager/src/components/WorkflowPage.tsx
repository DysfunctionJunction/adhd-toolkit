import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { WorkflowList } from "./WorkflowList";
import { useEffect, useState } from "react";
import { Workflow } from "@/types";
import ThreadList from "./ThreadList";

const workflows: Workflow[] = [
    {
        id: "1",
        name: "Morning Routine",
        description: "Daily morning tasks and rituals",
        threads: [
            {
                id: "2.1",
                name: "main",
                description: "single thread",
                tasks: []
            }
        ]
    },
    {
        id: "2",
        name: "Work Setup",
        description: "Preparation for productive work session",
        threads: [
            {
                id: "2.1",
                name: "main",
                description: "single thread",
                tasks: []
            }
        ]
    },
    {
        id: "3",
        name: "Evening Shutdown",
        description: "End of day wind-down routine",
        threads: [
            {
                id: "3.1",
                name: "main",
                description: "single thread",
                tasks: []
            }
        ]
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
                <main className="flex-1 p-4 bg-secondary">
                    <SidebarTrigger />
                    <ThreadList activeWorkflow={activeWorkflow} />
                </main>
            </SidebarProvider>
        </div>
    )
}

export default WorkflowPage;
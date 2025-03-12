import React from "react";

import { Workflow } from "../types";

import { Plus, Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Card } from "./ui/card";

interface props {
    isDark : boolean;
    setDark : React.Dispatch<React.SetStateAction<boolean>>;
    props? : React.ComponentProps<typeof Sidebar> | undefined;
}

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

export function WorkflowList({isDark, setDark, ...props}: props) {
    return (
    <Sidebar className="border-r-0" {...props}>

        <SidebarHeader className=" h-16 border-b border-sidebar-border">
            <div className="flex justify-between items-center h-full px-4">
                <span>
                    Workflows
                </span>

                <span className="flex gap-2 items-center">
                    <Switch onCheckedChange={() => setDark(!isDark)} />
                    {isDark ? <Sun id="theme" /> : <Moon id="theme" />}
                </span>
            </div>
        </SidebarHeader>
        
        <SidebarContent>
            {workflows.map(workflow => {
                return (
                <>
                    <Card key={workflow.id}>
                        {workflow.name}: {workflow.description}
                    </Card>
                    <SidebarSeparator className="mx-0" />
                </>
                );
            })}
        </SidebarContent>

        <SidebarFooter>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <Plus />
                        <span>New Workflow</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />

    </Sidebar>
    );
}

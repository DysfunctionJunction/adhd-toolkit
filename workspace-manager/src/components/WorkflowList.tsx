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
} from "@/components/ui/sidebar";
import { Card } from "./ui/card";

interface props {
    isDark : boolean;
    setDark : React.Dispatch<React.SetStateAction<boolean>>;
    workflows: Workflow[];
    setActiveWorkflow: React.Dispatch<React.SetStateAction<Workflow | undefined>>;
    props? : React.ComponentProps<typeof Sidebar> | undefined;
}



export function WorkflowList({isDark, setDark, workflows, setActiveWorkflow, ...props}: props) {
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
                    <Card 
                      className="p-4 mr-4 ml-4 mt-2 md-2" 
                      key={workflow.id}
                      onClick={() => setActiveWorkflow(workflow)}
                    >
                        {workflow.name}: {workflow.description}
                    </Card>
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

import { Plus, Sun, Moon } from "lucide-react"
import { Switch } from "@/components/ui/switch"

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
} from "@/components/ui/sidebar"
import React from "react"

interface props {
    isDark : boolean;
    setDark : React.Dispatch<React.SetStateAction<boolean>>;
    props? : React.ComponentProps<typeof Sidebar> | undefined;
}

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
                { isDark ? <Sun id="theme" /> : <Moon id="theme" /> }
            </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarSeparator className="mx-0" />
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
  )
}

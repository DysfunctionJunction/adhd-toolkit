import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { WorkflowList } from "./WorkflowList";
import { useState } from "react";

const WorkflowPage = () => {
    const [isDark, setDark] = useState<boolean>(false);

    return (
        <div className={isDark ? "dark" : "light"}>
            <SidebarProvider>       
                <WorkflowList isDark={isDark} setDark={setDark} />
                <main>
                    <SidebarTrigger />
                </main>
            </SidebarProvider>
        </div>
    )
}

export default WorkflowPage;
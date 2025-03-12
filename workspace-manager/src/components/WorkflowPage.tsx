import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { WorkflowList } from "./WorkflowList";
import { useEffect, useState } from "react";

const WorkflowPage = () => {
    const [isDark, setDark] = useState<boolean>(() => {
        return localStorage.getItem("theme") === "dark" ? true : false;
    });

    useEffect(() => {
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    return (
        <div className={isDark ? "dark" : "light"}>
            <SidebarProvider>       
                <WorkflowList isDark={isDark} setDark={setDark} />
                <main className="flex-1 p-4">
                    <SidebarTrigger />
                </main>
            </SidebarProvider>
        </div>
    )
}

export default WorkflowPage;
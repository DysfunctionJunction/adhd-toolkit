export interface Workflow {
    id: string;
    name: string;
    description: string;
    threads: Thread[];
}

export interface Thread {
    id: string;
    name: string;
    description: string;
    tasks: Task[];
}

export interface Task {
    id: string;
    name: string;
    description: string;
    status: "initial" | "running" | "paused" | "completed";
    duration: number;
}
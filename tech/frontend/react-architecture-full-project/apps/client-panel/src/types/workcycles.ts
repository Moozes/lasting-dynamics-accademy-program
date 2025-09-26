export type TFactory = {
    id?: string;
    name: string;
};

export type TLine = {
    id: string;
    name: string;
    factory: TFactory;
};

export type TAddLine = {
    name: string;
    factory: number;
};

export type TUpdateLine = {
    id: string;
    name?: string;
    factory?: number;
};

export type TWorkstation = {
    id: string;
    name: string;
    line: TLine;
};

export type TAddWorkstation = {
    name: string;
    line: number;
};

export type TAddWorkstationFormValues = TAddWorkstation & {
    factory: number;
};

export type TUpdateWorkstation = {
    id: string;
    name?: string;
    line?: number;
};

export type TTaskModel = {
    id: string;
    name: string;
    workstation: TWorkstation;
};

export type TAddTaskModel = {
    name: string;
    workstation: number;
};

export type TAddTaskModelFormValues = TAddTaskModel & {
    factory: number;
    line: number;
};

export type TUpdateTaskModel = {
    id: string;
    name?: string;
    workstation?: number;
};

export type TTask = {
    id: string;
    name: string;
    duration: number;
    task_model: TTaskModel;
};

export type TAddTask = {
    name: string;
    duration: number;
    task_model: number;
};

export type TAddTaskFormValues = TAddTask & {
    factory: number;
    line: number;
    workstation: number;
};

export type TUpdateTask = {
    id: string;
    name?: string;
    duration?: number;
    task_model?: number;
};


export enum TaskStatus {
    TODO = "TODO",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
  }


export interface Task {
    title : string ,
    description : string ,
    deadline : string ,
    userId : string ,
    status ? : TaskStatus ,
    id: string 
} 

export interface TaskCardProps {
  task: Task;
  onDelete?: (id: string) => void;
  onEdit?: (task: Task) => void;
}

export interface TaskFormProps {
    taskToEdit?: Task | null;
    onCancel?: () => void;  
  }


  export interface StatusSelectProps {
  value: TaskStatus;
  onChange: (status: TaskStatus) => void;
}
  

 
 
 

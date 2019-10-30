import { task_priority } from './app.config';

 
 export class TodoItemModel{
 
    taskName:String;
    dueDate:Date
    priority:task_priority;

    constructor(name:String, dueDate:Date,priority:task_priority)
    {
        this.taskName = name;
        this.dueDate = dueDate;
        this.priority = priority;

        console.log(`created the task :  ${name} withdue date as ${dueDate} and priority as ${priority}`)
    }

    setPriority(priority:task_priority)
    {
        this.priority = priority;
    }

    setTaskName(name:String)
    {
        this.taskName = name;
    }

    setDueDate(dueDate:Date)
    {
        this.dueDate = dueDate;
    }

 }
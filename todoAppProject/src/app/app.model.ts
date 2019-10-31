import { task_priority } from './app.config';

 
 export class TodoItemModel{
 
    taskName:String;
    dueDate:Date
    priority:task_priority;

    constructor(name:String,priority:task_priority)
    {
        this.taskName = name;
       
        let now:Date = new Date();
        let dueDate:Date = new Date();

        if(priority==task_priority.DAYS)
        {
            dueDate.setDate(now.getDate() + 5);
        }
        else if(priority==task_priority.WEEKS)
        {
            dueDate.setDate(now.getDate() + 14);
        }
        else if (priority==task_priority.URGENT)
        {
            dueDate.setDate(now.getDate() + 1);
        }

        //console.log(` ${dueDate.getDate()} now.getDate() ${now.getDate() | now.getDate()} now.getDate() + 14 :  ${now.getDate() + 14} withdue date as ${now.getDate() + 1} and priority as ${now.getDate() + 5}`)
        this.dueDate = dueDate;
        this.priority = priority;

        console.log(`created the task :  ${name} withdue date as ${dueDate} and priority as ${priority}`)
    }

    addTime(days:number):number{
        return days ;//* ((1000 * 60 * 60 * 24));
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
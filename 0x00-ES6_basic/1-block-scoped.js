export default function taskBlock(trueOrFalse) {
        let task = false;
        let task2 = true;
    
        if (trueOrFalse) {
            let taskInner = true;
            let task2Inner = false;
        }
    
        return [task, task2];
}

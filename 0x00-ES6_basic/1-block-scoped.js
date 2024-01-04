export default function taskBlock(trueOrFalse) {
 const task = false;
 const task2 = true;
 if (trueOrFalse) {
  const taskInner = true;
  const task2Inner = false;
 }
 return [task, task2];
}

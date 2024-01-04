/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
export default function taskBlock(trueOrFalse) {
  // eslint-disable-next-line no-var
  const task = false;
  // eslint-disable-next-line no-var
  const task2 = true;

  if (trueOrFalse) {
    let task = true;
    // eslint-disable-next-line no-unused-vars
    let task2 = false;
  }

  return [task, task2];
}

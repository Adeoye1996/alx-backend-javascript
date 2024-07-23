export default function taskBlock(trueOrFalse) {
  const firstTask = false;
  const secondTask = true;

  if (trueOrFalse) {
    // eslint-disable-next-line
    let firstTask = true;
    // eslint-disable-next-line
    let secondTask = false;
  }

  return [firstTask, secondTask];
}

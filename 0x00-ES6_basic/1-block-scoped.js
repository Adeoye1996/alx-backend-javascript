export default function taskBlock(condition) {
  const firstTask = false;
  const secondTask = true;

  if (condition) {
    // eslint-disable-next-line
    let firstTask = true;
    // eslint-disable-next-line
    let secondTask = false;
  }

  return [firstTask, secondTask];
}

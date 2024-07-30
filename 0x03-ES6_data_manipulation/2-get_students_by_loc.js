export default function getStudentsByLocation(students, city) {
  // check arg is an array before filter is being used
  if (Object.getPrototypeOf(students) === Array.prototype) {
    return students.filter((items) => items.location === city);
  }
  return [];
}

export default function getStudentIdsSum(listofStudents) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const listofIds = listofStudents.map((student) => student.id);
  return listofIds.reduce(reducer);
}

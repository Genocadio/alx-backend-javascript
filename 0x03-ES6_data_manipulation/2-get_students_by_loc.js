export default function getStudentsByLocation(listofStudents, city) {
  return listofStudents.filter((student) => student.location === city);
}

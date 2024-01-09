export default function getListStudentIds(listofStudents) {
  if (!Array.isArray(listStudents)) return [];
  return listStudents.map((student) => student.id);
}

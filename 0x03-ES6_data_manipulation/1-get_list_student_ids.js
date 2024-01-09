export default function getListStudentIds(getListStudents) {
  const listStudents = getListStudents();
  if (!Array.isArray(listStudents)) return [];
  return listStudents.map((student) => student.id);
}

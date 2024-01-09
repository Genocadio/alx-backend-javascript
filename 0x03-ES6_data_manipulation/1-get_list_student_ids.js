// eslint-disable-next-line no-unused-vars
import getListStudents from './0-get_list_students';

export default function getListStudentIds(getListStudents) {
  const listStudents = getListStudents();
  if (!Array.isArray(listStudents)) return [];
  return listStudents.map((student) => student.id);
}

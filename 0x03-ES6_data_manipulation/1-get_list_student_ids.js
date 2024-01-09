export default function getListStudentIds(arg) {
  if (!Array.isArray(arg)) {
    return [];
  }
  return arg.map((arg) => arg.id);
}

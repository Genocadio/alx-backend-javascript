export default function updateStudentGradeByCity(listofStudents, city, newGrades) {
  const listofStudentsByCity = listofStudents.filter((student) => student.location === city);
  return listofStudentsByCity.map((student) => {
    const studentGrade = newGrades.filter((grade) => grade.studentId === student.id);
    if (studentGrade[0]) {
      return { ...student, grade: studentGrade[0].grade };
    }
    return { ...student, grade: 'N/A' };
  });
}

import React from 'react';
import { CardContainer, CardContent } from '../StyledComponents/Card';
import { H2 } from '../StyledComponents/Common';
import { Student } from '../../types';

interface StudentComponentProps {
  student: Student;
}

const StudentCard: React.FC<StudentComponentProps> = ({student}) => {
  return (
    <CardContainer>
      <H2>{student.name} # {student.uuid}</H2>
      <CardContent>
      <p>Age: {student.age}</p>
      <p>Grade: {student.class}</p>
      <p>Gender: {student.sex}</p>
      <p>siblings: {student.siblings}</p>
      <p>Grade: {student.gpa}</p>
      </CardContent>
    </CardContainer>

  );
};

export default StudentCard;

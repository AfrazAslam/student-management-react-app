import { useLocation } from 'react-router-dom';
import StudentCard from '../components/Student/StudentDescriptionCard';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect, useCallback } from 'react';
import { RootState, AppDispatch } from '../redux/store';
import { Container } from '../components/StyledComponents/Common';
import { fetchStudentById } from '../redux/student/studentService';
import { LookupButton, LookupInput } from '../components/StyledComponents/Lookup';
import { Student } from '../types';
import { setSelectedStudent } from '../redux/student/reducer';


const LookupPage: React.FC = () => {
  const location = useLocation();
  const [uuid, setUuid] = useState<number | undefined>(undefined);
  const dispatch = useDispatch<AppDispatch>();
  const students = useSelector((state: RootState) => state.student.students);
  const selectedStudent = useSelector((state: RootState) => state.student.selectedStudent);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const uuidParam = query.get('uuid');
    if (uuidParam) {
      setUuid(parseInt(uuidParam));
    }
  }, [location.search]);

  const handleLookup = useCallback(() => {
    if (uuid === undefined) return;

    const studentInState = students.find((student: Student) => student.uuid === uuid);

    if (studentInState) {
      dispatch(setSelectedStudent(studentInState));
    } else {
      dispatch(fetchStudentById(uuid))
        .then((action) => {
          if (fetchStudentById.fulfilled.match(action)) {
            dispatch(setSelectedStudent(action.payload));
          } else {
            dispatch(setSelectedStudent(null));
          }
        });
    }
  }, [uuid, students, dispatch]);

  useEffect(() => {
    if (uuid !== undefined) {
      handleLookup();
    }
  }, [uuid, handleLookup]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUuid(e.target.value ? parseInt(e.target.value) : undefined);
  };

  return (
    <Container>
      <h1>Search Student</h1>
      <LookupInput
        type="number"
        value={uuid !== undefined ? uuid : ''}
        onChange={handleChange}
        placeholder="Enter Student UUID"
      />
      <LookupButton onClick={handleLookup}>Lookup</LookupButton>
      {selectedStudent && (
        <StudentCard student={selectedStudent} />
      )}
    </Container>
  );
};

export default LookupPage;

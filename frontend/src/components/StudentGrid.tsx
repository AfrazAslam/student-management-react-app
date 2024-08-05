import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { deleteStudent, fetchStudents } from "../redux/student/studentService";
import { FlexedCenterContainer } from "./StyledComponents/FixedCenterContainer";
import { GridContainer } from "./StyledComponents/GridContainer";
import StudentCard from "./Student/StudentCard"; // Import the StudentCard component
import StudentForm from "./StudentForm";
import { H2 } from "./StyledComponents/Common";

const StudentGrid: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const students = useSelector((state: RootState) => state.student.students);
	const [selectedStudent, setSelectedStudentState] = useState<
		number | undefined
	>(undefined);

	useEffect(() => {
		if (students.length === 0) {
			// Fetch students if there are none present
			dispatch(fetchStudents());
		}
	}, [dispatch, students.length]);

	const handleDelete = (uuid: number) => {
		dispatch(deleteStudent(uuid));
	};

	const handleEdit = (uuid: number) => {
		setSelectedStudentState(uuid);
	};

	return (
		<FlexedCenterContainer background={"white"}>
			<StudentForm
				student={students.find((student) => student.uuid === selectedStudent)}
			/>
			<FlexedCenterContainer width="50%" direction="column">
				<H2>{students?.length > 0 ? "Students" : "No Students Found"}</H2>
				<GridContainer width="90%">
					{students.map((student) => (
						<StudentCard
							key={student.uuid}
							student={student}
							onEdit={handleEdit}
							onDelete={handleDelete}
						/>
					))}
				</GridContainer>
			</FlexedCenterContainer>
		</FlexedCenterContainer>
	);
};

export default StudentGrid;

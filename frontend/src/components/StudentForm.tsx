import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { createStudent, updateStudent } from "../redux/student/studentService";
import {
	FormContainer,
	FormRow,
	Input,
	Label,
	Select,
} from "./StyledComponents/Form";
import { Button } from "./StyledComponents/Button";
import { Student } from "../types";

interface StudentFormProps {
	student?: Student;
	setStudent?: (student: Student | undefined) => void;
}

const StudentForm: React.FC<StudentFormProps> = ({ student, setStudent }) => {
	const dispatch = useDispatch<AppDispatch>();

	const initialFormData: Student = {
		name: "",
		age: 0,
		gpa: 0,
		sex: "Male",
		siblings: 0,
		class: 0,
		uuid: undefined,
	};

	const [formData, setFormData] = useState<Student>(initialFormData);
	const [errors, setErrors] = useState<Record<string, string>>({});
	const { status, failureMessage } = useSelector(
		(state: RootState) => state.student
	);

	useEffect(() => {
		if (student) {
			setFormData(student);
		}
	}, [student]);

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value, type } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: type === "number" ? Number(value) : value,
		}));
	};

	const validate = () => {
		const newErrors: Record<string, string> = {};
		if (!formData.name) newErrors.name = "Name is required";
		if (formData.age <= 0) newErrors.age = "Age must be greater than 0";
		if (formData.class <= 0) newErrors.class = "Class must be greater than 0";
		if (formData.gpa < 0 || formData.gpa > 4)
			newErrors.gpa = "GPA must be between 0 and 4";
		if (formData.siblings < 0)
			newErrors.siblings = "Siblings cannot be negative";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (!validate()) return;
		if (student?.uuid) {
			dispatch(updateStudent(formData));
		} else {
			dispatch(createStudent(formData));
		}
		resetForm();
	};

	const resetForm = () => {
		setFormData(initialFormData);
		setErrors({});
		if (setStudent) {
			setStudent(undefined);
		}
	};

	const renderInputField = (
		name: keyof Student,
		type: string,
		placeholder: string
	) => (
		<FormRow>
			<Label htmlFor={name}>{placeholder}</Label>
			<Input
				type={type}
				name={name}
				value={formData[name]}
				onChange={handleChange}
				placeholder={placeholder}
				required
			/>
			{errors[name] && <span className="error">{errors[name]}</span>}
		</FormRow>
	);

	return (
		<FormContainer onSubmit={handleSubmit}>
			<h1>{student ? "Update Student" : "Add New Student"}</h1>

			{renderInputField("name", "text", "Name")}
			{renderInputField("age", "number", "Age")}
			{renderInputField("class", "number", "Class")}
			{renderInputField("siblings", "number", "Siblings")}
			{renderInputField("gpa", "number", "GPA")}

			<FormRow>
				<Label htmlFor="sex">Gender</Label>
				<Select
					name="sex"
					value={formData.sex}
					onChange={handleChange}
					required
				>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
				</Select>
			</FormRow>

			<FormRow style={{ display: "flex", alignItems: "center" }}>
				{status === "failed" && status && (
					<div className="error-message">
						<p>{failureMessage}</p>
					</div>
				)}
				<Button>{student ? "Update Student" : "Add Student"}</Button>
			</FormRow>
		</FormContainer>
	);
};

export default StudentForm;

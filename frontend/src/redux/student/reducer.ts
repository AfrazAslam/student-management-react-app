import { createSlice } from "@reduxjs/toolkit";
import { createStudent, deleteStudent, fetchStudentById, fetchStudents, updateStudent } from "./studentService";
import { Student } from "../../types";

interface StudentState {
    students: Student[];
    selectedStudent: Student | null;
    status: 'idle' | 'loading' | 'failed' | 'succeed';
    failureMessage?:string
  }
  

const initialState: StudentState = {
    students: [],
    selectedStudent: null,
    status: 'idle'
  };
  
  

const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
      setSelectedStudent: (state, action) => {
        state.selectedStudent = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchStudents.pending, (state) => {
            return { ...state, status: 'loading' }
        })
        .addCase(fetchStudents.fulfilled, (state, action) => {
          state.status = 'idle';
          state.students = action.payload;
        })
        .addCase(fetchStudents.rejected, (state, action) => {
          state.status = 'failed';
          state.failureMessage = action.payload as string
        })
        .addCase(fetchStudentById.fulfilled, (state, action) => {
          state.status = 'succeed';
          state.selectedStudent = action.payload;
        })
        .addCase(createStudent.fulfilled, (state, action) => {
          state.status = 'succeed';
          state.students.push({...action.meta.arg,uuid:action.payload});
        })
        .addCase(createStudent.rejected, (state, action) => {
          state.status = 'failed';
          state.failureMessage = action.payload as string
        })
        .addCase(updateStudent.fulfilled, (state, action) => {
          const index = state.students.findIndex((student) => student.uuid === action.meta.arg.uuid);
          if (index !== -1) {
            state.status = 'succeed';
            state.students[index] = action.meta.arg;
          }
        })
        .addCase(updateStudent.rejected, (state, action) => {
          state.status = 'failed';
          state.failureMessage = action.payload as string
        })
        .addCase(deleteStudent.fulfilled, (state, action) => {
          state.status = 'succeed';
          state.students = state.students.filter((student) => student.uuid !== action.payload);
        });
    },
  });
  
export const { setSelectedStudent } = studentSlice.actions;
export default studentSlice.reducer;
  
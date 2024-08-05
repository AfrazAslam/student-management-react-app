import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Student } from '../../types';


const API_URL:string = 'http://localhost:5000';

export const fetchStudents = createAsyncThunk('students/fetchStudents', async () => {
  const response = await axios.get(`${API_URL}/students`);
  return response.data;
});

export const fetchStudentById = createAsyncThunk('students/fetchStudentById', async (id: number) => {
  const response = await axios.get(`${API_URL}/student/${id}`);
  return response.data;
});

export const createStudent = createAsyncThunk(
  'students/createStudent',
  async (student: Student, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/student`, student, {
        headers: { 'Content-Type': 'application/json' },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to create student');
    }
  }
);

export const updateStudent = createAsyncThunk(
  'students/updateStudent',
  async (student: Student, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/student/${student.uuid}`, student, {
        headers: { 'Content-Type': 'application/json' },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to update student');
    }
  }
);

export const deleteStudent = createAsyncThunk(
  'students/deleteStudent',
  async (uuid: number, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/student/${uuid}`);
      return uuid;
    } catch (error) {
      return rejectWithValue('Failed to delete student');
    }
  }
);

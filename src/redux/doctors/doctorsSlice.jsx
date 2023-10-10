import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  doctors: [],
  isLoading: false,
  error: undefined,
};

const url = 'https://rails-j4lh.onrender.com/doctors';

export const fetchDoctors = createAsyncThunk('doctors/fetchDoctors', async () => {
  try {
    const response = await fetch(url);
    const doctors = await response.json();
    return doctors;
  } catch (error) {
    throw new Error('Failed to fetch doctors');
  }
});

export const addDoctor = createAsyncThunk('doctors/addDoctor', async (doctor) => {
  try {
    const response = await axios.post(url, doctor);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add doctor');
  }
});

export const deleteDoctor = createAsyncThunk('doctors/deleteDoctor', async (doctorId) => {
  const deleteUrl = `${url}/${doctorId}`;
  try {
    const response = await axios.delete(deleteUrl);
    return response.data;
  } catch (error) {
    throw new Error('Failed to delete doctor');
  }
});

export const showDoctor = createAsyncThunk('doctors/showDoctor', async (doctorId) => {
  const showUrl = `${url}/${doctorId}`;
  try {
    const response = await axios.get(showUrl);
    return response.data;
  } catch (error) {
    throw new Error('Failed to show doctor');
  }
});

const doctorSlice = createSlice({
  name: 'doctorsSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDoctors.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchDoctors.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        doctors: action.payload,
      }))
      .addCase(fetchDoctors.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: true,
      }))
      .addCase(addDoctor.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(addDoctor.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        doctors: [...state.doctors, action.payload],
      }))
      .addCase(addDoctor.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: true,
      }))
      .addCase(deleteDoctor.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(deleteDoctor.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        doctors: state.doctors.filter((doctor) => doctor.id !== action.payload.id),
      }))
      .addCase(deleteDoctor.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: true,
      }))
      .addCase(showDoctor.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(showDoctor.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        showDoctor: action.payload,
      }));
  },
});

export default doctorSlice.reducer;

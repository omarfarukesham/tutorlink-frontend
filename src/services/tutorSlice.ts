// features/tutor/tutorSlice.ts
import { Tutor } from '@/types/tutor';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  searchQuery: string;
  category: string;
  subject: string;
  minRate: number;
  maxRate: number;
}

interface TutorState {
  filters: FilterState;
}

const initialState: TutorState = {
  filters: {
    searchQuery: '',
    subject: '',
    category: '',
    minRate: 0,
    maxRate: 100,
  },
};

const tutorSlice = createSlice({
  name: 'tutor',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.filters.searchQuery = action.payload;
    },
    setFilters(state, action: PayloadAction<Partial<FilterState>>) {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
});

export const { setSearchQuery, setFilters } = tutorSlice.actions;

// Selector for filtered tutors
export const selectFilteredTutors = (tutors: Tutor[], filters: FilterState) => {
  let filtered = [...tutors];
  
  // Apply search filter
  if (filters.searchQuery) {
    const query = filters.searchQuery.toLowerCase();
    filtered = filtered.filter(tutor =>
      tutor.user.name.toLowerCase().includes(query) ||
      tutor.subjects.some(subject => 
        subject.name.toLowerCase().includes(query) ||
        subject.category.toLowerCase().includes(query)
      )
    );
  }
  
  // Apply subject filter
  if (filters.subject) {
    filtered = filtered.filter(tutor =>
      tutor.subjects.some(subject => 
        subject.name === filters.subject ||
        subject._id === filters.subject
      )
    );
  }
  
  // Apply rate filter
  filtered = filtered.filter(tutor =>
    tutor.hourlyRate >= filters.minRate && 
    tutor.hourlyRate <= filters.maxRate
  );
  
  return filtered;
};

export default tutorSlice.reducer;
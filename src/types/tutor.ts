// types/tutor.ts
export interface Subject {
    _id: string;
    name: string;
    gradeLevel: string;
    category: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  export interface Availability {
    day: string;
    startTime: string;
    endTime: string;
    _id: string;
  }
  
  export interface User {
    _id: string;
    name: string;
    email: string;
  }
  
  export interface Tutor {
    _id: string;
    user: User;
    bio: string;
    subjects: Subject[];
    availability: Availability[];
    hourlyRate: number;
    earnings: number;
    createdAt: string;
    updatedAt: string;
  }
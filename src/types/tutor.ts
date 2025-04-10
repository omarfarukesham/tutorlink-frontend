// types/tutor.ts
export interface Subject {
    _id: string;
    name: string;
    gradeLevel: string;
    category: string;
    createdAt: string;
    updatedAt: string;
   
  }
  
  export interface Availability {
    _id?: string;
    day: string;
    startTime: string;
    endTime: string;
  
  }
  
  export interface User {
    name: string;
    email: string;
  }
  
  export interface Tutor {
    _id?: string;
    user: User;
    bio: string;
    subjects: Subject[];
    availability: Availability[];
    hourlyRate: number;
    earnings: number;
    createdAt: string;
    updatedAt: string;
  }
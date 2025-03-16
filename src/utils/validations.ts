import { z } from 'zod';

// Login form validation schema
export const loginSchema = z.object({
  email: z.string().email('Invalid email').min(1, 'Email is required'),
  password: z.string().min(4, 'Password is required'),
});

// Register form validation schema
export const registerSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email').min(1, 'Email is required'),
  password: z.string().min(4, 'Password must be at least 4 characters').min(1, 'Password is required'),
  role: z.enum(['student', 'tutor','user'], { required_error: 'Role is required' }),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
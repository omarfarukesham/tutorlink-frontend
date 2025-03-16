/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { Mail, Lock } from 'lucide-react';
import { loginSchema, LoginFormData } from '@/utils/validations';
import { verifyToken } from '@/utils/verifyToken';
import { useLoginMutation } from '@/services/apiService';
import { loginSuccess } from '@/store/authSlice';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'omar@gmail.com',
      password: '1234',
    },
  });

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      const response = await login(data).unwrap();
      const token = (response as any)?.data?.token;

      sessionStorage.setItem('userToken', token);
      const decodedToken = verifyToken(token);

      const userData = {
        id: decodedToken.id,
        role: decodedToken.role as 'admin' | 'student' | 'tutor' | null,
        token,
      };

      sessionStorage.setItem('user', JSON.stringify(userData));
      dispatch(loginSuccess(userData));
      toast.success('Login successful');

      router.push(`/${userData.role}`);
    } catch (error: any) {
      console.error('Login failed:', error);
      toast.error(error?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Login</h1>
          <button
            onClick={() => router.push('/')}
            className="bg-gray-800 text-white px-3 py-1 rounded-md text-xs hover:bg-gray-900 transition"
          >
            Go Home
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1 relative">
              <Mail className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              <input
                type="email"
                id="email"
                {...register('email')}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Enter your email"
              />
            </div>
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1 relative">
              <Lock className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              <input
                type="password"
                id="password"
                {...register('password')}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Enter your password"
              />
            </div>
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition shadow-md"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;



// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useRouter } from 'next/router';
// import { useDispatch } from 'react-redux';
// import { toast } from 'react-hot-toast';
// import { Mail, Lock } from 'lucide-react';
// import { loginSchema, LoginFormData } from '@/utils/validations';
// import { verifyToken } from '@/utils/verifyToken';
// import { useLoginMutation } from '@/services/apiService';
// import { loginSuccess } from '@/store/authSlice';

// const LoginPage = () => {
//   const {
//     register,
//     handleSubmit,

//     formState: { errors },
//   } = useForm<LoginFormData>({
//     resolver: zodResolver(loginSchema),
//     defaultValues: {
//       email: 'omar@gmail.com',
//       password: '1234',
//     },
//   });

//   const [login, { isLoading }] = useLoginMutation();
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
//     try {
//       const response = await login(data).unwrap();
//       const token = (response as any)?.data?.token;

//         sessionStorage.setItem('userToken', token);
//         const decodedToken = verifyToken(token);
//         console.log(decodedToken)
        
//         const userData = {
//             id: decodedToken.id,
//             role: decodedToken.role as 'admin' | 'student' | 'tutor' | null,
//             token: token,
//           };

//         sessionStorage.setItem('user', JSON.stringify(userData));
//         dispatch(loginSuccess(userData));
//             toast.success('Login successful');
        
//         router.push(`/${userData.role}`);
    
//     } catch (error: any) {
//         console.error('Login failed:', error);
//         toast.error(error?.data?.message || 'Login failed. Please try again.');
//       }
//   };


//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <div className='flex justify-between items-center'>
//           <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
//           <button onClick={() => router.push('/')} className='bg-black text-white px-2 py-1 rounded-md text-xs hover:bg-blue-700'>Go Home</button>
//         </div>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <div className="mt-1 relative rounded-md shadow-sm">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Mail className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="email"
//                 id="email"
//                 {...register('email')}
//                 className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Enter your email"
//               />
//             </div>
//             {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <div className="mt-1 relative rounded-md shadow-sm">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Lock className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="password"
//                 id="password"
//                 {...register('password')}
//                 className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Enter your password"
//               />
//             </div>
//             {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>}
//           </div>

//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//           >
//             {isLoading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useCreateTutorMutation } from '@/services/tutorService'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import TutorLayout from '@/layouts/TutorLayout'

interface Subject {
  _id: string
  name: string
  gradeLevel: string
  category: string
  createdAt?: string
  updatedAt?: string
}

interface Availability {
  _id?: string
  day: string
  startTime: string
  endTime: string
}

interface FormData {
  bio: string
  subjects: string[]
  availability: Availability[]
  hourlyRate: number
  imageUrl: string
}

export default function AddTutor() {
  const router = useRouter()
  const [subjects, setSubjects] = useState<Subject[]>([])
  const [loadingSubjects, setLoadingSubjects] = useState(false)

  const [createTutor, { isLoading}] = useCreateTutorMutation()
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      availability: [{ day: '', startTime: '', endTime: '' }],
      subjects: [] 
    }
  })

  // Fetch subjects from API
  useEffect(() => {
    const fetchSubjects = async () => {
      setLoadingSubjects(true)
      try {
        const response = await fetch('https://tutorlink-server-sigma.vercel.app/api/subject')
        const data = await response.json()
        setSubjects(data?.data)
      } catch (err) {
        console.error('Failed to fetch subjects:', err)
        toast.error('Failed to load subjects')
      } finally {
        setLoadingSubjects(false)
      }
    }
    
    fetchSubjects()
  }, [])

  // Handle form submission
  const onSubmit = async (data: FormData) => {
    try {
      const user = JSON.parse(sessionStorage.getItem('user') || '{}')
      console.log(user.id)
      if (!user.id) {
        toast.error('User not authenticated')
        return
      }

      const tutorData = {
        user: user.id,
        bio: data.bio,
        subjects: data.subjects.map(subjectId => {
          const subject = subjects.find(s => s._id === subjectId);
          return {
            _id: subjectId,
            name: subject?.name || '',
            gradeLevel: subject?.gradeLevel || '',
            category: subject?.category || '',
            createdAt: new Date().toISOString(), // or whatever default value
            updatedAt: new Date().toISOString(), // or whatever default value
            __v: 0 // default version
          }
        }),
        availability: data.availability.filter(a => a.day && a.startTime && a.endTime),
        hourlyRate: data.hourlyRate,
        imageUrl: data.imageUrl
      }

      await createTutor(tutorData).unwrap()
      toast.success('Tutor created successfully!')
      router.push('/tutor')
    } catch (err) {
      toast.error('Failed to create tutor')
      console.error('Error creating tutor:', err)
    }
  }

  // Handle subject selection
  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value)
    setValue('subjects', selectedOptions)
  }

  // Watch availability field for updates
  const availability = watch('availability') || []

  // Update handlers to work with React Hook Form
  const handleAvailabilityChange = (index: number, field: keyof Availability, value: string) => {
    const newAvailability = [...availability]
    newAvailability[index] = { ...newAvailability[index], [field]: value }
    setValue('availability', newAvailability)
  }

  const addAvailability = () => {
    setValue('availability', [...availability, { day: '', startTime: '', endTime: '' }])
  }

  const removeAvailability = (index: number) => {
    if (availability.length > 1) {
      const newAvailability = availability.filter((_, i) => i !== index)
      setValue('availability', newAvailability)
    }
  }

  return (
    <TutorLayout>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Adding Profile for Public</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Bio Section */}
          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
              Bio
            </label>
            <textarea
              id="bio"
              {...register('bio', { required: 'Bio is required' })}
              className={`w-full px-3 py-2 border rounded-md ${errors.bio ? 'border-red-500' : 'border-gray-300'}`}
              rows={4}
              placeholder="Enter tutor's bio and qualifications"
            />
            {errors.bio && (
              <p className="mt-1 text-sm text-red-600">{errors.bio.message}</p>
            )}
          </div>

          {/* Image URL Section */}
          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
              Profile Image URL
            </label>
            <input
              id="imageUrl"
              type="url"
              {...register('imageUrl', { 
                required: 'Profile image URL is required',
                pattern: {
                  value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
                  message: 'Please enter a valid URL'
                }
              })}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.imageUrl ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter profile image URL"
            />
            {errors.imageUrl && (
              <p className="mt-1 text-sm text-red-600">{errors.imageUrl.message}</p>
            )}
            {watch('imageUrl') && (
              <div className="mt-2">
                <img 
                  src={watch('imageUrl')} 
                  alt="Profile preview" 
                  className="w-24 h-24 object-cover rounded-full border-2 border-gray-200"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder-avatar.png';
                    e.currentTarget.onerror = null;
                  }}
                />
              </div>
            )}
          </div>

          {/* Subjects Section */}
          <div>
            <label htmlFor="subjects" className="block text-sm font-medium text-gray-700 mb-1">
              Subjects
            </label>
            {loadingSubjects ? (
              <p>Loading subjects...</p>
            ) : (
              <select
                id="subjects"
                multiple
                size={5}
                {...register('subjects', { 
                  required: 'Please select at least one subject',
                  validate: value => value.length > 0 || 'At least one subject is required'
                })}
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.subjects ? 'border-red-500' : 'border-gray-300'
                }`}
                onChange={handleSubjectChange}
              >
                {subjects?.map((subject) => (
                  <option key={subject._id} value={subject._id}>
                    {subject.name} ({subject.gradeLevel}) - {subject.category}
                  </option>
                ))}
              </select>
            )}
            {errors.subjects && (
              <p className="mt-1 text-sm text-red-600">{errors.subjects.message}</p>
            )}
            {watch('subjects')?.length > 0 && (
              <div className="mt-2">
                <span className="text-sm text-gray-600">
                  Selected: {watch('subjects').length} subject(s)
                </span>
              </div>
            )}
          </div>

          {/* Availability Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Availability
            </label>
            {availability.map((_, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-3">
                <select
                  {...register(`availability.${index}.day` as const, { required: 'Day is required' })}
                  className="px-3 py-2 border border-gray-300 rounded-md"
                  onChange={(e) => handleAvailabilityChange(index, 'day', e.target.value)}
                >
                  <option value="">Select day</option>
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
                
                <input
                  type="time"
                  {...register(`availability.${index}.startTime` as const, { required: 'Start time is required' })}
                  className="px-3 py-2 border border-gray-300 rounded-md"
                  onChange={(e) => handleAvailabilityChange(index, 'startTime', e.target.value)}
                />
                
                <input
                  type="time"
                  {...register(`availability.${index}.endTime` as const, { required: 'End time is required' })}
                  className="px-3 py-2 border border-gray-300 rounded-md"
                  onChange={(e) => handleAvailabilityChange(index, 'endTime', e.target.value)}
                />
                
                <button
                  type="button"
                  onClick={() => removeAvailability(index)}
                  className="px-3 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200"
                  disabled={availability.length <= 1}
                >
                  Remove
                </button>
              </div>
            ))}
            
            {/* Show validation errors */}
            {errors.availability && (
              <p className="mt-1 text-sm text-red-600">Please fill all availability fields</p>
            )}

            <button
              type="button"
              onClick={addAvailability}
              className="mt-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200"
            >
              Add Time Slot
            </button>
          </div>

          {/* Hourly Rate */}
          <div>
            <label htmlFor="hourlyRate" className="block text-sm font-medium text-gray-700 mb-1">
              Hourly Rate ($)
            </label>
            <input
              id="hourlyRate"
              type="number"
              {...register('hourlyRate', { 
                required: 'Hourly rate is required',
                min: { value: 1, message: 'Rate must be at least $1' }
              })}
              className={`w-full px-3 py-2 border rounded-md ${errors.hourlyRate ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter hourly rate"
            />
            {errors.hourlyRate && (
              <p className="mt-1 text-sm text-red-600">{errors.hourlyRate.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:bg-purple-400"
            >
              {isLoading ? 'Creating...' : 'Create Tutor'}
            </button>
          </div>
        </form>
      </div>
    </TutorLayout>
  )
}
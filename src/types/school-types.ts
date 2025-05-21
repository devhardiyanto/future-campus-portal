
export type UserRole = 'admin' | 'teacher' | 'parent' | 'super_admin';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export interface Teacher extends User {
  role: 'teacher';
  subjects: string[];
  classrooms: Classroom[];
  qualification: string;
  joinDate: string;
  contactNumber: string;
}

export interface Admin extends User {
  role: 'admin';
  permissions: string[];
}

export interface Parent extends User {
  role: 'parent';
  students: Student[];
  contactNumber: string;
  address: string;
}

export interface SuperAdmin extends User {
  role: 'super_admin';
  licenseManagement: boolean;
  schoolManagement: boolean;
}

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  grade: string;
  classroom?: Classroom;
  parentIds: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Classroom {
  id: string;
  name: string;
  grade: string;
  teacherId?: string;
  studentIds: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Curriculum {
  id: string;
  name: string;
  description: string;
  grade: string;
  subjects: Subject[];
  createdAt: string;
  updatedAt: string;
}

export interface Subject {
  id: string;
  name: string;
  description: string;
  teacherIds: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Schedule {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  dayOfWeek: number;
  teacherId?: string;
  subjectId?: string;
  classroomId?: string;
  type: 'teaching' | 'event';
  createdAt: string;
  updatedAt: string;
}

export interface SchoolProfile {
  id: string;
  name: string;
  description: string;
  logoUrl?: string;
  address: string;
  contactEmail: string;
  contactPhone: string;
  website?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Invoice {
  id: string;
  studentId: string;
  amount: number;
  dueDate: string;
  status: 'pending' | 'paid' | 'overdue';
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface Transaction {
  id: string;
  invoiceId: string;
  amount: number;
  paymentDate: string;
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  audience: ('teachers' | 'parents' | 'admins')[];
}

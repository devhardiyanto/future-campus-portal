
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  Book, 
  Calendar, 
  FileText, 
  Home, 
  Users, 
  User, 
  Building, 
  FileText as FileTextIcon, 
  Bell, 
  Settings, 
  ShieldCheck 
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const { user } = useAuth();

  // Define navigation links based on user role
  const getNavLinks = () => {
    const baseLinks = [
      { to: '/dashboard', icon: <Home size={20} />, label: 'Dashboard' },
    ];

    const adminLinks = [
      { to: '/users', icon: <Users size={20} />, label: 'User Management' },
      { to: '/teachers', icon: <User size={20} />, label: 'Teacher Management' },
      { to: '/students', icon: <Users size={20} />, label: 'Student Management' },
      { to: '/curriculum', icon: <Book size={20} />, label: 'Curriculum' },
      { to: '/schedules', icon: <Calendar size={20} />, label: 'Schedules' },
      { to: '/classrooms', icon: <Building size={20} />, label: 'Classrooms' },
      { to: '/billing', icon: <FileTextIcon size={20} />, label: 'Billing' },
      { to: '/announcements', icon: <Bell size={20} />, label: 'Announcements' },
      { to: '/school-profile', icon: <Settings size={20} />, label: 'School Profile' },
    ];

    const teacherLinks = [
      { to: '/my-schedule', icon: <Calendar size={20} />, label: 'My Schedule' },
      { to: '/my-students', icon: <Users size={20} />, label: 'My Students' },
      { to: '/my-curriculum', icon: <Book size={20} />, label: 'My Curriculum' },
      { to: '/announcements', icon: <Bell size={20} />, label: 'Announcements' },
    ];

    const parentLinks = [
      { to: '/my-children', icon: <Users size={20} />, label: 'My Children' },
      { to: '/schedules', icon: <Calendar size={20} />, label: 'Schedules' },
      { to: '/invoices', icon: <FileTextIcon size={20} />, label: 'Invoices' },
      { to: '/announcements', icon: <Bell size={20} />, label: 'Announcements' },
    ];

    const superAdminLinks = [
      ...adminLinks,
      { to: '/school-management', icon: <Building size={20} />, label: 'School Management' },
      { to: '/license-management', icon: <ShieldCheck size={20} />, label: 'License Management' },
    ];

    switch (user?.role) {
      case 'admin':
        return [...baseLinks, ...adminLinks];
      case 'teacher':
        return [...baseLinks, ...teacherLinks];
      case 'parent':
        return [...baseLinks, ...parentLinks];
      case 'super_admin':
        return [...baseLinks, ...superAdminLinks];
      default:
        return baseLinks;
    }
  };

  const navLinks = getNavLinks();

  return (
    <aside className="hidden md:block w-64 bg-sidebar border-r border-gray-200 overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-2xl font-bold text-education-800">SchoolManager</h2>
        </div>
        <nav className="space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? 'active' : ''}`
              }
            >
              {link.icon}
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};


import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, Calendar, FileText, Bell, School } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const getWelcomeMessage = () => {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
    return `${greeting}, ${user?.firstName}`;
  };

  const AdminDashboard = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <CardDescription>All registered students</CardDescription>
            </div>
            <Users className="h-6 w-6 text-education-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle className="text-sm font-medium">Total Teachers</CardTitle>
              <CardDescription>Active teaching staff</CardDescription>
            </div>
            <Users className="h-6 w-6 text-education-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-muted-foreground">+2 new this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle className="text-sm font-medium">Classes</CardTitle>
              <CardDescription>Total active classrooms</CardDescription>
            </div>
            <School className="h-6 w-6 text-education-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle className="text-sm font-medium">Pending Invoices</CardTitle>
              <CardDescription>Unpaid student fees</CardDescription>
            </div>
            <FileText className="h-6 w-6 text-education-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,480</div>
            <p className="text-xs text-muted-foreground">24 pending invoices</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
              <CardDescription>Next 7 days</CardDescription>
            </div>
            <Calendar className="h-6 w-6 text-education-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Parent-Teacher meeting on Fri</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle className="text-sm font-medium">Announcements</CardTitle>
              <CardDescription>Recent school updates</CardDescription>
            </div>
            <Bell className="h-6 w-6 text-education-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">2 new since yesterday</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-education-500 pl-4 py-2">
              <p className="text-sm font-medium">New student registration</p>
              <p className="text-xs text-muted-foreground">Today at 10:30 AM</p>
            </div>
            <div className="border-l-4 border-education-500 pl-4 py-2">
              <p className="text-sm font-medium">Teacher meeting scheduled</p>
              <p className="text-xs text-muted-foreground">Tomorrow at 2:00 PM</p>
            </div>
            <div className="border-l-4 border-education-500 pl-4 py-2">
              <p className="text-sm font-medium">Curriculum updated for Grade 7</p>
              <p className="text-xs text-muted-foreground">Yesterday at 3:45 PM</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Latest Announcements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-medium">School closure notice</h3>
              <p className="text-xs text-muted-foreground">Due to maintenance work, the school will be closed on Saturday.</p>
            </div>
            <div>
              <h3 className="text-sm font-medium">Annual Sports Day</h3>
              <p className="text-xs text-muted-foreground">Annual sports day will be held on 15th June 2025.</p>
            </div>
            <div>
              <h3 className="text-sm font-medium">New Library Books</h3>
              <p className="text-xs text-muted-foreground">New books have been added to the school library.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );

  const TeacherDashboard = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle className="text-sm font-medium">My Students</CardTitle>
              <CardDescription>Students in your classes</CardDescription>
            </div>
            <Users className="h-6 w-6 text-education-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle className="text-sm font-medium">My Classes</CardTitle>
              <CardDescription>Classes you teach</CardDescription>
            </div>
            <BookOpen className="h-6 w-6 text-education-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle className="text-sm font-medium">Today's Schedule</CardTitle>
              <CardDescription>Classes for today</CardDescription>
            </div>
            <Calendar className="h-6 w-6 text-education-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Next class: Mathematics at 11:00 AM</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Today's Classes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b">
              <div>
                <p className="font-medium">Mathematics</p>
                <p className="text-sm text-muted-foreground">Grade 8</p>
              </div>
              <div className="text-sm">9:00 AM - 10:30 AM</div>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
              <div>
                <p className="font-medium">Science</p>
                <p className="text-sm text-muted-foreground">Grade 7</p>
              </div>
              <div className="text-sm">11:00 AM - 12:30 PM</div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Physics Lab</p>
                <p className="text-sm text-muted-foreground">Grade 9</p>
              </div>
              <div className="text-sm">2:00 PM - 3:30 PM</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );

  const ParentDashboard = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle className="text-sm font-medium">Your Children</CardTitle>
              <CardDescription>Registered students</CardDescription>
            </div>
            <Users className="h-6 w-6 text-education-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
              <CardDescription>School calendar</CardDescription>
            </div>
            <Calendar className="h-6 w-6 text-education-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Parent-Teacher meeting on Friday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
              <CardDescription>Outstanding invoices</CardDescription>
            </div>
            <FileText className="h-6 w-6 text-education-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$850</div>
            <p className="text-xs text-muted-foreground">Due on 15th June</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Your Children</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b">
              <div>
                <p className="font-medium">Alex Johnson</p>
                <p className="text-sm text-muted-foreground">Grade 5, Section A</p>
              </div>
              <Button variant="outline" size="sm">View Details</Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Emma Johnson</p>
                <p className="text-sm text-muted-foreground">Grade 8, Section B</p>
              </div>
              <Button variant="outline" size="sm">View Details</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Latest Announcements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-medium">School closure notice</h3>
              <p className="text-xs text-muted-foreground">Due to maintenance work, the school will be closed on Saturday.</p>
            </div>
            <div>
              <h3 className="text-sm font-medium">Annual Sports Day</h3>
              <p className="text-xs text-muted-foreground">Annual sports day will be held on 15th June 2025.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );

  const SuperAdminDashboard = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle className="text-sm font-medium">Total Schools</CardTitle>
              <CardDescription>Managed schools</CardDescription>
            </div>
            <School className="h-6 w-6 text-education-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+1 new this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <CardDescription>All registered users</CardDescription>
            </div>
            <Users className="h-6 w-6 text-education-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,568</div>
            <p className="text-xs text-muted-foreground">Across all schools</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle className="text-sm font-medium">Active Licenses</CardTitle>
              <CardDescription>Valid licenses</CardDescription>
            </div>
            <FileText className="h-6 w-6 text-education-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">1 expiring in 30 days</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Schools Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b">
              <div>
                <p className="font-medium">Springfield Elementary</p>
                <p className="text-sm text-muted-foreground">License valid until: Dec 2025</p>
              </div>
              <div className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Active</div>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
              <div>
                <p className="font-medium">Westview High School</p>
                <p className="text-sm text-muted-foreground">License valid until: Aug 2025</p>
              </div>
              <div className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Active</div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Riverdale Academy</p>
                <p className="text-sm text-muted-foreground">License valid until: Jul 2025</p>
              </div>
              <div className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Expiring soon</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );

  const renderDashboardByRole = () => {
    switch (user?.role) {
      case 'admin':
        return <AdminDashboard />;
      case 'teacher':
        return <TeacherDashboard />;
      case 'parent':
        return <ParentDashboard />;
      case 'super_admin':
        return <SuperAdminDashboard />;
      default:
        return <p>Unknown role</p>;
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{getWelcomeMessage()}</h1>
        <p className="text-gray-500">Here's what's happening in your school today.</p>
      </div>
      {renderDashboardByRole()}
    </div>
  );
};

// Add this missing component
const Button: React.FC<{
  variant?: 'default' | 'outline' | 'secondary',
  size?: 'default' | 'sm' | 'lg',
  children: React.ReactNode,
}> = ({ variant = 'default', size = 'default', children }) => {
  let className = 'inline-flex items-center justify-center rounded-md font-medium transition-colors';
  
  if (size === 'sm') className += ' h-8 px-3 text-xs';
  else if (size === 'lg') className += ' h-12 px-6 text-base';
  else className += ' h-10 px-4 text-sm';
  
  if (variant === 'outline') className += ' border border-input bg-background hover:bg-accent hover:text-accent-foreground';
  else if (variant === 'secondary') className += ' bg-secondary text-secondary-foreground hover:bg-secondary/80';
  else className += ' bg-primary text-primary-foreground hover:bg-primary/90';
  
  return (
    <button className={className}>
      {children}
    </button>
  );
};

export default Dashboard;

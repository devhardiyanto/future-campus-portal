
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserRole } from '../types/school-types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'internal' | 'external'>('internal');
  const [roleType, setRoleType] = useState<'admin' | 'teacher' | 'parent'>('admin');
  
  const { login, error, isLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Determine selected role based on active tab and roleType
    let selectedRole: UserRole;
    if (activeTab === 'internal') {
      selectedRole = roleType as 'admin' | 'teacher';
    } else {
      selectedRole = 'parent';
    }
    
    try {
      await login(email, password, selectedRole);
      toast({
        title: "Login successful",
        description: "Welcome to School Management System"
      });
      navigate('/dashboard');
    } catch (err) {
      // Error is handled in AuthContext
    }
  };

  // Demo credentials
  const demoCredentials = {
    admin: { email: 'admin@school.com', password: 'password' },
    teacher: { email: 'teacher@school.com', password: 'password' },
    parent: { email: 'parent@example.com', password: 'password' },
    superAdmin: { email: 'superadmin@school.com', password: 'password' },
  };

  const fillDemoCredentials = (role: 'admin' | 'teacher' | 'parent' | 'superAdmin') => {
    setEmail(demoCredentials[role].email);
    setPassword(demoCredentials[role].password);
    if (role === 'admin' || role === 'teacher' || role === 'superAdmin') {
      setActiveTab('internal');
      setRoleType(role === 'superAdmin' ? 'admin' : role);
    } else {
      setActiveTab('external');
      setRoleType('parent');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-education-700">SchoolManager</h1>
          <p className="mt-2 text-gray-600">Login to access your school management dashboard</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Access the school management system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'internal' | 'external')}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="internal">Internal</TabsTrigger>
                <TabsTrigger value="external">External</TabsTrigger>
              </TabsList>
              <TabsContent value="internal">
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="admin"
                        name="role"
                        value="admin"
                        checked={roleType === 'admin'}
                        onChange={() => setRoleType('admin')}
                        className="h-4 w-4 rounded border-gray-300 text-education-600"
                      />
                      <Label htmlFor="admin">Admin</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="teacher"
                        name="role"
                        value="teacher"
                        checked={roleType === 'teacher'}
                        onChange={() => setRoleType('teacher')}
                        className="h-4 w-4 rounded border-gray-300 text-education-600"
                      />
                      <Label htmlFor="teacher">Teacher</Label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Enter your password"
                    />
                  </div>

                  {error && <p className="text-sm text-red-500">{error}</p>}

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Logging in...' : 'Login'}
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="external">
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="parent-email">Email</Label>
                    <Input
                      id="parent-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="parent-password">Password</Label>
                    <Input
                      id="parent-password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Enter your password"
                    />
                  </div>

                  {error && <p className="text-sm text-red-500">{error}</p>}

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Logging in...' : 'Login'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <p className="text-sm text-center text-gray-500 w-full">Demo Credentials</p>
            <div className="grid grid-cols-2 gap-2 w-full">
              <Button variant="outline" size="sm" onClick={() => fillDemoCredentials('admin')}>Admin Demo</Button>
              <Button variant="outline" size="sm" onClick={() => fillDemoCredentials('teacher')}>Teacher Demo</Button>
              <Button variant="outline" size="sm" onClick={() => fillDemoCredentials('parent')}>Parent Demo</Button>
              <Button variant="outline" size="sm" onClick={() => fillDemoCredentials('superAdmin')}>Super Admin</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;

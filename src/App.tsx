
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

// Pages
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Unauthorized from "./pages/Unauthorized";
import NotFound from "./pages/NotFound";
import { Layout } from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            
            {/* Protected routes */}
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              {/* Admin and Super Admin routes */}
              <Route path="/users" element={<Dashboard />} />
              <Route path="/teachers" element={<Dashboard />} />
              <Route path="/students" element={<Dashboard />} />
              <Route path="/curriculum" element={<Dashboard />} />
              <Route path="/schedules" element={<Dashboard />} />
              <Route path="/classrooms" element={<Dashboard />} />
              <Route path="/billing" element={<Dashboard />} />
              <Route path="/announcements" element={<Dashboard />} />
              <Route path="/school-profile" element={<Dashboard />} />
              
              {/* Teacher routes */}
              <Route path="/my-schedule" element={<Dashboard />} />
              <Route path="/my-students" element={<Dashboard />} />
              <Route path="/my-curriculum" element={<Dashboard />} />
              
              {/* Parent routes */}
              <Route path="/my-children" element={<Dashboard />} />
              <Route path="/invoices" element={<Dashboard />} />
              
              {/* Super Admin routes */}
              <Route path="/school-management" element={<Dashboard />} />
              <Route path="/license-management" element={<Dashboard />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;

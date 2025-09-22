import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AppLayout from "@/components/Layout/AppLayout";
import QuickActions from "@/components/Dashboard/QuickActions";
import StatusOverview from "@/components/Dashboard/StatusOverview";
import AdminOverview from "@/components/Dashboard/AdminOverview";
import { Users, Settings, BarChart3 } from "lucide-react";

const Index = () => {
  const [userRole, setUserRole] = useState<"student" | "admin">("student");
  
  return (
      <div className="min-h-screen">
        <div className="relative overflow-hidden rounded-3xl mb-8 animate-fade-up">
          <div className="hero-gradient p-8 md:p-12">
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                      <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
                      </svg>
                    </div>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                      Demo Mode
                    </Badge>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    VIT Hostel
                    <span className="block text-3xl md:text-4xl font-light">Management System</span>
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed">
                    Revolutionizing hostel operations with seamless digital solutions for students, 
                    staff, and administrators
                  </p>
                  <div className="flex flex-wrap gap-3 pt-4">
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      Real-time Updates
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      24/7 Support
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-6 bg-white/10 backdrop-blur-md rounded-2xl">
                  <h3 className="text-white font-semibold mb-4 text-center">Switch View</h3>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      variant={userRole === "student" ? "default" : "ghost"}
                      className={`flex-1 transition-all duration-300 ${
                        userRole === "student" 
                          ? "bg-white text-vit-blue shadow-lg glow-primary hover:text-white" 
                          : "bg-white/20 text-white hover:bg-white/30"
                      }`}
                      onClick={() => setUserRole("student")}
                    >
                      <Users className="h-4 w-4 mr-2" />
                      Student Portal
                    </Button>
                    <Button 
                      variant={userRole === "admin" ? "default" : "ghost"}
                      className={`flex-1 transition-all duration-300 ${
                        userRole === "admin" 
                          ? "bg-white text-vit-blue shadow-lg glow-primary  hover:text-white" 
                          : "bg-white/20 text-white hover:bg-white/30"
                      }`}
                      onClick={() => setUserRole("admin")}
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Admin Dashboard
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 border border-white/30 rounded-full"></div>
              <div className="absolute top-20 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white/40 rounded-full"></div>
              <div className="absolute bottom-10 right-1/3 w-24 h-24 border border-white/20 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Student Dashboard */}
        {userRole === "student" && (
          <div className="animate-fade-in">
            <Tabs defaultValue="overview" className="space-y-8">
              <div className="glass-card p-1 rounded-2xl">
                <TabsList className="grid w-full grid-cols-3 bg-transparent gap-2 p-2">
                  <TabsTrigger 
                    value="overview" 
                    className="data-[state=active]:bg-white data-[state=active]:text-vit-blue data-[state=active]:shadow-lg rounded-xl py-3 font-medium transition-all duration-300"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger 
                    value="requests"
                    className="data-[state=active]:bg-white data-[state=active]:text-vit-blue data-[state=active]:shadow-lg rounded-xl py-3 font-medium transition-all duration-300"
                  >
                    My Requests
                  </TabsTrigger>
                  <TabsTrigger 
                    value="profile"
                    className="data-[state=active]:bg-white data-[state=active]:text-vit-blue data-[state=active]:shadow-lg rounded-xl py-3 font-medium transition-all duration-300"
                  >
                    Profile
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="overview" className="space-y-8 mt-8">
                <div className="grid gap-8">
                  <QuickActions />
                  <StatusOverview />
                </div>
              </TabsContent>
              
              <TabsContent value="requests" className="mt-8">
                <Card className="glass-card border-0 rounded-2xl">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl">My Request History</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gradient-to-br from-vit-blue to-vit-orange rounded-full flex items-center justify-center mx-auto mb-4">
                        <BarChart3 className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Request History</h3>
                      <p className="text-muted-foreground max-w-md mx-auto">
                        Detailed view of all your submitted requests with real-time status tracking will be shown here.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="profile" className="mt-8">
                <Card className="glass-card border-0 rounded-2xl">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl">Student Profile</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gradient-to-br from-vit-blue to-vit-orange rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Profile Management</h3>
                      <p className="text-muted-foreground max-w-md mx-auto">
                        Manage your profile information, hostel details, and account settings.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {/* Admin Dashboard */}
        {userRole === "admin" && (
          <div className="animate-fade-in">
            <Tabs defaultValue="dashboard" className="space-y-8">
              <div className="glass-card p-1 rounded-2xl">
                <TabsList className="grid w-full grid-cols-4 bg-transparent gap-2 p-2">
                  <TabsTrigger 
                    value="dashboard"
                    className="data-[state=active]:bg-white data-[state=active]:text-vit-blue data-[state=active]:shadow-lg rounded-xl py-3 font-medium transition-all duration-300"
                  >
                    Dashboard
                  </TabsTrigger>
                  <TabsTrigger 
                    value="complaints"
                    className="data-[state=active]:bg-white data-[state=active]:text-vit-blue data-[state=active]:shadow-lg rounded-xl py-3 font-medium transition-all duration-300"
                  >
                    Complaints
                  </TabsTrigger>
                  <TabsTrigger 
                    value="analytics"
                    className="data-[state=active]:bg-white data-[state=active]:text-vit-blue data-[state=active]:shadow-lg rounded-xl py-3 font-medium transition-all duration-300"
                  >
                    Analytics
                  </TabsTrigger>
                  <TabsTrigger 
                    value="settings"
                    className="data-[state=active]:bg-white data-[state=active]:text-vit-blue data-[state=active]:shadow-lg rounded-xl py-3 font-medium transition-all duration-300"
                  >
                    Settings
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="dashboard" className="space-y-8 mt-8">
                <AdminOverview />
              </TabsContent>
              
              <TabsContent value="complaints" className="mt-8">
                <Card className="glass-card border-0 rounded-2xl">
                  <CardHeader className="pb-6">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <div className="p-2 bg-gradient-to-br from-vit-blue to-vit-orange rounded-xl">
                        <BarChart3 className="h-6 w-6 text-white" />
                      </div>
                      Complaints Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gradient-to-br from-vit-blue to-vit-orange rounded-full flex items-center justify-center mx-auto mb-4">
                        <Settings className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Advanced Management Tools</h3>
                      <p className="text-muted-foreground max-w-md mx-auto">
                        Advanced filtering, assignment, tracking tools, and real-time complaint monitoring dashboard.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="analytics" className="mt-8">
                <Card className="glass-card border-0 rounded-2xl">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl">Analytics & Reports</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gradient-to-br from-vit-blue to-vit-orange rounded-full flex items-center justify-center mx-auto mb-4">
                        <BarChart3 className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Performance Analytics</h3>
                      <p className="text-muted-foreground max-w-md mx-auto">
                        Comprehensive analytics, performance metrics, trend analysis, and downloadable reports.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="settings" className="mt-8">
                <Card className="glass-card border-0 rounded-2xl">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl">System Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gradient-to-br from-vit-blue to-vit-orange rounded-full flex items-center justify-center mx-auto mb-4">
                        <Settings className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">System Configuration</h3>
                      <p className="text-muted-foreground max-w-md mx-auto">
                        User management, system configuration, administrative controls, and security settings.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
  );
};

export default Index;

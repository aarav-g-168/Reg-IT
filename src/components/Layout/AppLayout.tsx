"use client"; // This directive is not needed in Vite, but safe to keep

import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Bell, Settings, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";

interface AppLayoutProps {
  children: ReactNode;
  userRole?: "student" | "admin";
  userName?: string;
}

export default function AppLayout({
  children,
  userRole = "student",
  userName = "Student",
}: AppLayoutProps) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-orange-500" />
            <div>
              <h1 className="text-xl font-bold text-foreground">VIT Hostel</h1>
              <p className="text-sm text-muted-foreground">Management System</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-3 border-l border-border pl-4">
              <div className="text-right">
                <p className="text-sm font-medium text-foreground">{userName}</p>
                <p className="text-xs text-muted-foreground capitalize">
                  {userRole}
                </p>
              </div>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-6 py-8">{children}</main>
    </div>
  );
}
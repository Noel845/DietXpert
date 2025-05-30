import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/context/AuthContext";
import { User, Settings, LogOut } from "lucide-react";

const Profile = () => {
  const { user, logout } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  if (!user) {
    navigate("/login");
    return null;
  }

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would update the user profile in the backend
    toast({
      title: "Profile Updated",
      description: "Your profile information has been updated successfully.",
    });
  };

  const handlePasswordUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would update the user's password
    toast({
      title: "Password Updated",
      description: "Your password has been updated successfully.",
    });
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 max-w-7xl py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Your Profile</h1>
          <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
            <LogOut size={18} />
            <span>Logout</span>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="h-12 w-12 text-gray-500" />
                </div>
                <CardTitle>{user.name}</CardTitle>
                <p className="text-gray-500">{user.email}</p>
              </CardHeader>
              <CardContent>
                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-500 mb-1">Account created</p>
                  <p>March 2023</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-2">
            <Tabs defaultValue="profile">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="profile" className="flex-1">
                  <User size={16} className="mr-2" />
                  Profile Information
                </TabsTrigger>
                <TabsTrigger value="settings" className="flex-1">
                  <Settings size={16} className="mr-2" />
                  Account Settings
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <p className="text-gray-500">Update your personal information</p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleProfileUpdate} className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      
                      <Button type="submit">Save Changes</Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="settings">
                <Card>
                  <CardHeader>
                    <CardTitle>Change Password</CardTitle>
                    <p className="text-gray-500">Update your password to keep your account secure</p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handlePasswordUpdate} className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="currentPassword" className="text-sm font-medium">
                          Current Password
                        </label>
                        <Input
                          id="currentPassword"
                          type="password"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="newPassword" className="text-sm font-medium">
                          New Password
                        </label>
                        <Input
                          id="newPassword"
                          type="password"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="confirmPassword" className="text-sm font-medium">
                          Confirm New Password
                        </label>
                        <Input
                          id="confirmPassword"
                          type="password"
                        />
                      </div>
                      
                      <Button type="submit">Update Password</Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
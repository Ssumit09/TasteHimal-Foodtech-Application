import { useState } from 'react';
import { User, MapPin, Clock, Package, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { userProfile } from '@/data/mockData';

const Profile = () => {
  const [user] = useState(userProfile);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="shadow-card mb-8">
          <CardContent className="p-6">
            <div className="flex items-center space-x-6">
              <Avatar className="w-20 h-20">
                <AvatarFallback className="text-2xl font-semibold bg-gradient-himalayan text-white">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-foreground mb-1">
                  {user.name}
                </h1>
                <p className="text-muted-foreground mb-2">{user.email}</p>
                <p className="text-muted-foreground">{user.phone}</p>
              </div>
              
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="orders">Order History</TabsTrigger>
            <TabsTrigger value="addresses">Addresses</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="orders" className="mt-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Recent Orders
              </h2>
              
              {user.orders.map((order) => (
                <Card key={order.id} className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Order #{order.id}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {order.restaurant}
                        </p>
                      </div>
                      
                      <Badge 
                        variant={order.status === 'Delivered' ? 'default' : 'secondary'}
                        className={order.status === 'Delivered' ? 'bg-success' : ''}
                      >
                        {order.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Package className="h-4 w-4" />
                        <span>{order.items.join(', ')}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{order.date}</span>
                        </div>
                        
                        <span className="font-semibold text-foreground">
                          ₹{order.total}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 mt-4">
                      <Button variant="outline" size="sm">
                        Reorder
                      </Button>
                      <Button variant="outline" size="sm">
                        Rate Order
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="addresses" className="mt-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-foreground">
                  Saved Addresses
                </h2>
                <Button className="bg-gradient-himalayan hover:bg-gradient-himalayan/90">
                  Add New Address
                </Button>
              </div>
              
              {user.addresses.map((address) => (
                <Card key={address.id} className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-muted-foreground mt-1" />
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-semibold text-foreground">
                              {address.type}
                            </h3>
                            {address.isDefault && (
                              <Badge variant="secondary" className="text-xs">
                                Default
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground">
                            {address.address}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          Delete
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="settings" className="mt-8">
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-foreground">Notifications</h3>
                      <p className="text-sm text-muted-foreground">
                        Get updates about your orders
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-foreground">Privacy</h3>
                      <p className="text-sm text-muted-foreground">
                        Control your data and privacy settings
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-foreground">Payment Methods</h3>
                      <p className="text-sm text-muted-foreground">
                        Manage your saved payment methods
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Help & Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    Help Center
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Contact Support
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Terms of Service
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Privacy Policy
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <Button 
                    variant="destructive" 
                    className="w-full"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
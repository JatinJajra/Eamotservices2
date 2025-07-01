import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SpinnerEnergyLoader } from "@/components/ui/energy-loader";

// Form schema for login
const loginFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
  rememberMe: z.boolean().default(false),
});

// Form schema for registration
const registerFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
  confirmPassword: z.string(),
  terms: z.boolean().refine(val => val === true, { message: "You must accept the terms and conditions." }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"],
});

// Type definitions for the form values
type LoginFormValues = z.infer<typeof loginFormSchema>;
type RegisterFormValues = z.infer<typeof registerFormSchema>;

export default function ClientPortalLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const [, navigate] = useLocation();
  
  // Login form handling
  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });
  
  // Registration form handling
  const registerForm = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });
  
  // Handle login submission
  const onLoginSubmit = (values: LoginFormValues) => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      console.log("Login values:", values);
      setIsLoading(false);
      navigate("/client-portal/dashboard");
    }, 1500);
  };
  
  // Handle registration submission
  const onRegisterSubmit = (values: RegisterFormValues) => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      console.log("Register values:", values);
      setIsLoading(false);
      navigate("/client-portal/dashboard");
    }, 1500);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="w-full max-w-6xl flex flex-col lg:flex-row shadow-xl rounded-xl overflow-hidden">
        {/* Left side - Form */}
        <div className="w-full lg:w-1/2 bg-white p-6 md:p-12">
          <div className="mx-auto w-full max-w-sm">
            <div className="mb-10 text-center">
              <img src="assets/img/logo/logo-eamot.png" alt="EAMOT Logo" className="h-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900">EAMOT Energy Portal</h2>
              <p className="mt-2 text-gray-600">Access your energy management dashboard</p>
            </div>
            
            <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <Form {...loginForm}>
                  <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-6">
                    <FormField
                      control={loginForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@company.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={loginForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex items-center justify-between">
                            <FormLabel>Password</FormLabel>
                            <Button variant="link" className="p-0 h-auto text-sm">
                              Forgot password?
                            </Button>
                          </div>
                          <FormControl>
                            <Input type="password" placeholder="••••••••" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={loginForm.control}
                      name="rememberMe"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                          <FormControl>
                            <Checkbox 
                              checked={field.value} 
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="font-normal">Remember me</FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary-700 py-6"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <SpinnerEnergyLoader size="xs" color="primary" className="mr-2" />
                          <span>Logging in...</span>
                        </div>
                      ) : (
                        "Sign In"
                      )}
                    </Button>
                  </form>
                </Form>
              </TabsContent>
              
              <TabsContent value="register">
                <Form {...registerForm}>
                  <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-6">
                    <FormField
                      control={registerForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Smith" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={registerForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@company.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={registerForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="••••••••" {...field} />
                            </FormControl>
                            <FormDescription className="text-xs">
                              At least 8 characters
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={registerForm.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                              <Input type="password" placeholder="••••••••" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={registerForm.control}
                      name="terms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                          <FormControl>
                            <Checkbox 
                              checked={field.value} 
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="font-normal text-sm">
                              I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary-700 py-6"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <SpinnerEnergyLoader size="xs" color="primary" className="mr-2" />
                          <span>Creating Account...</span>
                        </div>
                      ) : (
                        "Create Account"
                      )}
                    </Button>
                  </form>
                </Form>
              </TabsContent>
            </Tabs>
            
            <div className="mt-8 text-center text-sm text-gray-500">
              <p>
                By continuing, you agree to EAMOT's
                {' '}<a href="#" className="text-primary hover:underline">Terms of Service</a>{' '}
                and confirm you have read our
                {' '}<a href="#" className="text-primary hover:underline">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
        
        {/* Right side - Info */}
        <div className="hidden lg:block w-1/2 bg-gradient-to-br from-primary to-primary-700 text-white p-12 relative">
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <svg width="100%" height="100%" className="absolute inset-0">
              <pattern id="circuit-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M10,10 L50,10 L50,50 L90,50 M50,50 L50,90 M10,50 L30,50 M70,10 L70,30" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none" />
                <circle cx="10" cy="10" r="3" fill="currentColor" />
                <circle cx="50" cy="10" r="3" fill="currentColor" />
                <circle cx="10" cy="50" r="3" fill="currentColor" />
                <circle cx="50" cy="50" r="3" fill="currentColor" />
                <circle cx="50" cy="90" r="3" fill="currentColor" />
                <circle cx="90" cy="50" r="3" fill="currentColor" />
                <circle cx="70" cy="10" r="3" fill="currentColor" />
                <circle cx="70" cy="30" r="3" fill="currentColor" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Welcome to EAMOT Energy Portal</h2>
            <p className="text-lg mb-10 opacity-90">
              Monitor, analyze and optimize your energy usage with our comprehensive energy management platform.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-white/10 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v8"/>
                    <path d="m16 6-4 4-4-4"/>
                    <path d="M12 22v-8"/>
                    <path d="m16 18-4-4-4 4"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-time Monitoring</h3>
                  <p className="opacity-80">
                    Track your energy consumption across all facilities in real-time with detailed analytics and visualizations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-white/10 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
                  <p className="opacity-80">
                    Get personalized recommendations to reduce energy consumption and costs based on your usage patterns.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-white/10 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sustainable Solutions</h3>
                  <p className="opacity-80">
                    Reduce your carbon footprint and achieve sustainability goals with our energy-efficient recommendations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-lg flex items-center">
              <span className="text-accent font-medium">Already trusted by 500+ businesses across India</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
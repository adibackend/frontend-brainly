import { useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { LockIcon, MailIcon, UserIcon } from "lucide-react";
import axios from "axios";
import { BACKEND_URL } from "@/config";
import { useNavigate } from "react-router-dom";

interface AuthFormsProps {
  initialTab?: "login" | "signup";
}

export default function AuthForms({ initialTab = "login" }: AuthFormsProps) {
  const [activeTab, setActiveTab] = useState<"login" | "signup">(initialTab);
  const { toast } = useToast();
  const navigate = useNavigate();

  const loginEmailRef = useRef<HTMLInputElement | null>(null);
  const loginPasswordRef = useRef<HTMLInputElement | null>(null);
  const signupNameRef = useRef<HTMLInputElement | null>(null);
  const signupEmailRef = useRef<HTMLInputElement | null>(null);
  const signupPasswordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (activeTab === "login") {
      const email = loginEmailRef.current?.value || "";
      const password = loginPasswordRef.current?.value || "";

      try {
        const response = await axios.post(BACKEND_URL + "api/v1/signin", {
          username: email,
          password: password,
        });

        toast({
          title: "Login Successful",
          description: `Welcome back, ${email}!`,
        });

        const jwt = response.data.token;
        localStorage.setItem("token", jwt);

        navigate("/dashboard");
      } catch (error) {
        toast({
          title: "Login Failed",
          description: "Invalid email or password",
          variant: "destructive",
        });
      }
    } else {
      const name = signupNameRef.current?.value || "";
      const email = signupEmailRef.current?.value || "";
      const password = signupPasswordRef.current?.value || "";

      try {
        await axios.post(BACKEND_URL + "api/v1/signup", {
          username: email,
          password: password,
        });

        toast({
          title: "Signup Successful",
          description: `Welcome, ${name}! Please log in.`,
        });
        setActiveTab("login");
      } catch (error) {
        toast({
          title: "Signup Failed",
          description: "An error occurred. Please try again.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <Card className="w-[400px] shadow-lg">
      <CardHeader className="bg-slate-600 text-white">
        <CardTitle className="text-2xl font-bold">Welcome</CardTitle>
        <CardDescription className="text-slate-100">
          Login or create a new account
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "login" | "signup")}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Signup</TabsTrigger>
          </TabsList>

          {/* Login Form */}
          <TabsContent value="login">
            <form onSubmit={handleSubmit}>
              <div className="grid w-full gap-4">
                <div>
                  <Label htmlFor="login-email">Email</Label>
                  <div className="relative">
                    <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <Input id="login-email" type="email" placeholder="Enter your email" required className="pl-10" ref={loginEmailRef} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="login-password">Password</Label>
                  <div className="relative">
                    <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <Input id="login-password" type="password" placeholder="Enter your password" required className="pl-10" ref={loginPasswordRef} />
                  </div>
                </div>
              </div>
              <CardFooter className="mt-6 px-0">
                <Button type="submit" className="w-full bg-slate-600 text-white hover:bg-slate-700">Login</Button>
              </CardFooter>
            </form>
          </TabsContent>

          {/* Signup Form */}
          <TabsContent value="signup">
            <form onSubmit={handleSubmit}>
              <div className="grid w-full gap-4">
                <div>
                  <Label htmlFor="signup-name">Name</Label>
                  <div className="relative">
                    <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <Input id="signup-name" type="text" placeholder="Enter your name" required className="pl-10" ref={signupNameRef} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="signup-email">Email</Label>
                  <div className="relative">
                    <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <Input id="signup-email" type="email" placeholder="Enter your email" required className="pl-10" ref={signupEmailRef} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="signup-password">Password</Label>
                  <div className="relative">
                    <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <Input id="signup-password" type="password" placeholder="Create a password" required className="pl-10" ref={signupPasswordRef} />
                  </div>
                </div>
              </div>
              <CardFooter className="mt-6 px-0">
                <Button type="submit" className="w-full bg-slate-600 text-white hover:bg-slate-700">Sign Up</Button>
              </CardFooter>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

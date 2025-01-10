import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const SignIn: React.FC = () => {
  return (
    <div className="flex justify-center items-center font-chakra-petch h-[650px] dark:bg-custom-gradient">
      <Card className="w-[350px] dark:bg-custom-gradient">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>
            login in to have access to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-5 ">
              <div className="flex flex-col space-y-3.5">
                <Label htmlFor="framework">Email</Label>
                <Input id="email" placeholder="Enter your email" />
              </div>
              <div className="flex flex-col space-y-3.5">
                <Label htmlFor="framework">Password</Label>
                <Input id="password" placeholder="Enter your password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex  flex-col  gap-2 ">
          <Button variant="outline" className="w-full ">
            Sign In
          </Button>
          <div className="flex w-full justify-center items-center">
            <p className="text-sm">Don't have an account</p>
            <Button variant="link" className="text-[#6EC1E4] ">
              <Link to="/sign-up">Sign Up</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignIn;

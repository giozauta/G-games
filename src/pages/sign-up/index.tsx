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
import { useSignUp } from "@/react-query/mutation/sign-up";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FormValues } from "./types";
import { signUpSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUp: React.FC = () => {
  const { control, handleSubmit, formState } = useForm<FormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { mutate: handleSignUp } = useSignUp();

  const onSubmit = (fieldValues: FormValues) => {
    handleSignUp({
      email: fieldValues.email,
      password: fieldValues.password,
    });
  };

  return (
    <div className="flex justify-center items-center font-chakra-petch h-[750px] dark:bg-custom-gradient">
      <Card className="w-[350px] dark:bg-custom-gradient">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>register if you have an account</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-5 ">
              <div className="flex flex-col space-y-3.5">
                <Label htmlFor="framework">Name</Label>
                <Controller
                  name="name"
                  control={control}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <Input
                        value={value}
                        onChange={onChange}
                        id="name"
                        placeholder="enter your name"
                      />
                    );
                  }}
                />
                <Label className="text-red-600">
                  {formState.errors.name?.message}
                </Label>
              </div>

              <div className="flex flex-col space-y-3.5">
                <Label htmlFor="framework">Email</Label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <Input
                        value={value}
                        onChange={onChange}
                        id="email"
                        placeholder="enter your email"
                      />
                    );
                  }}
                />
                <Label className="text-red-600">
                  {formState.errors.email?.message}
                </Label>
              </div>

              <div className="flex flex-col space-y-3.5">
                <Label htmlFor="framework">Password</Label>

                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => {
                    return (
                      <Input
                        {...field}
                        id="password"
                        placeholder="enter your password"
                      />
                    );
                  }}
                />
                <Label className="text-red-600">
                  {formState.errors.password?.message}
                </Label>
              </div>

              <div className="flex flex-col space-y-3.5">
                <Label htmlFor="framework">ConfirmPassword</Label>

                <Controller
                  name="confirmPassword"
                  control={control}
                  render={({ field }) => {
                    return (
                      <Input
                        {...field}
                        id="confirmPassword"
                        placeholder="confirm your password"
                      />
                    );
                  }}
                />
                <Label className="text-red-600">
                  {formState.errors.confirmPassword?.message}
                </Label>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex  flex-col  gap-2">
          <Button
            onClick={handleSubmit(onSubmit)}
            variant="outline"
            className="w-full"
          >
            Sign up
          </Button>
          <div className="flex w-full justify-center items-center">
            <p className="text-sm"> have an account ?</p>
            <Button variant="link" className="text-[#6EC1E4]">
              <Link to="/sign-in">Sign In</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;

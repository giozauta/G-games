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
import i18next from "i18next";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FormValues } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "./schema";
import { useSignIn } from "@/react-query/mutation/sign-in";

const SignIn: React.FC = () => {
  //
  const location = useLocation();
  const toNavigate =
    location?.state?.from.pathname + location?.state?.from.search || "/en/home";
  //
  const { control, handleSubmit, formState } = useForm<FormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  //
  const { t } = useTranslation();
  //
  const lang = i18next.language;
  const currentLang = lang ?? "en";
  //
  const navigate = useNavigate();
  //
  const { mutate: handleSignIn } = useSignIn();
  //
  const onSubmit = (fieldValues: FormValues) => {
    handleSignIn(
      {
        email: fieldValues.email,
        password: fieldValues.password,
      },
      {
        onSuccess: () => {
          navigate(toNavigate);
        },
      },
    );
  };
  //
  return (
    <div className="flex justify-center items-center font-chakra-petch h-[650px] dark:bg-custom-gradient">
      <Card className="w-[350px] dark:bg-custom-gradient">
        <CardHeader>
          <CardTitle>{t("sign.signIn")}</CardTitle>
          <CardDescription>{t("sign.instruction")}</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-5 ">
              <div className="flex flex-col space-y-3.5">
                <Label htmlFor="framework">{t("sign.email")}</Label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => {
                    return (
                      <Input
                        id="email"
                        {...field}
                        placeholder={t("sign.email-placeholder")}
                      />
                    );
                  }}
                />
                {formState.errors.email?.message && (
                  <Label className="text-red-600">
                    {t(`signErrors.${formState.errors.email?.message}`)}
                  </Label>
                )}
              </div>
              <div className="flex flex-col space-y-3.5">
                <Label htmlFor="framework">{t("sign.password")}</Label>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => {
                    return (
                      <Input
                        {...field}
                        type="password"
                        id="password"
                        placeholder={t("sign.password-placeholder")}
                      />
                    );
                  }}
                />

                {formState.errors.password?.message && (
                  <Label className="text-red-600">
                    {t(`signErrors.${formState.errors.password?.message}`)}
                  </Label>
                )}
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex  flex-col  gap-2 ">
          <Button
            onClick={handleSubmit(onSubmit)}
            variant="outline"
            className="w-full "
          >
            {t("sign.signIn")}
          </Button>
          <div className="flex w-full justify-center items-center">
            <p className="text-sm">{t("sign.dont-have-account")}</p>
            <Button variant="link" className="text-[#6EC1E4] ">
              <Link to={`/${currentLang}/sign-up`}>{t("sign.signUp")}</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignIn;

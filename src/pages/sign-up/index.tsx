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
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { DEFAULT_LAYOUT_PATH } from "@/Routes/default/index.enum";

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
  const { t } = useTranslation();
  const lang = i18next.language;
  const currentLang = lang ?? "en";

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
          <CardTitle className="text-2xl text-orange2">
            {t("sign.signUp")}
          </CardTitle>
          <CardDescription>{t("sign.instruction")}</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-5 ">
              <div className="flex flex-col space-y-3.5">
                <Label
                  className="text-blue2 dark:text-green2 "
                  htmlFor="framework"
                >
                  {t("sign.name")}
                </Label>
                <Controller
                  name="name"
                  control={control}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <Input
                        value={value}
                        onChange={onChange}
                        id="name"
                        placeholder={t("sign.name-placeholder")}
                      />
                    );
                  }}
                />
                {formState.errors.name?.message && (
                  <Label className="text-red-600">
                    {t(`signErrors.${formState.errors.name?.message}`)}
                  </Label>
                )}
              </div>

              <div className="flex flex-col space-y-3.5">
                <Label
                  className="text-blue2 dark:text-green2 "
                  htmlFor="framework"
                >
                  {t("sign.email")}
                </Label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <Input
                        value={value}
                        onChange={onChange}
                        id="email"
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
                <Label
                  className="text-blue2 dark:text-green2 "
                  htmlFor="framework"
                >
                  {t("sign.password")}
                </Label>

                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => {
                    return (
                      <Input
                        {...field}
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

              <div className="flex flex-col space-y-3.5">
                <Label
                  className="text-blue2 dark:text-green2 "
                  htmlFor="framework"
                >
                  {t("sign.confirmPassword")}
                </Label>

                <Controller
                  name="confirmPassword"
                  control={control}
                  render={({ field }) => {
                    return (
                      <Input
                        {...field}
                        id="confirmPassword"
                        placeholder={t("sign.confirmPassword")}
                      />
                    );
                  }}
                />
                {formState.errors.confirmPassword?.message && (
                  <Label className="text-red-600">
                    {t(
                      `signErrors.${formState.errors.confirmPassword?.message}`,
                    )}
                  </Label>
                )}
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
            {t("sign.signUp")}
          </Button>
          <div className="flex w-full justify-center items-center">
            <p className="text-sm"> {t("sign.have-an-acount")}</p>
            <Button variant="link">
              <Link
                className="text-orange2"
                to={`/${currentLang}/${DEFAULT_LAYOUT_PATH.SIGN_IN}`}
              >
                {t("sign.signIn")}
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;

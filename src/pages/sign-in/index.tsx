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
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SignIn: React.FC = () => {
  const { t } = useTranslation();

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
                <Input id="email" placeholder={t("sign.email-placeholder")} />
              </div>
              <div className="flex flex-col space-y-3.5">
                <Label htmlFor="framework">{t("sign.password")}</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder={t("sign.password-placeholder")}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex  flex-col  gap-2 ">
          <Button variant="outline" className="w-full ">
            {t("sign.signIn")}
          </Button>
          <div className="flex w-full justify-center items-center">
            <p className="text-sm">{t("sign.dont-have-account")}</p>
            <Button variant="link" className="text-[#6EC1E4] ">
              <Link to="/sign-up">{t("sign.signUp")}</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignIn;

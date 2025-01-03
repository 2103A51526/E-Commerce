import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";

function AuthLogin() {
  const initialState = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);

  function onSubmit() {}

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Login to your account
        </h1>
        <p className="mt-2">
        Don't have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/register"
          >git 
            Register here
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthLogin;

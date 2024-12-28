import CommonForm from "@/components/common/form";
import { loginFormControls, registerFormControls } from "@/config";
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
          Sign in
        </h1>
        <p className="mt-2">
          Already have an Account{" "}
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthLogin;

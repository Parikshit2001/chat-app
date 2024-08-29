import { SubmitHandler, useForm } from "react-hook-form";
import { PrimaryButton } from "../components/Buttons";
import { Link } from "react-router-dom";
import axios from "axios";

type FormFields = {
  username: string;
  password: string;
};

const onSubmit: SubmitHandler<FormFields> = (data) => {
  axios
    .post("http://localhost:3000/api/user/signin", data, {
      withCredentials: true,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error.response.data);
    });
};

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  return (
    <div className="bg-slate-100 h-screen flex flex-col items-center justify-center">
      <div className="py-4 px-4 bg-white flex flex-col items-center space-y-5 rounded-lg min-w-[500px]">
        <div>
          <h1 className="text-4xl">SignIn</h1>
        </div>
        <form
          className="flex flex-col w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="border py-1 rounded px-2 mt-4"
            type="text"
            {...register("username", {
              required: "username is required field",
            })}
            placeholder="username"
          />
          {errors.username && (
            <div className="text-red-500 text-xs font-semibold">
              {errors.username?.message}
            </div>
          )}
          <input
            className="border py-1 rounded px-2 mt-4"
            type="password"
            {...register("password", {
              required: "Password is required field",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters in length",
              },
            })}
            placeholder="password"
          />
          {errors.password && (
            <div className="text-red-500 text-xs font-semibold">
              {errors.password.message}
            </div>
          )}
          <PrimaryButton className="my-4" type="submit" value="Submit" />
        </form>
        <div>
          <p className="text-sm">
            New Here!{" "}
            <Link to={"/signup"} className="underline font-semibold">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

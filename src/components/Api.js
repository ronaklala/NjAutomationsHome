import axios from "axios";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

export const getProducts = () => {
  return axios.get(
    "https://determined-pear-apron.cyclic.app/api/admin/getProducts"
  );
};

/**
 * The `getOrders` function retrieves the orders for a user from an API endpoint, using the user's ID
 * stored in local storage.
 * @returns the result of the axios.get() call, which is a Promise that will resolve to the response
 * data from the API endpoint.
 */
export const getOrders = () => {
  const userdata = JSON.parse(localStorage.getItem("user"));

  if (userdata === null) {
    window.location.href = "/Not-Found";
  } else {
    const userId = userdata._id;
    return axios.get(
      "https://determined-pear-apron.cyclic.app/api/user/orders/" + userId
    );
  }
};

export const getSingleProduct = (id) => {
  return axios.get(
    "https://determined-pear-apron.cyclic.app/api/admin/singleProduct/" + id
  );
};

const registerNewUser = (user) => {
  return axios.post(
    "https://determined-pear-apron.cyclic.app/api/user/register_uesr",
    user
  );
};

const loginUser = (user) => {
  return axios.post(
    "https://determined-pear-apron.cyclic.app/api/user/login_user",
    user
  );
};

/**
 * The `useRegister` function is a custom hook that returns a mutation function for registering a new
 * user, and includes a success callback that displays a success toast message and redirects the user
 * to the login page after a successful registration.
 * @returns The `useRegister` function is returning the result of calling the `useMutation` hook with
 * `registerNewUser` as the first argument and an object as the second argument.
 */
export const useRegister = () => {
  return useMutation(registerNewUser, {
    onSuccess: () => {
      toast.success("Registration Successful");
      setInterval(() => {
        window.location.href = "/login";
      }, 2000);
    },
    onError: () => {
      toast.error("Internal Server Error");
    },
  });
};

/**
 * The `useLogin` function is a custom hook that handles the login functionality, including success and
 * error handling.
 * @returns The code is returning a custom hook called `useLogin`.
 */
export const useLogin = () => {
  return useMutation(loginUser, {
    onSuccess: (result) => {
      toast.success("Logged in Successfully");
      localStorage.setItem("user", JSON.stringify(result.data));
      setInterval(() => {
        window.location.href = "/";
      }, 1500);
    },
    onError: (err) => {
      if (err.response.status === 401) {
        toast.error("Invalid Password");
      } else if (err.response.status === 404) {
        toast.error("No Such User Found");
      } else {
        toast.error("Internal Server Error, Please Try Again Later");
      }
    },
  });
};

export const getCategory = () => {
  return axios.get(
    "https://determined-pear-apron.cyclic.app/api/admin/getAllCategories"
  );
};

export const getProductsInCategory = (id) => {
  return axios.get(
    "https://determined-pear-apron.cyclic.app/api/admin/getAllProductsinCategory/" +
      id.toString()
  );
};

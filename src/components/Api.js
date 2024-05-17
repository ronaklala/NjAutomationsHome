import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  GetCategoriesQuery,
  GetOrdersQuery,
  GetProductsInCategoryQuery,
  GetProductsQuery,
  GetSingleProductQuery,
} from "./Queries";

export const useGetProducts = () => {
  return useQuery("products", async () => {
    try {
      const response = await axios.post("http://localhost:5999/graphql", {
        query: GetProductsQuery,
      });

      return response.data.data.products;
    } catch (error) {
      throw new Error("Failed to fetch products");
    }
  });
};

/**
 * The `getOrders` function retrieves the orders for a user from an API endpoint, using the user's ID
 * stored in local storage.
 * @returns the result of the axios.get() call, which is a Promise that will resolve to the response
 * data from the API endpoint.
 */
export const useGetOrdersHook = () => {
  const navigate = useNavigate();

  try {
    return useQuery("Orders", async () => {
      const userdata = JSON.parse(localStorage.getItem("user"));

      // Redirect to Not-Found if userdata is null
      if (!userdata) {
        navigate("/Not-Found");
        return; // Early return to prevent unnecessary query execution
      }

      const userId = userdata._id;

      try {
        const response = await axios.post("http://localhost:5999/graphql", {
          query: GetOrdersQuery,
          variables: { getSingleUserOrdersId: userId },
        });

        return response.data.data.getSingleUserOrders; // Assuming response.data contains the orders data
      } catch (err) {
        console.log("Internal Server Error", err);
        throw err; // Re-throw for potential error handling in the component
      }
    });
  } catch (error) {
    // Handle potential errors during localStorage access (e.g., parsing issues)
    console.error("Error accessing localStorage:", error);
    // Optionally, navigate to an error page or display an error message
  }
};

export const useGetSingleProduct = (id) => {
  return useQuery("SingleProduct", async () => {
    try {
      const response = await axios.post("http://localhost:5999/graphql", {
        query: GetSingleProductQuery,
        variables: { getSingleProductId: id },
      });

      return response.data.data.getSingleProduct; // Assuming successful response
    } catch (error) {
      console.error("Error fetching product:", error);
      throw error; // Re-throw for handling in your component
    }
  });
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

export const useGetCategoryHook = () => {
  return useQuery("getCategories", async () => {
    try {
      const categories = await axios.post("http://localhost:5999/graphql", {
        query: GetCategoriesQuery,
      });

      return categories.data.data.getCategories;
    } catch (err) {
      console.log("Internal Server Error");
    }
  });
};

export const GetProductsInCategoryHook = (id) => {
  return useQuery("CategoryProducts", async () => {
    try {
      const products = await axios.post("http://localhost:5999/graphql", {
        query: GetProductsInCategoryQuery,
        variables: { categoryId: id },
      });

      return products.data.data.getProductByCategory;
    } catch (err) {
      throw new Error("Failed to Fetch Products");
    }
  });
};

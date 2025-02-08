import { api } from "./index";

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    signin: build.mutation({
      query: (userData) => ({
        url: "/auth/login",
        method: "POST",
        body: userData,
        headers: { "Content-Type": "application/json" },
      }),
    }),
    getMe: build.query({
      query: () => {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          console.warn("Token topilmadi!");
        }
        return {
          url: "/auth/me",
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useSigninMutation, useGetMeQuery } = authApi;

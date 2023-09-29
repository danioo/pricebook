import type { ReactElement } from "react";

export default function LoginPage(): ReactElement {
  return (
    <form action="/auth/sign-in" method="post">
      <label htmlFor="email">Email</label>
      <input
        className="mt-1 block rounded-md bg-gray-100 border-transparent"
        name="email"
      />
      <label htmlFor="password">Password</label>
      <input
        className="mt-1 block rounded-md bg-gray-100 border-transparent"
        name="password"
        type="password"
      />

      <button
        className="mr-2 mt-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        type="submit"
      >
        Sign In
      </button>
      <button
        className="mr-2 mt-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        formAction="/auth/sign-up"
        type="submit"
      >
        Sign Up
      </button>
    </form>
  );
}

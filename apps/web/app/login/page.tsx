export default function LoginPage() {
  return (
    <>
      <form action="/auth/sign-in" method="post">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          className="mt-1 block rounded-md bg-gray-100 border-transparent"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          className="mt-1 block rounded-md bg-gray-100 border-transparent"
        />

        <button
          type="submit"
          className="mr-2 mt-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign In
        </button>
        <button
          formAction="/auth/sign-up"
          className="mr-2 mt-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign Up
        </button>
      </form>
    </>
  );
}

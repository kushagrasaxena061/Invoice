import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Link from "next/link";

export default function SignIn({ providers }) {
  return (
    <>
      <div>
        <div className=" flex flex-col items-center justify-center min-h-screen py-2 -mt-10 px-14 text-center">
          <div className="navbar flex justify-center items-center p-4 cursor-pointer">
            <div className="mb-[3rem] flex text-4xl justify-start items-center font-bold cursor-pointer md:text-5xl">
              <Link href="/">
                <a>
                  <div>
                    <img
                      src="/images/images/yt_music_logo.svg"
                      alt="no"
                      width="200"
                      height="120"
                    />
                  </div>
                </a>
              </Link>
            </div>
          </div>

          <div className="-mt-4">
            {Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <div>
                  <form className="max-w-lg  rounded-lg mx-auto">
                    <div className="flex flex-col gap-4 p-4 md:p-8">
                      <div>
                        <label
                          htmlFor="email"
                          className="inline-block font-semibold text-white text-sm sm:text-base mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          autoComplete="off"
                          name="email"
                          className="w-full bg-white text-black border font-semibold focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="password"
                          className="inline-block font-semibold text-white text-sm sm:text-base mb-2"
                        >
                          Password
                        </label>
                        <input
                          name="password"
                          type="password"
                          placeholder="Enter your password"
                          className="w-full bg-gray-50 text-gray-800 font-semibold border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                        />
                      </div>

                      <button className="block bg-zinc-700 hover:bg-zinc-600 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 mt-4">
                        Login
                      </button>

                      <div className="flex justify-center items-center relative">
                        <span className="h-px bg-gray-300 absolute inset-x-0"></span>
                        <span className="bg-white text-black text-sm relative px-4">
                          Log In with social
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
                <button
                  className="p-3 bg-blue-500 rounded-lg text-white"
                  onClick={() =>
                    SignIntoProvider(provider.id, { callbackUrl: "/" })
                  }
                >
                  Sign in with {provider.name}
                  
                </button>
                <div className="flex justify-center items-center p-4">
                  <p className="text-gray-300 text-sm text-center">
                    Don't have an account?{" "}
                    <a
                      href="#"
                      className="text-indigo-200 hover:text-indigo-600 active:text-indigo-700 transition duration-100"
                    >
                      Register
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

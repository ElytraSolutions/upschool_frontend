export default function Register() {
  return (
    <div className="flex justify-center items-center bg-gray-200" style={{ height: "90vh" }}>

      {/*First Column*/}
      <div className="grid grid-cols-registration gap-0 " style={{ width: "60vw" }} >
        {/* <!-- Login form --> */}
        <div className=" col-span-11 flex flex-wrap content-center justify-center rounded-l-md bg-white" >
          <div className="w-72">
            {/* <!-- Heading --> */}
            <h1 className="text-xl font-semibold">Welcome back</h1>
            <small className="text-gray-400">Welcome back! Please enter your details</small>

            {/* <!-- Form --> */}
            <form className="mt-4">
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Email</label>
                <input type="email" placeholder="Enter your email" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">Password</label>
                <input type="password" placeholder="*****" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
              </div>

              <div className="mb-3 flex flex-wrap content-center">
                <input id="remember" type="checkbox" className="mr-1 checked:bg-purple-700" /> <label className="mr-auto text-xs font-semibold">Remember for 30 days</label>
                <a href="#" className="text-xs font-semibold text-purple-700">Forgot password?</a>
              </div>

              <div className="mb-3">
                <button className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">Sign in</button>
                <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
                  <img className="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" />
                  Sign in with Google
                </button>
              </div>
            </form>

            {/* <!-- Footer --> */}
            <div className="text-center">
              <span className="text-xs text-gray-400 font-semibold">Don't have account?</span>
              <a href="#" className="text-xs font-semibold text-purple-700">Sign up</a>
            </div>
          </div>
        </div>

        {/* Second column*/}
        <div className=" col-span-5 flex flex-wrap content-center justify-center bg-theme-color">

        </div>

      </div>
    </div>
  )
}
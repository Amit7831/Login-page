import React from 'react'

function LoginPage() {
    return (
        <div className='min-h-screen flex  items-center justify-center bg-gray-50 gap-4'>
            <div className='flex flex-row items-center justify-center gap-8 max-w-4xl w-full'>

                <div className='hidden md:block'>
                    <img src="/Untitled.png" alt="" className='h-100 w-62' /></div>

                <div>


                    <div className=" flex flex-col  w-62 h-100 gap-2 ">
                        <div className='flex flex-col items-center gap-4  bg-white border border-gray-300 top-0  w-62 h-80'>
                            <h1 className='font-mono text-3xl pt-8'>Instagram</h1>

                            <form action="" className='w-full flex flex-col justify-center items-center gap-2'>
                                <input type="text" placeholder='Phone Number,username or email address' autoComplete='username'
                                    className='flex w-50  border rounded-sm border-gray-300 bg-gray-50  p-2 text-center   text-xs' />

                                <input type="password" placeholder='password' autoComplete='username'
                                    className=' w-50  border rounded-sm border-gray-300 bg-gray-50  p-2  text-xs' />
                                <button className=' flex justify-center w-50   rounded-sm  bg-indigo-300 mt-1 p-1 text-white   text-sm '>Log in</button>
                            </form>


                            <div className='flex flex-row gap-3'>
                                <div className='w-20 h-0 border border-gray-300  ' ></div>
                                <h2 className='text-xs font-semibold text-gray-600  '>OR</h2>
                                <div className='w-20 h-0 border border-gray-300' ></div>
                            </div>

                            <button className="flex items-center justify-center gap-2 text-[#385185] text-sm font-semibold ">

                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.324v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                </svg>
                                Log in with Facebook
                            </button>

                            <button className='text-xs '>
                                Forgotten your password?
                            </button>

                        </div>

                        <div className='flex justify-center items-center text-sm  bg-white border border-gray-300   w-62 h-10'>
                            <h3>
                                
                        Do you have an account?<button className='text-indigo-500'>Sign up</button>
                        </h3>
                           
                        
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default LoginPage
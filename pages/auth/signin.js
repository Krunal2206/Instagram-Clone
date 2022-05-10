import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import { useEffect, useState } from 'react';
import Header from '../../Components/Header'

function signIn() {
    const [providers, setProviders] = useState(null);

    useEffect(() => {
        (async () => {
            const res = await getProviders();
            setProviders(res);
        })();
    }, []);

    return (
        <>
            <Header />
            <div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-28 px-14 text-center'>
                <img className='w-80' src='https://stjamesgate.nl/wp-content/uploads/2018/04/instagram.png' alt="" />
                <p className='font-xs italic'>This is not a REAL app, it is built for educational purpose.</p>
                <div className='mt-40'>
                    {providers && Object.values(providers).map((provider) => {
                        return (
                            <div key={provider.name}>
                                <button className='p-3 bg-blue-500 text-white rounded-lg' onClick={() => SignIntoProvider(provider.id, { callbackUrl: "/" })}>
                                    Sign in with {provider.name}
                                </button>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default signIn
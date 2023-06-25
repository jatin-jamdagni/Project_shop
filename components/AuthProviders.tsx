import { getProviders, signIn } from 'next-auth/react';
import React, { useEffect, useState } from 'react'

// import Button from './Button';

type Provider = {
    id: string;
    name: string;
    type: string;
    signinUrl: string;
    callbackUrl: string;
    signinUrlParams?: Record<string, string> | undefined;
};

type Providers = Record<string, Provider>;


const AuthProviders = () => {
    const [providers, setProviders] = useState<Providers | null>(null);

    useEffect(() => {
        const fetchProviders = async () => {
            const res = await getProviders();
            console.log(res)
            setProviders(res);
        }

        fetchProviders();
    }, []);
    const [provider, setProvider] = useState<Providers | null>(null);

    if (provider) {
        return (
            <div>
                {Object.values(provider).map((provider: Provider, index) => (
                    <button key={index}>{provider.id}</button>
                ))}
            </div>
        )
    }
}

export default AuthProviders
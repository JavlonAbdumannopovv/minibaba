"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AccountPage = () => {
    const router = useRouter()
    useEffect(()=>{
        router.push("/profile/me")
    }, [])
    return (
        <>
            <AccountPage/> 
        </>
    );
};

export default AccountPage;
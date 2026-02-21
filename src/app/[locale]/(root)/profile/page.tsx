"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import AboutMePage from './me/page';

const AccountPage = () => {
    const router = useRouter()
    useEffect(()=>{
        router.push("/profile/me")
    }, [])
    return (
        <>
            <AboutMePage/> 
        </>
    );
};

export default AccountPage;
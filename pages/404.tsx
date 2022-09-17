import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'

import MainLayout from '../components/MainLayout/MainLayout';

export default function ErrorPage() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 1500);

    }, []);

    return (
        <MainLayout>
            <h1> Error 404 </h1>
            <h2> Page not found </h2>
            <h3> 
                Redirecting to 
                <Link href={'/'}> 
                    <a> Home page </a> 
                </Link> 
                ...
            </h3>
        </MainLayout>
    )
}
import { FC } from 'react';
import Head from 'next/head';

import { MainLayoutPropsType } from './MainLayout.types';

const MainLayout: FC<MainLayoutPropsType> = ({ children }) => {
    return (
        <>
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <meta name="application-name" content="MBA App" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="MBA App" />
                <meta name="description" content="MBA test job App" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="msapplication-config" content="/icons/browserconfig.xml" />
                <meta name="msapplication-TileColor" content="#2B5797" />
                <meta name="msapplication-tap-highlight" content="no" />
                <meta name="theme-color" content="#000000" />
                <link rel="apple-touch-icon" href="../../public/favicon-144.png"></link>
            </Head>
            <>
                {children}
            </>
        </>
    )
}

export default MainLayout
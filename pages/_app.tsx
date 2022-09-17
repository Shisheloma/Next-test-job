import { AppProps } from 'next/app'

import MainLayout from '../components/MainLayout/MainLayout'

import '../styles/main.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <MainLayout>
            <Component {...pageProps} /> 
        </MainLayout>
    )
}

export default MyApp
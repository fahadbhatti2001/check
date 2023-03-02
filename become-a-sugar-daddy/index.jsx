import React from 'react';
import { 
    Header, 
    Regular, 
    FAQ,
    Contact,
    Partner,
    Footer,
    Feature
} from '@/Components';
import Head from 'next/head';
export default function Home() {
    return (
        <div className='container mx-auto'>
            <Head>
                Pricing Plans | How-to-find-a-Sugar-Daddy.com
            </Head>
            <Header/>
            <Regular/>
            <Feature/>
            <FAQ/>
            <Contact/>
            <Partner/>
            <Footer/>
        </div>
    );
};
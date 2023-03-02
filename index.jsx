import React from 'react';
import { Header, FeatureDaddy, CoreService,Contact,Partner,Footer} from '@/Components';
import Head from 'next/head';
export default function Home() {
    return (
        <div className='container mx-auto'>
            <Head>
                <title>
                    Featured & Verified Sugar Daddies | How-to-find-a-Sugar-Daddy.com
                </title>
            </Head>
            <Header/>
            <FeatureDaddy heading="Feature Sugar Daddies"/>
            <CoreService/>
            <Contact/>
            <Partner/>
            <Footer/>
        </div>
    );
};
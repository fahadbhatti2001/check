import React, { useEffect, useState } from 'react';
import { AddDaddy, MaangeDaddies, ReportDaddy, FeatureDaddies, ReportFearureDaddy, UseUserAuth, SuspendedDaddies } from '@/Components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faPersonCirclePlus, faPersonCircleXmark, faStar, faBan, faListCheck, faFlag, } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Dashboard() {

    let [showAddDaddy, setShowAddDaddy] = useState(false)
    let [showManageDaddy, setShowManageDaddy] = useState(false)
    let [showReportDaddy, setShowReportDaddy] = useState(false)
    let [showFeatureDaddy, setShowFeatureDaddy] = useState(true)
    let [showFeatureReportDaddy, setShowFeatureReportDaddy] = useState(false)
    let [showSuspendedDaddy, setShowSuspendedDaddy] = useState(false)

    const { logOut, user } = UseUserAuth();
    const router = useRouter()

    useEffect(() => {
        if (!user) {
            router.push('/admin')
        }
    })

    const handleLogout = async () => {
        try {
            await logOut();
            router.push("/admin");
        } catch (error) {
            console.log("error");
        }
    };

    return (
        <>
            <Head>
                Dashboard
            </Head>
            <div className="w-full flex justify-between">
                <div className="body-sidebar p-4 h-screen flex flex-col justify-between content-between">
                    <div className="">
                        <div className="flex justify-center">
                            <img src="/images/logo.png" className="md:w-1/4 w-1/2" />
                        </div>
                        <div className="py-4">
                            <button onClick={() => {
                                setShowAddDaddy(true),
                                    setShowManageDaddy(false),
                                    setShowReportDaddy(false)
                                setShowFeatureDaddy(false)
                                setShowFeatureReportDaddy(false)
                                setShowSuspendedDaddy(false)
                            }
                            } className="text-white p-4 w-full text-left flex md:justify-start justify-center font-bold hover:bg-primary-4 transition ease-in-out" type="button">
                                <h1 className="md:block hidden">
                                    Add Daddy
                                </h1>
                                <FontAwesomeIcon icon={faPersonCirclePlus} className="md:hidden block" />
                            </button>
                            <button onClick={() => {
                                setShowAddDaddy(false),
                                    setShowManageDaddy(true),
                                    setShowReportDaddy(false)
                                setShowFeatureDaddy(false)
                                setShowFeatureReportDaddy(false)
                                setShowSuspendedDaddy(false)
                            }
                            } className="text-white p-4 w-full text-left flex md:justify-start justify-center font-bold hover:bg-primary-4 transition ease-in-out" type="button">
                                <h1 className="md:block hidden">
                                    Manage Daddies
                                </h1>
                                <FontAwesomeIcon icon={faListCheck} className="md:hidden block" />
                            </button>
                            <button onClick={() => {
                                setShowAddDaddy(false),
                                    setShowManageDaddy(false),
                                    setShowReportDaddy(true)
                                setShowFeatureDaddy(false)
                                setShowFeatureReportDaddy(false)
                                setShowSuspendedDaddy(false)
                            }
                            } className="text-white p-4 w-full text-left flex md:justify-start justify-center font-bold hover:bg-primary-4 transition ease-in-out" type="button">
                                <h1 className="md:block hidden">
                                    Report Daddy
                                </h1>
                                <FontAwesomeIcon icon={faPersonCircleXmark} className="md:hidden block" />
                            </button>
                            <button onClick={() => {
                                setShowAddDaddy(false),
                                    setShowManageDaddy(false),
                                    setShowReportDaddy(false)
                                setShowFeatureDaddy(true)
                                setShowFeatureReportDaddy(false)
                                setShowSuspendedDaddy(false)
                            }
                            } className="text-white p-4 w-full text-left flex md:justify-start justify-center font-bold hover:bg-primary-4 transition ease-in-out" type="button">
                                <h1 className="md:block hidden">
                                    Feature Daddy
                                </h1>
                                <FontAwesomeIcon icon={faStar} className="md:hidden block" />
                            </button>
                            <button onClick={() => {
                                setShowAddDaddy(false),
                                    setShowManageDaddy(false),
                                    setShowReportDaddy(false)
                                setShowFeatureDaddy(false)
                                setShowFeatureReportDaddy(true)
                                setShowSuspendedDaddy(false)
                            }
                            } className="text-white p-4 w-full text-left flex md:justify-start justify-center font-bold hover:bg-primary-4 transition ease-in-out" type="button">
                                <h1 className="md:block hidden">
                                    Report Feature Daddy
                                </h1>
                                <FontAwesomeIcon icon={faFlag} className="md:hidden block" />
                            </button>
                            <button onClick={() => {
                                setShowAddDaddy(false),
                                    setShowManageDaddy(false),
                                    setShowReportDaddy(false)
                                setShowFeatureDaddy(false)
                                setShowFeatureReportDaddy(false)
                                setShowSuspendedDaddy(true)
                            }
                            } className="text-white p-4 w-full text-left flex md:justify-start justify-center font-bold hover:bg-primary-4 transition ease-in-out" type="button">
                                <h1 className="md:block hidden">
                                    Suspended Daddies
                                </h1>
                                <FontAwesomeIcon icon={faBan} className="md:hidden block" />
                            </button>
                        </div>
                    </div>
                    <button onClick={handleLogout} type="button" className="text-white p-4 w-full text-left flex md:justify-between justify-center items-center font-bold hover:bg-primary-4 transition ease-in-out">
                        <h1 className="md:block hidden">
                            Log Out
                        </h1>
                        <FontAwesomeIcon icon={faPowerOff} />
                    </button>
                </div>

                {
                    showAddDaddy ? <AddDaddy /> :
                        showManageDaddy ? <MaangeDaddies /> :
                            showReportDaddy ? <ReportDaddy /> :
                                showFeatureDaddy ? <FeatureDaddies /> :
                                    showFeatureReportDaddy ? <ReportFearureDaddy /> :
                                        showSuspendedDaddy ? <SuspendedDaddies /> :
                                            null
                }

            </div>
        </>
    );
};
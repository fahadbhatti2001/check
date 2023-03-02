import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { getDocs, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '@/FirebaseConfig';
import Swal from 'sweetalert2';
import {
    Header,
    Footer,
    Popup,
    Spinner,
    Social
} from '@/Components';
import Head from 'next/head';

export default function Daddies() {

    let imageName = new Date().getTime()

    let [isImage, setIsImage] = useState(null)
    const [daddy, setDaddy] = useState([])
    const [daddyToReported, setDaddyToReported] = useState()
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(4);
    let [spin, setSpin] = useState(false);
    let [isShow, setIsShow] = useState(false);
    const totalPages = Math.ceil(daddy.length / itemsPerPage);
    const daddiesCollect = collection(db, "Daddies")
    daddy.sort((a, b) => { return b.timestamp.seconds - a.timestamp.seconds })

    const { register, handleSubmit, reset, formState, formState: { errors, isSubmitSuccessful } } = useForm();

    useEffect(() => {
        const getDaddies = async () => {
            const data = await getDocs(daddiesCollect)
            setDaddy(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        };
        getDaddies()
    }, [])


    function popupIsShow() {
        setIsShow((isShow = !isShow));
    }

    function setDataInPopup(id) {
        const reports = daddy.filter(x => x.id == id)
        setDaddyToReported(reports[0])
        popupIsShow()
    }

    async function reportDaddy(data) {
        try {
            setSpin(true)
            const inputDataCopy = { ...data }
            const imageRef = ref(storage, `images/${imageName}`)
            uploadBytes(imageRef, isImage).then((snapshot) => {
                getDownloadURL(snapshot.ref).then(async url => {
                    inputDataCopy.screenShot = url
                    inputDataCopy.reportedImage = daddyToReported.image
                    inputDataCopy.reportedId = daddyToReported.id
                    inputDataCopy.timestamp = serverTimestamp()
                    await addDoc(collection(db, 'Report'), inputDataCopy)
                })
            })
            popupIsShow()
            setSpin(false)
            Swal.fire({
                icon: "success",
                title: "Daddy Reported!",
                toast: true,
                showCancelButton: false,
                animation: false,
                position: "top",
                timer: 3000,
                showConfirmButton: false,
                iconColor: '#000000',
                confirmButtonColor: '#E0A800',
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Unable to report Daddy",
                toast: true,
                showCancelButton: false,
                animation: false,
                position: "top",
                timer: 3000,
                showConfirmButton: false,
                iconColor: '#2c0506',
                confirmButtonColor: '#2c0506',
            });
        }
    }

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = daddy.slice(startIndex, endIndex);

    return (
        <>
            <Head>
                Find your Daddies | How-to-find-a-Sugar-Daddy.com
            </Head>
            <Spinner isBlinking={false} isSpinner={spin}></Spinner>
            <div className='container mx-auto'>
                <Header />
                <div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                        {currentData.map((e, i) => (
                            e.suspended == "yes" ? null :
                                <div key={i} className="col-span-1 p-8 flex flex-col justify-between items-center text-center card-bg border-[6px] border-y-0 rounded-md" >
                                    <img src={e.image} className="w-40 h-40 object-cover rounded-lg" />
                                    <p className="text-wrap h-28 text-sm text-left text-primary-13 py-2">
                                        {e.description}
                                    </p>
                                    {
                                        (e.skypeId && e.skypeLink) === "" ?
                                            <Social image="/images/skype.svg" name="skype" user="~" link="/daddies" />
                                            :
                                            <Social image="/images/skype.svg" name="skype" user={e.skypeId} link={e.skypeLink} />
                                    }
                                    {
                                        (e.twitterUsername && e.twitterLink) === "" ?
                                            <Social image="/images/twitter.svg" name="twitter" user="~" link="/daddies" />
                                            :
                                            <Social image="/images/twitter.svg" name="twitter" user={e.twitterUsername} link={e.twitterLink} />
                                    }
                                    {
                                        (e.snapchatUsername && e.snapchatLink) === "" ?
                                            <Social image="/images/snapchat.svg" name="snapchat" user="~" link="/daddies" />
                                            :
                                            <Social image="/images/snapchat.svg" name="snapchat" user={e.snapchatUsername} link={e.snapchatLink} />
                                    }
                                    {
                                        (e.kikUsername && e.kikLink) === "" ?
                                            <Social image="/images/kik.svg" name="kik" user="~" link="/daddies" />
                                            :
                                            <Social image="/images/kik.svg" name="kik" user={e.kikUsername} link={e.kikLink} />
                                    }
                                    {
                                        (e.telegramUsername && e.telegramLink) === "" ?
                                            <Social image="/images/telegram.svg" name="telegram" user="~" link="/daddies" />
                                            :
                                            <Social image="/images/telegram.svg" name="telegram" user={e.telegramUsername} link={e.telegramLink} />
                                    }
                                    {
                                        (e.whatsappUsername && e.whatsappLink) === "" ?
                                            <Social image="/images/whatsapp.svg" name="whatsapp" user="~" link="/daddies" />
                                            :
                                            <Social image="/images/whatsapp.svg" name="whatsapp" user={e.whatsappUsername} link={e.whatsappLink} />
                                    }
                                    <button onClick={() => setDataInPopup(e.id)} type="button" className={"text-white mt-4 p-2 w-full bg-primary-13 rounded"} >
                                        <FontAwesomeIcon icon={faFlag} />
                                        <h1 className="drop-shadow-2xl shadow-black">
                                            REPORT
                                        </h1>
                                    </button>
                                </div>
                        ))}
                    </div>
                    <div className="flex justify-center items-center py-8 gap-2">
                        <button className="text-primary-4 w-8 h-8 bg-primary-1 rounded-full" disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}><FontAwesomeIcon icon={faArrowLeft} /></button>
                        <span className="text-primary-1">{currentPage}</span>
                        <button className="text-primary-4 w-8 h-8 bg-primary-1 rounded-full" disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}><FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                </div>
                <Footer />
                {isShow ? (
                    <Popup popupIsShow={popupIsShow} popupTitle="Report" cstWidth="md:w-1/3 w-full" >
                        <div className="min-h-[30vh] overflow-auto cst-scrollbar">
                            <input type="email" {...register('email', { required: true })} className={errors.email ? "border-2 border-primary-9 placeholder-primary-9 outline-none bg-zinc-100 w-full rounded p-2 mb-2" : "border-2 border-transparent focus:border-primary-2 outline-none bg-zinc-100 w-full rounded p-2 mb-2"} placeholder="Enter your Email" />
                            <textarea {...register('message', { required: true })} className={errors.message ? "border-2 border-primary-9 placeholder-primary-9 outline-none bg-zinc-100 w-full h-40 rounded p-2 mb-1 resize-none overflow-auto cst-scrollbar" : "border-2 border-transparent focus:border-primary-2 outline-none bg-zinc-100 w-full h-40 rounded p-2 mb-1 resize-none overflow-auto cst-scrollbar"} placeholder="Your Message"></textarea>
                            <div className="grid grid-cols-12 place-items-center mb-2">
                                {
                                    isImage == null ?
                                        <label htmlFor="image" className="col-span-12 outline-none text-gray-500 border border-gray-500 border-dashed bg-transparent text-center w-full rounded p-2">
                                            Upload Screenshot
                                        </label>
                                        :
                                        <label htmlFor="image" className="col-span-12 outline-none text-green-500 border border-gray-500 border-dashed bg-transparent text-center w-full rounded p-2">
                                            Uploaded!
                                        </label>
                                }
                                <input id="image" onChange={(e) => { setIsImage(e.target.files[0]) }} accept="image/png, image/jpg, image/jpeg, image/tiff" className="col-span-9 outline-none text-white w-full rounded p-2" type="file" />
                            </div>
                            {
                                isImage == null ?
                                    <button disabled type="button" className="font-PoppinsMedium bg-primary-2/20 text-black w-full rounded p-2 text-center">
                                        Report
                                    </button>
                                    :
                                    <button onClick={handleSubmit(reportDaddy)} type="button" className="font-PoppinsMedium bg-primary-2 text-black w-full rounded p-2 text-center">
                                        Report
                                    </button>
                            }
                        </div>
                    </Popup>
                ) : null}
            </div>
        </>
    );
};
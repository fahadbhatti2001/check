function elementFromHtml(html) {
    const template = document.createElement("template")
    template.innerHTML = html.trim()
    return template.content.firstElementChild
}

const daddy = elementFromHtml(`
    <div class="flex flex-col justify-center items-center text-white">
        <h1 class="text-sm font-bold text-center">
            READ THIS IF YOU ARE A SUGAR DADDY
        </h1>
        <p class="text-sm text-gray-500 text-center">
            Four reasons..
        </p>
        <h1 class="py-6 text-3xl text-center">
            ..why you need us to find your Sugar Baby.
        </h1>
        <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-16 lg:px-36 md:px-16 px-8 py-20"> 
            <div class="col-span-1 flex flex-col justify-start items-center">
               <i class="text-5xl text-primary-9 fa-regular fa-hand"></i>
                <h1 class="py-6 text-xl text-center">
                    OTHER <br /> SITES
                </h1>
                <p class="text-sm leading-6 text-gray-500">
                    Other sites can be hazardous because they have no security or 24/7 Support to act quickly on abuse reports; sometimes, they do not even care and ignore your emails because they dont want to lose their paying members. But hold on, we do care; we want you to stay; that is why we remove Sugar Daddy listings if they violate our Terms & Conditions. Our goal is safety first, then comes the money!
                </p>
            </div>
            <div class="col-span-1 flex flex-col justify-start items-center">
                <i class="text-5xl text-white fa-solid fa-key"></i>
                <h1 class="py-6 text-xl text-center">
                    STRONG  <br /> KEYWORDS
                </h1>
                <p class="text-sm leading-6 text-gray-500">
                    We have one of the best and strongest keywords on the Sugar Daddy market, which makes it easy for Sugar Babies to find our website, and they might be interested in talking to you and to satisfy your needs.
                </p>
            </div>
            <div class="col-span-1 flex flex-col justify-start items-center">
               <i class="text-5xl text-primary-10 fa-solid fa-right-to-bracket"></i>
                <h1 class="py-6 text-xl text-center">
                    NO SIGNUP OR <br /> LOGIN
                </h1>
                <p class="text-sm leading-6 text-gray-500">
                    There is no sign-up or login required. You probably recognized that there is no sign-up, well, there is none, and there will never be one. Promise! Keep your personal details to yourself; we dont need them.
                </p>
            </div>
            <div class="col-span-1 flex flex-col justify-start items-center">
               <i class="text-5xl text-primary-11 fa-solid fa-user-plus"></i>
                <h1 class="py-6 text-xl text-center">
                    OTHER <br /> ADD
                </h1>
                <p class="text-sm leading-6 text-gray-500">
                    Sugar Babies can easily add you. They only have to click the social media icons on your listing. Our site is entirely free for Sugar Babies; no need to pay to find a Sugar Daddy.
                </p>
            </div>
        </div>
    </div>
`)
document.body.appendChild(daddy)

const baby = elementFromHtml(`
    <div class="flex flex-col justify-center items-center text-white">
        <h1 class="text-sm font-bold text-center">
            READ THIS IF YOU ARE A SUGAR BABY
        </h1>
        <p class="text-sm text-gray-500 text-center">
            Four reasons..
        </p>
        <h1 class="py-6 text-3xl text-center">
            ..why you need us to find your Sugar Daddy.
        </h1>
        <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-16 lg:px-36 md:px-16 px-8 py-20"> 
            <div class="col-span-1 flex flex-col justify-start items-center">
               <i class="text-5xl text-primary-9 fa-regular fa-hand"></i>
                <h1 class="py-6 text-xl text-center">
                    OTHER <br /> SITES
                </h1>
                <p class="text-sm leading-6 text-gray-500">
                Other sites can be hazardous because they have no security or 24/7 Support to act quickly on abuse reports; sometimes, they do not even care and ignore your emails because they dont want to lose their paying members. But hold on, we do care; we want you to stay; that is why we remove Sugar Daddy listings if they violate our Terms & Conditions. Our goal is safety first, then comes the money!
                </p>
            </div>
            <div class="col-span-1 flex flex-col justify-start items-center">
               <i class="text-5xl text-primary-10 fa-solid fa-circle-check"></i>
                <h1 class="py-6 text-xl text-center">
                    MANUAL<br />LISTING
                </h1>
                <p class="text-sm leading-6 text-gray-500">
                    Youve heard it right! We list each Sugar Daddy manually to prevent spam or other weird creatures that want to scam you. However, we are just humans; mistakes happen, and we cannot guarantee 100% satisfaction; nobody can. Some people are too good to pretend to be a legit Sugar Daddy.
                </p>
            </div>
            <div class="col-span-1 flex flex-col justify-start items-center">
               <i class="text-5xl text-primary-12 fa-solid fa-heart"></i>
                <h1 class="py-6 text-xl text-center">
                    FREE FOR SUGAR <br /> BABIES
                </h1>
                <p class="text-sm leading-6 text-gray-500">
                    Yay! It is free for a Sugar Baby to add Sugar Daddies. There is nothing you need to do; browse through the pages and find your Sugar Daddy.
                </p>
            </div>
            <div class="col-span-1 flex flex-col justify-start items-center">
               <i class="text-5xl text-primary-9 fa-solid fa-flag"></i>
                <h1 class="py-6 text-xl text-center">
                    ABUSE <br /> REPORT
                </h1>
                <p class="text-sm leading-6 text-gray-500">
                    Under each Sugar Daddy listing is a report button. Just choose your preferred email provider and send us an email. Ensure to provide the username you added and attach screenshots of the entire conversation history between you and the Sugar Daddy; this will make it easier for us to identify and take action immediately. Our abuse email is monitored 24/7. abuse@how-to-find-a-sugar-daddy.com
                </p>
            </div>
        </div>
    </div>
`)
document.body.appendChild(baby)
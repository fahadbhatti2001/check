function elementFromHtml(html) {
    const template = document.createElement("template")
    template.innerHTML = html.trim()
    return template.content.firstElementChild
}

const contact = elementFromHtml(`
    <div class="text-white">
        <h1 class="font-medium text-2xl text-center mb-4">
            Contact US
        </h1>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:px-24 md:px-12 px-4">
            <div class="col-span-1 flex flex-col justify-center items-center shadow-[0px_0px_5px_1px_rgba(255,255,255,1)] rounded p-10">
                <i class="text-4xl fa-solid fa-envelope"></i>
                <h1 class="font-medium text-xl text-center">
                    Support Email SD
                </h1>
                <h1 class="text-xs font-bold py-1 text-center">
                    SUGAR DADDIES
                </h1>
                <p class="text-sm text-gray-500 mb-4">
                    support-sd@how-to-find-a-sugar-daddy.com
                </p>
                <p class="text-xs text-center">
                    Support email is only for Sugar Daddies regarding questions about the pricing plans.
                </p>
            </div>
            <div class="col-span-1 flex flex-col justify-center items-center shadow-[0px_0px_5px_1px_rgba(255,255,255,1)] rounded p-10">
                <i class="text-4xl fa-solid fa-envelope"></i>
                <h1 class="font-medium text-xl text-center">
                    Support Email SB
                </h1>
                <h1 class="text-xs font-bold py-1 text-center">
                    SUGAR BABBIES
                </h1>
                <p class="text-sm text-gray-500 mb-4">
                    support-sb@how-to-find-a-sugar-daddy.com
                </p>
                <p class="text-xs text-center">
                    Support email is only for Sugar Babies regarding all kinds of questions.
                </p>
            </div>
            <div class="col-span-1 flex flex-col justify-center items-center shadow-[0px_0px_5px_1px_rgba(255,255,255,1)] rounded p-10">
                <i class="text-4xl fa-solid fa-handshake"></i>
                <h1 class="font-medium text-xl text-center">
                    Partnership Email
                </h1>
                <h1 class="text-xs font-bold py-1 text-center">
                    PARTNER WITH US
                </h1>
                <p class="text-sm text-gray-500 mb-4">
                    partner@how-to-find-a-sugar-daddy.com
                </p>
                <p class="text-xs text-center">
                    Partnership email is only for website owners who want to partner with us.
                </p>
            </div>
        </div>
    </div>
`)
document.body.appendChild(contact)
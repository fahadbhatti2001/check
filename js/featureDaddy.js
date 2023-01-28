function elementFromHtml(html) {
    const template = document.createElement("template")
    template.innerHTML = html.trim()
    return template.content.firstElementChild
}

const FeatureDaddyCardsData = [
    {
        id: "1",
        bgcolor: "bg-primary-6",
        bordercolor: "border-primary-6",
        textcolor: "text-primary-6",
        image: "../images/rich.png",
        heading: "Rich",
        shortDescription: "He is now listed for 3 months. He paid..",
        price: "350",
        description: "This is a rich Sugar Daddy and paid $350 to be featured on the top. If you want to be his Sugar Baby, you can add his Social Media accounts below.",
        skype: "https://join.skype.com/invite/test",
    },
    {
        id: "2",
        bgcolor: "bg-primary-7",
        bordercolor: "border-primary-7",
        textcolor: "text-primary-7",
        image: "../images/business.png",
        heading: "Business",
        shortDescription: "He is now listed for 1 months. He paid..",
        price: "150",
        description: "This is a business Sugar Daddy and paid $150 to be featured on the top. If you want to be his Sugar Baby, you can add his Social Media accounts below.",
        skype: "https://join.skype.com/invite/test",
    },
    {
        id: "3",
        bgcolor: "bg-primary-8",
        bordercolor: "border-primary-8",
        textcolor: "text-primary-8",
        image: "../images/regular.png",
        heading: "Regular",
        shortDescription: "He is now listed for 1 week. He paid..",
        price: "50",
        description: "This is a regular Sugar Daddy and paid $50 to be featured on the top. If you want to be his Sugar Baby, you can add his Social Media accounts below.",
        skype: "https://join.skype.com/invite/test",
    },
]

const feature = document.getElementById("cards")

FeatureDaddyCardsData.map((data, i) => {
    const featureDaddyCards = elementFromHtml(`
        <div class="col-span-1 p-8 flex flex-col justify-center items-center text-center card-bg border-[6px] border-y-0 rounded-md ${data.bordercolor}">
            <img src="${data.image}" />
            <h1 class="text-2xl text-gray-400 font-light py-4">
                ${data.heading}
                <br />
                Daddy
            </h1>
            <p class="text-sm text-gray-400 font-light">
                ${data.shortDescription}
            </p>
            <p class="text-base font-light pt-2 ${data.textcolor}">
                $${data.price}
            </p>
            <p class="text-sm text-gray-400 font-light text-justify py-4">
                ${data.description}
            </p>
            <a href="${data.skype}" class="text-white flex flex-col justify-center items-center">
                <i class="fa-brands fa-skype"></i>
                <h1 class="text-sm font-bold">SKYPE</h1>
                <p class="text-ellipsis w-1/2 overflow-hidden">${data.skype}</p>
            </a>
            <button type="button" class="text-white mt-4 p-2 w-full ${data.bgcolor}">
                <i class="fa-solid fa-flag"></i>
                <h1 class="drop-shadow-2xl shadow-black">
                    REPORT
                    <br />
                    DADDY
                </h1>
            </button>
        </div>
    `);
    document.getElementById("cards").appendChild(featureDaddyCards)
})



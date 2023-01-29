function elementFromHtml(html) {
    const template = document.createElement("template")
    template.innerHTML = html.trim()
    return template.content.firstElementChild
}

const mainNav = elementFromHtml(`
    <nav class="py-4 w-full flex justify-center">
        <img src="../assets/logo-1d63a908.png" class="w-16" />
    </nav>
`)
document.body.appendChild(mainNav)

const nav = elementFromHtml(`
    <nav class="navbar navbar-expand-lg py-2 relative flex items-center justify-center">
        <div class="flex items-center justify-center">
            <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                <a href="#" aria-current="page" class="flex flex-col justify-center text-center gap-2 rounded-l px-3 py-2.5 bg-primary-1 text-primary-3 font-semibold text-[75%] leading-loose hover:bg-primary-2 focus:bg-primary-2 focus:outline-none transition duration-150 ease-in-out">
                    <i class="text-lg fa-solid fa-star"></i>
                    Featured 
                    <br />
                    Daddies
                </a>
                <a href="#" class="flex flex-col justify-center text-center gap-2 px-3 py-2.5 border-y border-primary-1 text-primary-1 hover:text-primary-3 font-semibold text-[75%] leading-loose hover:bg-primary-1 focus:bg-primary-1 focus:outline-none transition duration-150 ease-in-out">
                    <i class="text-lg fa-solid fa-earth-europe"></i>
                    Find 
                    <br />
                    Daddies
                </a>
                <a href="#" class="flex flex-col justify-center text-center gap-2 rounded-r px-3 py-2.5 border border-primary-1 text-primary-1 hover:text-primary-3 font-semibold text-[75%] leading-loose hover:bg-primary-1 focus:bg-primary-1 focus:outline-none transition duration-150 ease-in-out">
                    <i class="text-lg fa-solid fa-users"></i>
                    Become a 
                    <br />
                    Sugar Daddy
                </a>
            </div>
        </div>
        <div class="flex flex-wrap items-center justify-between">
            <div class="flex items-center">
                <button class="border border-white navbar-toggler py-3 px-4 rounded lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContentY" aria-controls="navbarSupportedContentY" aria-expanded="false" aria-label="Toggle navigation" >
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >
                        <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" ></path>
                    </svg>
                </button>
            </div>
            <div class="navbar-collapse collapse grow items-center lg:block hidden" id="navbarSupportedContentY">
                <ul class="navbar-nav mx-auto lg:flex flex-col">
                    <li class="nav-item my-4">
                        <a href="#" class="flex flex-col items-center">
                            <i class="text-white fa-solid fa-home"></i>
                            <div class="dropdown relative">
                                <button class="dropdown-toggle px-4 py-1 text-white font-medium text-base transition duration-150 ease-in-out flex items-center whitespace-nowrap">
                                    Home
                                </button>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item flex flex-col items-center group my-4">
                        <i class="fa-solid fa-dollar text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"></i>
                        <div class="dropdown relative">
                            <button class="dropdown-toggle px-4 py-1 text-gray-400 group-hover:text-gray-200 font-medium text-base transition duration-150 ease-in-out flex items-center whitespace-nowrap" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Pricing Plan
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" >
                                    <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                </svg>
                            </button>
                            <ul class="dropdown-menu min-w-max absolute bg-primary-5 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1">
                                <li>
                                    <a href="#" class="flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out">
                                        <i class="fa-solid fa-dollar"></i>
                                        Lifetime Plan
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out">
                                        <i class="fa-solid fa-dollar"></i>
                                        Featured Plan
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item flex flex-col items-center group my-4">
                        <i class="fa-brands fa-twitter text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"></i>
                        <div class="dropdown relative">
                            <button class="dropdown-toggle px-4 py-1 text-gray-400 group-hover:text-gray-200 font-medium text-base transition duration-150 ease-in-out flex items-center whitespace-nowrap" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Follow Us
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" >
                                    <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                </svg>
                            </button>
                            <ul class="dropdown-menu min-w-max absolute bg-primary-5 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1">
                                <li>
                                    <a href="#" class="flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out">
                                        <i class="fa-brands fa-twitter"></i>
                                        @# &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </a>
                                </li>
                            </ul>
                            </div>
                    </li>
                    <li class="nav-item flex flex-col items-center group my-4">
                        <i class="fa-solid fa-handshake text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"></i>
                        <div class="dropdown relative">
                            <button class="dropdown-toggle px-4 py-1 text-gray-400 group-hover:text-gray-200 font-medium text-base transition duration-150 ease-in-out flex items-center whitespace-nowrap" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Partner
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" >
                                    <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                </svg>
                            </button>
                            <ul class="dropdown-menu min-w-max absolute bg-primary-5 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1">
                                <li>
                                    <a href="#" class="flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out">
                                        <i class="fa-solid fa-handshake"></i>
                                        PARTNER WITH US
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item flex flex-col items-center group my-4">
                        <div class="flex gap-1">
                            <i class="fa-solid fa-user-secret text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"></i>
                            <i class="fa-solid fa-plus text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"></i>
                            <i class="fa-solid fa-gavel text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"></i>
                        </div>
                        <div class="dropdown relative">
                            <button class="dropdown-toggle px-4 py-1 text-gray-400 group-hover:text-gray-200 font-medium text-base transition duration-150 ease-in-out flex items-center whitespace-nowrap" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Privacy & Terms
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" >
                                    <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                </svg>
                            </button>
                            <ul class="dropdown-menu min-w-max absolute bg-primary-5 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1">
                                <li>
                                    <a href="#" class="flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out">
                                        <i class="fa-solid fa-user-secret"></i>
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out">
                                        <i class="fa-solid fa-gavel"></i>
                                        Terms and Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`)
document.body.appendChild(nav)

const mobileNav = elementFromHtml(`
    <div class="navbar-collapse collapse grow items-center lg:hidden block" id="navbarSupportedContentY">
        <ul class="navbar-nav mx-auto lg:flex flex-col">
            <li class="nav-item">
                <a href="#" class="flex flex-col items-center">
                    <i class="text-white fa-solid fa-home"></i>
                    <div class="dropdown relative">
                        <button class="dropdown-toggle px-4 py-1 text-white font-medium text-base transition duration-150 ease-in-out flex items-center whitespace-nowrap" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Home
                        </button>
                    </div>
                </a>
            </li>
            <li class="nav-item flex flex-col items-center group my-4">
                <i class="fa-solid fa-dollar text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"></i>
                <div class="dropdown relative">
                    <button class="dropdown-toggle px-4 py-1 text-gray-400 group-hover:text-gray-200 font-medium text-base transition duration-150 ease-in-out flex items-center whitespace-nowrap" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Pricing Plan
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" >
                            <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                        </svg>
                    </button>
                    <ul class="dropdown-menu min-w-max absolute bg-primary-5 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1">
                        <li>
                            <a href="#" class="flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out">
                                <i class="fa-solid fa-dollar"></i>
                                Lifetime Plan
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out">
                                <i class="fa-solid fa-dollar"></i>
                                Featured Plan
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="nav-item flex flex-col items-center group my-4">
                <i class="fa-brands fa-twitter text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"></i>
                <div class="dropdown relative">
                    <button class="dropdown-toggle px-4 py-1 text-gray-400 group-hover:text-gray-200 font-medium text-base transition duration-150 ease-in-out flex items-center whitespace-nowrap" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Follow Us
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" >
                            <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                        </svg>
                    </button>
                    <ul class="dropdown-menu min-w-max absolute bg-primary-5 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1">
                        <li>
                            <a href="#" class="flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out">
                                <i class="fa-brands fa-twitter"></i>
                                @# &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </a>
                        </li>
                    </ul>
                    </div>
            </li>
            <li class="nav-item flex flex-col items-center group my-4">
                <i class="fa-solid fa-handshake text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"></i>
                <div class="dropdown relative">
                    <button class="dropdown-toggle px-4 py-1 text-gray-400 group-hover:text-gray-200 font-medium text-base transition duration-150 ease-in-out flex items-center whitespace-nowrap" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Partner
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" >
                            <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                        </svg>
                    </button>
                    <ul class="dropdown-menu min-w-max absolute bg-primary-5 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1">
                        <li>
                            <a href="#" class="flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out">
                                <i class="fa-solid fa-handshake"></i>
                                PARTNER WITH US
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="nav-item flex flex-col items-center group my-4">
                <div class="flex gap-1">
                    <i class="fa-solid fa-user-secret text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"></i>
                    <i class="fa-solid fa-plus text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"></i>
                    <i class="fa-solid fa-gavel text-gray-400 group-hover:text-gray-200 transition duration-150 ease-in-out"></i>
                </div>
                <div class="dropdown relative">
                    <button class="dropdown-toggle px-4 py-1 text-gray-400 group-hover:text-gray-200 font-medium text-base transition duration-150 ease-in-out flex items-center whitespace-nowrap" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Privacy & Terms
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" >
                            <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                        </svg>
                    </button>
                    <ul class="dropdown-menu min-w-max absolute bg-primary-5 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1">
                        <li>
                            <a href="#" class="flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out">
                                <i class="fa-solid fa-user-secret"></i>
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center gap-1 dropdown-item text-base py-1 px-6 font-normal w-full whitespace-nowrap text-white hover:bg-primary-4 transition duration-150 ease-in-out">
                                <i class="fa-solid fa-gavel"></i>
                                Terms and Conditions
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
`)
document.body.appendChild(mobileNav)
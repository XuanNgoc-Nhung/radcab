<header class="fixed w-full bg-white  dark:bg-black z-50 " style="min-height: 64px;">
    <div
        class="flex items-center justify-between px-6 lg:px-16 h-16 min-h-16 relative z-50 bg-white dark:bg-black dark:text-white">
        <a class="shrink-0" href="/">
            <div class="relative h-10 w-40 shrink-0"><img alt="Nadcab logo" width="160" height="40" decoding="async"
                    data-nimg="1" class="object-contain" sizes="160px"
                    srcset="https://img.nadcab.com/wp-content/uploads/2025/11/black-logo.svg?w=16&amp;q=75 16w, https://img.nadcab.com/wp-content/uploads/2025/11/black-logo.svg?w=32&amp;q=75 32w, https://img.nadcab.com/wp-content/uploads/2025/11/black-logo.svg?w=48&amp;q=75 48w, https://img.nadcab.com/wp-content/uploads/2025/11/black-logo.svg?w=64&amp;q=75 64w, https://img.nadcab.com/wp-content/uploads/2025/11/black-logo.svg?w=96&amp;q=75 96w, https://img.nadcab.com/wp-content/uploads/2025/11/black-logo.svg?w=128&amp;q=75 128w, https://img.nadcab.com/wp-content/uploads/2025/11/black-logo.svg?w=256&amp;q=75 256w, https://img.nadcab.com/wp-content/uploads/2025/11/black-logo.svg?w=384&amp;q=75 384w, https://img.nadcab.com/wp-content/uploads/2025/11/black-logo.svg?w=640&amp;q=75 640w, https://img.nadcab.com/wp-content/uploads/2025/11/black-logo.svg?w=750&amp;q=75 750w, https://img.nadcab.com/wp-content/uploads/2025/11/black-logo.svg?w=828&amp;q=75 828w, https://img.nadcab.com/wp-content/uploads/2025/11/black-logo.svg?w=1080&amp;q=75 1080w, https://img.nadcab.com/wp-content/uploads/2025/11/black-logo.svg?w=1200&amp;q=75 1200w, https://img.nadcab.com/wp-content/uploads/2025/11/black-logo.svg?w=1920&amp;q=75 1920w, https://img.nadcab.com/wp-content/uploads/2025/11/black-logo.svg?w=2048&amp;q=75 2048w, https://img.nadcab.com/wp-content/uploads/2025/11/black-logo.svg?w=3840&amp;q=75 3840w"
                    src="https://img.nadcab.com/wp-content/uploads/2025/11/black-logo.svg?w=3840&amp;q=75"
                    style="color: transparent;"></div>
        </a>
        <div class="hidden lg:flex items-center relative">
            <nav class="flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
                <div class="relative" id="about-menu">
                    <button
                        id="about-toggle"
                        class="inline-flex items-center h-12 font-semibold text-sm md:text-base text-black dark:text-white pr-4 lg:pr-6 hover:text-primary whitespace-nowrap cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg px-3 -mx-3"
                        aria-haspopup="true" aria-expanded="false">About</button>
                    <!-- Dropdown Menu -->
                    <div id="about-dropdown" class="fixed w-[80vw] max-w-[1400px] top-[56px] left-1/2 transform -translate-x-1/2 bg-transparent opacity-0 invisible transition-all duration-300 z-50 pointer-events-none hidden">
                        <!-- Invisible bridge to prevent menu from disappearing when moving mouse -->
                        <div class="absolute -top-1 left-0 right-0 h-1 bg-transparent pointer-events-auto"></div>
                        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <div class="p-6 lg:p-8">
                                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                                    <!-- Left Section: Image and About Information -->
                                    <div class="min-w-0 lg:col-span-1">
                                        <div class="mb-6">
                                            <img src="bs-img5.jpg" 
                                                 alt="About Nadcab Labs" 
                                                 class="w-full h-48 rounded-lg object-cover">
                                        </div>
                                        <h3 class="text-xl font-bold text-black dark:text-white mb-2">About Nadcab Labs</h3>
                                        <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                            A leading blockchain company delivering innovative digital solutions worldwide.
                                        </p>
                                    </div>
                                    
                                    <!-- Right Section: About Links -->
                                    <div class="min-w-0 lg:col-span-2">
                                        <h3 class="text-xl font-bold text-black dark:text-white mb-2">Get to Know Us</h3>
                                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                                            Automate and easily manage your customers' pre- and post-purchase experience.
                                        </p>
                                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <a href="{{ route('about') }}" class="block group p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                                <h4 class="text-base font-semibold text-black dark:text-white mb-1 group-hover:text-primary transition-colors">About Us</h4>
                                                <p class="text-sm text-gray-600 dark:text-gray-400">Know who we are and what drives us.</p>
                                            </a>
                                            <a href="#" class="block group p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                                <h4 class="text-base font-semibold text-black dark:text-white mb-1 group-hover:text-primary transition-colors">Nadcab Labs Team</h4>
                                                <p class="text-sm text-gray-600 dark:text-gray-400">Meet the innovators behind our success.</p>
                                            </a>
                                            <a href="#" class="block group p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                                <h4 class="text-base font-semibold text-black dark:text-white mb-1 group-hover:text-primary transition-colors">Career</h4>
                                                <p class="text-sm text-gray-600 dark:text-gray-400">Join our growing tech-driven team.</p>
                                            </a>
                                            <a href="#" class="block group p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                                <h4 class="text-base font-semibold text-black dark:text-white mb-1 group-hover:text-primary transition-colors">Partner with Us</h4>
                                                <p class="text-sm text-gray-600 dark:text-gray-400">Collaborate and grow with Nadcab Labs.</p>
                                            </a>
                                            <a href="#" class="block group p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                                <h4 class="text-base font-semibold text-black dark:text-white mb-1 group-hover:text-primary transition-colors">Press Release</h4>
                                                <p class="text-sm text-gray-600 dark:text-gray-400">Get the latest company updates.</p>
                                            </a>
                                            <a href="#" class="block group p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                                <h4 class="text-base font-semibold text-black dark:text-white mb-1 group-hover:text-primary transition-colors">Contact Us</h4>
                                                <p class="text-sm text-gray-600 dark:text-gray-400">We're here to connect with you.</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative" id="services-menu">
                    <button
                        id="services-toggle"
                        class="inline-flex items-center h-12 font-semibold text-sm md:text-base text-black dark:text-white pr-4 lg:pr-6 hover:text-primary whitespace-nowrap cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg px-3 -mx-3"
                        aria-haspopup="true" aria-expanded="false">Services</button>
                    <!-- Dropdown Menu -->
                    <div id="services-dropdown" class="fixed w-[80vw] max-w-[1400px] top-[56px] left-1/2 transform -translate-x-1/2 bg-transparent opacity-0 invisible transition-all duration-300 z-50 pointer-events-none hidden">
                        <!-- Invisible bridge to prevent menu from disappearing when moving mouse -->
                        <div class="absolute -top-1 left-0 right-0 h-1 bg-transparent pointer-events-auto"></div>
                        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <div class="p-6 lg:p-8">
                                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                                    <!-- Left Section: Categories Sidebar -->
                                    <div class="min-w-0 lg:col-span-1">
                                        <h3 class="text-xl font-bold text-black dark:text-white mb-4">Categories</h3>
                                        <div class="space-y-2">
                                            <a href="#" class="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-black dark:text-white font-medium text-sm">
                                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                                                </svg>
                                                <span>Blockchain</span>
                                            </a>
                                            <a href="#" class="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm">
                                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                                                </svg>
                                                <span>Apps & Games</span>
                                            </a>
                                            <a href="#" class="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm">
                                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                                </svg>
                                                <span>AI & ML</span>
                                            </a>
                                            <a href="#" class="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm">
                                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                                </svg>
                                                <span>Custom Software</span>
                                            </a>
                                            <a href="#" class="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm">
                                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                                                </svg>
                                                <span>Big Data & Analytics</span>
                                            </a>
                                            <a href="#" class="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm">
                                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                                                </svg>
                                                <span>Cloud Services</span>
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <!-- Right Section: Services Grid -->
                                    <div class="min-w-0 lg:col-span-2">
                                        <h3 class="text-2xl font-bold text-black dark:text-white mb-4">End-to-end blockchain solutions for enterprises and startups</h3>
                                        <div class="grid grid-cols-3 gap-3">
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                Blockchain Development
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                ICO Development
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                Smart Contract
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                Token & Coin
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                DApp Development
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                DeFi Development
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                Cryptocurrency Exchange
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                Cryptocurrency Bank
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                P2P Exchange
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                Decentralized Exchange
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                Cryptocurrency MLM
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                Real Estate Tokenization
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                Asset Tokenization
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                Gold Tokenization
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                Meme Coin
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative" id="industries-menu">
                    <button
                        id="industries-toggle"
                        class="inline-flex items-center h-12 font-semibold text-sm md:text-base text-black dark:text-white pr-4 lg:pr-6 hover:text-primary whitespace-nowrap cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg px-3 -mx-3"
                        aria-haspopup="true" aria-expanded="false">Industries</button>
                    <!-- Dropdown Menu -->
                    <div id="industries-dropdown" class="fixed w-[80vw] max-w-[1400px] top-[56px] left-1/2 transform -translate-x-1/2 bg-transparent opacity-0 invisible transition-all duration-300 z-50 pointer-events-none hidden">
                        <!-- Invisible bridge to prevent menu from disappearing when moving mouse -->
                        <div class="absolute -top-1 left-0 right-0 h-1 bg-transparent pointer-events-auto"></div>
                        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <div class="p-6 lg:p-8">
                                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                                    <!-- Left Section: Image and Industry Solutions -->
                                    <div class="min-w-0 lg:col-span-1">
                                        <div class="mb-6">
                                            <img src="industries-use-cases.jpg" 
                                                 alt="Blockchain Use Cases in Major Industries" 
                                                 class="w-full h-48 rounded-lg">
                                        </div>
                                        <h3 class="text-xl font-bold text-black dark:text-white mb-2">Industry Solutions</h3>
                                        <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                            Tailored technology solutions for various industries to drive growth and innovation.
                                        </p>
                                    </div>
                                    
                                    <!-- Right Section: Browse Industries -->
                                    <div class="min-w-0 lg:col-span-2">
                                        <h3 class="text-xl font-bold text-black dark:text-white mb-2">Browse Industries</h3>
                                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                                            Discover tailored solutions for your industry with our specialized expertise.
                                        </p>
                                        <div class="grid grid-cols-2 gap-3">
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                Entertainment
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                Education
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                Transport & Logistics
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                Supply Chain
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                Health Care
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative" id="resources-menu">
                    <button
                        id="resources-toggle"
                        class="inline-flex items-center h-12 font-semibold text-sm md:text-base text-black dark:text-white pr-4 lg:pr-6 hover:text-primary whitespace-nowrap cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg px-3 -mx-3"
                        aria-haspopup="true" aria-expanded="false">Resources</button>
                    <!-- Dropdown Menu -->
                    <div id="resources-dropdown" class="fixed w-[80vw] max-w-[1400px] top-[56px] left-1/2 transform -translate-x-1/2 bg-transparent opacity-0 invisible transition-all duration-300 z-50 pointer-events-none hidden">
                        <!-- Invisible bridge to prevent menu from disappearing when moving mouse -->
                        <div class="absolute -top-1 left-0 right-0 h-1 bg-transparent pointer-events-auto"></div>
                        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <div class="p-6 lg:p-8">
                                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                                    <!-- Left Section: Image and Resources Information -->
                                    <div class="min-w-0 lg:col-span-1">
                                        <div class="mb-6">
                                            <img src="bs-img5.jpg" 
                                                 alt="Explore Our Resources" 
                                                 class="w-full h-48 rounded-lg object-cover">
                                        </div>
                                        <h3 class="text-xl font-bold text-black dark:text-white mb-2">Explore Our Resources</h3>
                                        <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                            Access valuable insights, tutorials, and industry knowledge to stay ahead in technology and business.
                                        </p>
                                    </div>
                                    
                                    <!-- Right Section: Browse Resources -->
                                    <div class="min-w-0 lg:col-span-2">
                                        <h3 class="text-xl font-bold text-black dark:text-white mb-2">Browse Resources</h3>
                                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                                            Explore our comprehensive collection of insights, tutorials, and industry knowledge.
                                        </p>
                                        <div class="grid grid-cols-2 gap-3">
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                Freshwork
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                Podcast
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                Blog
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                Press Release
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative" id="hire-developers-menu">
                    <button
                        id="hire-developers-toggle"
                        class="inline-flex items-center h-12 font-semibold text-sm md:text-base text-black dark:text-white pr-4 lg:pr-6 hover:text-primary whitespace-nowrap cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg px-3 -mx-3"
                        aria-haspopup="true" aria-expanded="false">Hire Developers</button>
                    <!-- Dropdown Menu -->
                    <div id="hire-developers-dropdown" class="fixed w-[80vw] max-w-[1400px] top-[56px] left-1/2 transform -translate-x-1/2 bg-transparent opacity-0 invisible transition-all duration-300 z-50 pointer-events-none hidden">
                        <!-- Invisible bridge to prevent menu from disappearing when moving mouse -->
                        <div class="absolute -top-1 left-0 right-0 h-1 bg-transparent pointer-events-auto"></div>
                        <div class="bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <div class="p-6 lg:p-8">
                                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                                    <!-- Left Section: Image and Hire Developers Information -->
                                    <div class="min-w-0 lg:col-span-1">
                                        <div class="mb-6">
                                            <img src="bs-img5.jpg" 
                                                 alt="Hire Top Developers" 
                                                 class="w-full h-48 rounded-lg object-cover">
                                        </div>
                                        <h3 class="text-xl font-bold text-black dark:text-white mb-2">Hire Top Developers</h3>
                                        <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                            Access vetted developers to scale your team with quality code and innovative solutions.
                                        </p>
                                    </div>
                                    
                                    <!-- Right Section: Hire Skilled Professionals -->
                                    <div class="min-w-0 lg:col-span-2">
                                        <h3 class="text-xl font-bold text-black dark:text-white mb-2">Hire Skilled Professionals</h3>
                                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                                            Access skilled developers across various technologies and domains.
                                        </p>
                                        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                Application Developers
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                UI/UX Designer
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                Frontend Developers
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                Backend Developers
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                Blockchain Developers
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                Smart Contract Developers
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                ML Engineer
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                LLM Engineer
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                DevOps Engineers
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                Game Developers
                                            </a>
                                            <a href="#" class="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-black dark:text-white font-medium text-sm text-center">
                                                E-commerce Developers
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative"><a
                        class="inline-flex items-center h-12 font-semibold text-sm md:text-base text-black dark:text-white hover:text-primary whitespace-nowrap transition-all duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg px-3 -mx-3"
                        aria-haspopup="false" aria-expanded="false" href="/case-study">Portfolio</a></div>
            </nav>
        </div>
        <div class="flex items-center gap-3">
            <div class="lg:hidden flex items-center gap-3"><a aria-label="Call Nadcab Labs"
                    href="tel:+919870635001">
                    <div
                        class="w-10 h-10 flex items-center justify-center bg-black text-white shadow-lg rounded-lg">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                            stroke-linecap="round" stroke-linejoin="round" height="20" width="20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                            </path>
                        </svg></div>
                </a><button id="mobile-menu-toggle" class="focus:outline-none bg-card card-shadow px-2 py-1.5 rounded-lg"
                    aria-label="Toggle menu" aria-expanded="false"><svg id="menu-icon" stroke="currentColor" fill="none"
                        stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="28" width="28"
                        xmlns="http://www.w3.org/2000/svg">
                        <path id="menu-icon-open" stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"></path>
                        <path id="menu-icon-close" class="hidden" stroke-linecap="round" stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"></path>
                    </svg></button></div>
            <div class="hidden lg:flex items-center gap-4"><a
                    class="px-5 py-3 text-xs font-semibold bg-gray-900 dark:bg-white rounded-md text-white dark:text-black"
                    href="/contact">Consult Our Expert</a></div>
        </div>
    </div>
    
    <!-- Mobile Menu Overlay -->
    <div id="mobile-menu-overlay" class="hidden lg:hidden fixed inset-0 top-16 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 opacity-0"></div>
    
    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden lg:hidden fixed inset-0 top-16 z-40 overflow-hidden">
        <div class="h-full bg-white dark:bg-black transform -translate-y-full transition-transform duration-300 ease-in-out overflow-y-auto">
            <nav class="px-6 py-6">
                <div class="space-y-1">
                    <div class="space-y-1">
                        <button id="about-mobile-toggle" class="mobile-menu-item w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-black dark:text-white hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 opacity-0 transform translate-x-4">
                            <span>About</span>
                            <svg class="w-5 h-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div id="about-mobile-menu" class="hidden pl-4 space-y-1 overflow-hidden">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                About Us
                            </a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                Nadcab Labs Team
                            </a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                Career
                            </a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                Partner with Us
                            </a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                Press Release
                            </a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                Contact Us
                            </a>
                        </div>
                    </div>
                    <div class="space-y-1">
                        <button id="services-mobile-toggle" class="mobile-menu-item w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-black dark:text-white hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 opacity-0 transform translate-x-4">
                            <span>Services</span>
                            <svg class="w-5 h-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div id="services-mobile-menu" class="hidden pl-4 space-y-1 overflow-hidden">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                Blockchain Development
                            </a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                Token & Coin
                            </a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                Smart Contract
                            </a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                DApp Development
                            </a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                DeFi Development
                            </a>
                        </div>
                    </div>
                    <div class="space-y-1">
                        <button id="industries-mobile-toggle" class="mobile-menu-item w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-black dark:text-white hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 opacity-0 transform translate-x-4">
                            <span>Industries</span>
                            <svg class="w-5 h-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div id="industries-mobile-menu" class="hidden pl-4 space-y-1 overflow-hidden">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                Entertainment
                            </a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                Education
                            </a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                Transport & Logistics
                            </a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                Supply Chain
                            </a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                Health Care
                            </a>
                        </div>
                    </div>
                    <div class="space-y-1">
                        <button id="resources-mobile-toggle" class="mobile-menu-item w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-black dark:text-white hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 opacity-0 transform translate-x-4">
                            <span>Resources</span>
                            <svg class="w-5 h-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div id="resources-mobile-menu" class="hidden pl-4 space-y-1 overflow-hidden">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                Freshwork
                            </a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                Podcast
                            </a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                Blog
                            </a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                Press Release
                            </a>
                        </div>
                    </div>
                    <div class="space-y-1">
                        <button id="hire-developers-mobile-toggle" class="mobile-menu-item w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-black dark:text-white hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 opacity-0 transform translate-x-4">
                            <span>Hire Developers</span>
                            <svg class="w-5 h-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div id="hire-developers-mobile-menu" class="hidden pl-4 space-y-1 overflow-hidden">
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                Application Developers
                            </a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                Backend Developers
                            </a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                Frontend Developers
                            </a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                UI/UX Designer
                            </a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                Blockchain Developers
                            </a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                Smart Contract Developers
                            </a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                ML Engineer
                            </a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                LLM Engineer
                            </a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                DevOps Engineers
                            </a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                Game Developers
                            </a>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 transform translate-x-2 opacity-0">
                                E-commerce Developers
                            </a>
                        </div>
                    </div>
                    <a href="/case-study" class="mobile-menu-item block px-4 py-3 text-base font-semibold text-black dark:text-white hover:text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 opacity-0 transform translate-x-4">
                        Portfolio
                    </a>
                    <a href="/contact" class="mobile-menu-item block px-4 py-3 mt-4 text-center text-sm font-semibold bg-gray-900 dark:bg-white rounded-md text-white dark:text-black transition-all duration-200 opacity-0 transform translate-x-4">
                        Consult Our Expert
                    </a>
                </div>
            </nav>
        </div>
    </div>
</header>

<style>
    .mobile-menu-open #mobile-menu > div {
        transform: translateY(0);
    }
    
    .mobile-menu-open #mobile-menu-overlay {
        opacity: 1;
    }
    
    .mobile-menu-open .mobile-menu-item {
        opacity: 1 !important;
        transform: translateX(0) !important;
    }
    
    .mobile-menu-item {
        transition-delay: 0ms;
    }
    
    .mobile-menu-item:nth-child(1) { transition-delay: 50ms; }
    .mobile-menu-item:nth-child(2) { transition-delay: 100ms; }
    .mobile-menu-item:nth-child(3) { transition-delay: 150ms; }
    .mobile-menu-item:nth-child(4) { transition-delay: 200ms; }
    .mobile-menu-item:nth-child(5) { transition-delay: 250ms; }
    .mobile-menu-item:nth-child(6) { transition-delay: 300ms; }
    .mobile-menu-item:nth-child(7) { transition-delay: 350ms; }
    .mobile-menu-item:nth-child(8) { transition-delay: 400ms; }
    
    #industries-mobile-menu.show > a {
        opacity: 1 !important;
        transform: translateX(0) !important;
    }
    
    #industries-mobile-menu.show > a:nth-child(1) { transition-delay: 50ms; }
    #industries-mobile-menu.show > a:nth-child(2) { transition-delay: 100ms; }
    #industries-mobile-menu.show > a:nth-child(3) { transition-delay: 150ms; }
    #industries-mobile-menu.show > a:nth-child(4) { transition-delay: 200ms; }
    #industries-mobile-menu.show > a:nth-child(5) { transition-delay: 250ms; }
    
    #services-mobile-menu.show > a {
        opacity: 1 !important;
        transform: translateX(0) !important;
    }
    
    #services-mobile-menu.show > a:nth-child(1) { transition-delay: 50ms; }
    #services-mobile-menu.show > a:nth-child(2) { transition-delay: 100ms; }
    #services-mobile-menu.show > a:nth-child(3) { transition-delay: 150ms; }
    #services-mobile-menu.show > a:nth-child(4) { transition-delay: 200ms; }
    #services-mobile-menu.show > a:nth-child(5) { transition-delay: 250ms; }
    
    #about-mobile-menu.show > a {
        opacity: 1 !important;
        transform: translateX(0) !important;
    }
    
    #about-mobile-menu.show > a:nth-child(1) { transition-delay: 50ms; }
    #about-mobile-menu.show > a:nth-child(2) { transition-delay: 100ms; }
    #about-mobile-menu.show > a:nth-child(3) { transition-delay: 150ms; }
    #about-mobile-menu.show > a:nth-child(4) { transition-delay: 200ms; }
    #about-mobile-menu.show > a:nth-child(5) { transition-delay: 250ms; }
    #about-mobile-menu.show > a:nth-child(6) { transition-delay: 300ms; }
    
    #resources-mobile-menu.show > a {
        opacity: 1 !important;
        transform: translateX(0) !important;
    }
    
    #resources-mobile-menu.show > a:nth-child(1) { transition-delay: 50ms; }
    #resources-mobile-menu.show > a:nth-child(2) { transition-delay: 100ms; }
    #resources-mobile-menu.show > a:nth-child(3) { transition-delay: 150ms; }
    #resources-mobile-menu.show > a:nth-child(4) { transition-delay: 200ms; }
    
    #hire-developers-mobile-menu.show > a {
        opacity: 1 !important;
        transform: translateX(0) !important;
    }
    
    #hire-developers-mobile-menu.show > a:nth-child(1) { transition-delay: 50ms; }
    #hire-developers-mobile-menu.show > a:nth-child(2) { transition-delay: 100ms; }
    #hire-developers-mobile-menu.show > a:nth-child(3) { transition-delay: 150ms; }
    #hire-developers-mobile-menu.show > a:nth-child(4) { transition-delay: 200ms; }
    #hire-developers-mobile-menu.show > a:nth-child(5) { transition-delay: 250ms; }
    #hire-developers-mobile-menu.show > a:nth-child(6) { transition-delay: 300ms; }
    #hire-developers-mobile-menu.show > a:nth-child(7) { transition-delay: 350ms; }
    #hire-developers-mobile-menu.show > a:nth-child(8) { transition-delay: 400ms; }
    #hire-developers-mobile-menu.show > a:nth-child(9) { transition-delay: 450ms; }
    #hire-developers-mobile-menu.show > a:nth-child(10) { transition-delay: 500ms; }
    #hire-developers-mobile-menu.show > a:nth-child(11) { transition-delay: 550ms; }
    
    /* Desktop dropdown styles */
    #about-dropdown,
    #services-dropdown,
    #industries-dropdown,
    #resources-dropdown,
    #hire-developers-dropdown {
        width: 80vw;
    }
    
    #about-dropdown.show,
    #services-dropdown.show,
    #industries-dropdown.show,
    #resources-dropdown.show,
    #hire-developers-dropdown.show {
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto !important;
    }
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuContent = mobileMenu ? mobileMenu.querySelector('div') : null;
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');
    const aboutMobileToggle = document.getElementById('about-mobile-toggle');
    const aboutMobileMenu = document.getElementById('about-mobile-menu');
    const industriesMobileToggle = document.getElementById('industries-mobile-toggle');
    const industriesMobileMenu = document.getElementById('industries-mobile-menu');
    const servicesMobileToggle = document.getElementById('services-mobile-toggle');
    const servicesMobileMenu = document.getElementById('services-mobile-menu');
    const resourcesMobileToggle = document.getElementById('resources-mobile-toggle');
    const resourcesMobileMenu = document.getElementById('resources-mobile-menu');
    const hireDevelopersMobileToggle = document.getElementById('hire-developers-mobile-toggle');
    const hireDevelopersMobileMenu = document.getElementById('hire-developers-mobile-menu');
    
    // Desktop dropdown elements
    const aboutToggle = document.getElementById('about-toggle');
    const aboutDropdown = document.getElementById('about-dropdown');
    const servicesToggle = document.getElementById('services-toggle');
    const servicesDropdown = document.getElementById('services-dropdown');
    const industriesToggle = document.getElementById('industries-toggle');
    const industriesDropdown = document.getElementById('industries-dropdown');
    const resourcesToggle = document.getElementById('resources-toggle');
    const resourcesDropdown = document.getElementById('resources-dropdown');
    const hireDevelopersToggle = document.getElementById('hire-developers-toggle');
    const hireDevelopersDropdown = document.getElementById('hire-developers-dropdown');
    
    // Function to close all desktop dropdowns
    function closeAllDesktopDropdowns() {
        if (aboutDropdown) {
            aboutDropdown.classList.remove('show');
            aboutDropdown.classList.add('hidden');
            if (aboutToggle) {
                aboutToggle.setAttribute('aria-expanded', 'false');
            }
        }
        if (servicesDropdown) {
            servicesDropdown.classList.remove('show');
            servicesDropdown.classList.add('hidden');
            if (servicesToggle) {
                servicesToggle.setAttribute('aria-expanded', 'false');
            }
        }
        if (industriesDropdown) {
            industriesDropdown.classList.remove('show');
            industriesDropdown.classList.add('hidden');
            if (industriesToggle) {
                industriesToggle.setAttribute('aria-expanded', 'false');
            }
        }
        if (resourcesDropdown) {
            resourcesDropdown.classList.remove('show');
            resourcesDropdown.classList.add('hidden');
            if (resourcesToggle) {
                resourcesToggle.setAttribute('aria-expanded', 'false');
            }
        }
        if (hireDevelopersDropdown) {
            hireDevelopersDropdown.classList.remove('show');
            hireDevelopersDropdown.classList.add('hidden');
            if (hireDevelopersToggle) {
                hireDevelopersToggle.setAttribute('aria-expanded', 'false');
            }
        }
    }
    
    // Function to toggle about dropdown
    function toggleAboutDropdown() {
        if (!aboutDropdown || !aboutToggle) return;
        
        const isOpen = aboutDropdown.classList.contains('show');
        
        // Close other dropdowns if open
        if (servicesDropdown && servicesDropdown.classList.contains('show')) {
            servicesDropdown.classList.remove('show');
            servicesDropdown.classList.add('hidden');
            if (servicesToggle) {
                servicesToggle.setAttribute('aria-expanded', 'false');
            }
        }
        if (industriesDropdown && industriesDropdown.classList.contains('show')) {
            industriesDropdown.classList.remove('show');
            industriesDropdown.classList.add('hidden');
            if (industriesToggle) {
                industriesToggle.setAttribute('aria-expanded', 'false');
            }
        }
        if (resourcesDropdown && resourcesDropdown.classList.contains('show')) {
            resourcesDropdown.classList.remove('show');
            resourcesDropdown.classList.add('hidden');
            if (resourcesToggle) {
                resourcesToggle.setAttribute('aria-expanded', 'false');
            }
        }
        if (hireDevelopersDropdown && hireDevelopersDropdown.classList.contains('show')) {
            hireDevelopersDropdown.classList.remove('show');
            hireDevelopersDropdown.classList.add('hidden');
            if (hireDevelopersToggle) {
                hireDevelopersToggle.setAttribute('aria-expanded', 'false');
            }
        }
        
        if (isOpen) {
            aboutDropdown.classList.remove('show');
            aboutDropdown.classList.add('hidden');
            aboutToggle.setAttribute('aria-expanded', 'false');
        } else {
            aboutDropdown.classList.remove('hidden');
            requestAnimationFrame(() => {
                aboutDropdown.classList.add('show');
                aboutToggle.setAttribute('aria-expanded', 'true');
            });
        }
    }
    
    // Function to toggle services dropdown
    function toggleServicesDropdown() {
        if (!servicesDropdown || !servicesToggle) return;
        
        const isOpen = servicesDropdown.classList.contains('show');
        
        // Close other dropdowns if open
        if (aboutDropdown && aboutDropdown.classList.contains('show')) {
            aboutDropdown.classList.remove('show');
            aboutDropdown.classList.add('hidden');
            if (aboutToggle) {
                aboutToggle.setAttribute('aria-expanded', 'false');
            }
        }
        if (industriesDropdown && industriesDropdown.classList.contains('show')) {
            industriesDropdown.classList.remove('show');
            industriesDropdown.classList.add('hidden');
            if (industriesToggle) {
                industriesToggle.setAttribute('aria-expanded', 'false');
            }
        }
        if (resourcesDropdown && resourcesDropdown.classList.contains('show')) {
            resourcesDropdown.classList.remove('show');
            resourcesDropdown.classList.add('hidden');
            if (resourcesToggle) {
                resourcesToggle.setAttribute('aria-expanded', 'false');
            }
        }
        if (hireDevelopersDropdown && hireDevelopersDropdown.classList.contains('show')) {
            hireDevelopersDropdown.classList.remove('show');
            hireDevelopersDropdown.classList.add('hidden');
            if (hireDevelopersToggle) {
                hireDevelopersToggle.setAttribute('aria-expanded', 'false');
            }
        }
        
        if (isOpen) {
            servicesDropdown.classList.remove('show');
            servicesDropdown.classList.add('hidden');
            servicesToggle.setAttribute('aria-expanded', 'false');
        } else {
            servicesDropdown.classList.remove('hidden');
            requestAnimationFrame(() => {
                servicesDropdown.classList.add('show');
                servicesToggle.setAttribute('aria-expanded', 'true');
            });
        }
    }
    
    // Function to toggle industries dropdown
    function toggleIndustriesDropdown() {
        if (!industriesDropdown || !industriesToggle) return;
        
        const isOpen = industriesDropdown.classList.contains('show');
        
        // Close other dropdowns if open
        if (aboutDropdown && aboutDropdown.classList.contains('show')) {
            aboutDropdown.classList.remove('show');
            aboutDropdown.classList.add('hidden');
            if (aboutToggle) {
                aboutToggle.setAttribute('aria-expanded', 'false');
            }
        }
        if (servicesDropdown && servicesDropdown.classList.contains('show')) {
            servicesDropdown.classList.remove('show');
            servicesDropdown.classList.add('hidden');
            if (servicesToggle) {
                servicesToggle.setAttribute('aria-expanded', 'false');
            }
        }
        if (resourcesDropdown && resourcesDropdown.classList.contains('show')) {
            resourcesDropdown.classList.remove('show');
            resourcesDropdown.classList.add('hidden');
            if (resourcesToggle) {
                resourcesToggle.setAttribute('aria-expanded', 'false');
            }
        }
        if (hireDevelopersDropdown && hireDevelopersDropdown.classList.contains('show')) {
            hireDevelopersDropdown.classList.remove('show');
            hireDevelopersDropdown.classList.add('hidden');
            if (hireDevelopersToggle) {
                hireDevelopersToggle.setAttribute('aria-expanded', 'false');
            }
        }
        
        if (isOpen) {
            industriesDropdown.classList.remove('show');
            industriesDropdown.classList.add('hidden');
            industriesToggle.setAttribute('aria-expanded', 'false');
        } else {
            industriesDropdown.classList.remove('hidden');
            requestAnimationFrame(() => {
                industriesDropdown.classList.add('show');
                industriesToggle.setAttribute('aria-expanded', 'true');
            });
        }
    }
    
    // Function to toggle resources dropdown
    function toggleResourcesDropdown() {
        if (!resourcesDropdown || !resourcesToggle) return;
        
        const isOpen = resourcesDropdown.classList.contains('show');
        
        // Close other dropdowns if open
        if (aboutDropdown && aboutDropdown.classList.contains('show')) {
            aboutDropdown.classList.remove('show');
            aboutDropdown.classList.add('hidden');
            if (aboutToggle) {
                aboutToggle.setAttribute('aria-expanded', 'false');
            }
        }
        if (servicesDropdown && servicesDropdown.classList.contains('show')) {
            servicesDropdown.classList.remove('show');
            servicesDropdown.classList.add('hidden');
            if (servicesToggle) {
                servicesToggle.setAttribute('aria-expanded', 'false');
            }
        }
        if (industriesDropdown && industriesDropdown.classList.contains('show')) {
            industriesDropdown.classList.remove('show');
            industriesDropdown.classList.add('hidden');
            if (industriesToggle) {
                industriesToggle.setAttribute('aria-expanded', 'false');
            }
        }
        
        if (hireDevelopersDropdown && hireDevelopersDropdown.classList.contains('show')) {
            hireDevelopersDropdown.classList.remove('show');
            hireDevelopersDropdown.classList.add('hidden');
            if (hireDevelopersToggle) {
                hireDevelopersToggle.setAttribute('aria-expanded', 'false');
            }
        }
        
        if (isOpen) {
            resourcesDropdown.classList.remove('show');
            resourcesDropdown.classList.add('hidden');
            resourcesToggle.setAttribute('aria-expanded', 'false');
        } else {
            resourcesDropdown.classList.remove('hidden');
            requestAnimationFrame(() => {
                resourcesDropdown.classList.add('show');
                resourcesToggle.setAttribute('aria-expanded', 'true');
            });
        }
    }
    
    // Function to toggle hire developers dropdown
    function toggleHireDevelopersDropdown() {
        if (!hireDevelopersDropdown || !hireDevelopersToggle) return;
        
        const isOpen = hireDevelopersDropdown.classList.contains('show');
        
        // Close other dropdowns if open
        if (aboutDropdown && aboutDropdown.classList.contains('show')) {
            aboutDropdown.classList.remove('show');
            aboutDropdown.classList.add('hidden');
            if (aboutToggle) {
                aboutToggle.setAttribute('aria-expanded', 'false');
            }
        }
        if (servicesDropdown && servicesDropdown.classList.contains('show')) {
            servicesDropdown.classList.remove('show');
            servicesDropdown.classList.add('hidden');
            if (servicesToggle) {
                servicesToggle.setAttribute('aria-expanded', 'false');
            }
        }
        if (industriesDropdown && industriesDropdown.classList.contains('show')) {
            industriesDropdown.classList.remove('show');
            industriesDropdown.classList.add('hidden');
            if (industriesToggle) {
                industriesToggle.setAttribute('aria-expanded', 'false');
            }
        }
        if (resourcesDropdown && resourcesDropdown.classList.contains('show')) {
            resourcesDropdown.classList.remove('show');
            resourcesDropdown.classList.add('hidden');
            if (resourcesToggle) {
                resourcesToggle.setAttribute('aria-expanded', 'false');
            }
        }
        
        if (isOpen) {
            hireDevelopersDropdown.classList.remove('show');
            hireDevelopersDropdown.classList.add('hidden');
            hireDevelopersToggle.setAttribute('aria-expanded', 'false');
        } else {
            hireDevelopersDropdown.classList.remove('hidden');
            requestAnimationFrame(() => {
                hireDevelopersDropdown.classList.add('show');
                hireDevelopersToggle.setAttribute('aria-expanded', 'true');
            });
        }
    }
    
    // Desktop dropdown click handlers
    if (aboutToggle && aboutDropdown) {
        aboutToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleAboutDropdown();
        });
    }
    
    if (servicesToggle && servicesDropdown) {
        servicesToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleServicesDropdown();
        });
    }
    
    if (industriesToggle && industriesDropdown) {
        industriesToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleIndustriesDropdown();
        });
    }
    
    if (resourcesToggle && resourcesDropdown) {
        resourcesToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleResourcesDropdown();
        });
    }
    
    if (hireDevelopersToggle && hireDevelopersDropdown) {
        hireDevelopersToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleHireDevelopersDropdown();
        });
    }
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
        if (aboutDropdown && servicesDropdown && industriesDropdown && resourcesDropdown && hireDevelopersDropdown) {
            const aboutMenu = document.getElementById('about-menu');
            const servicesMenu = document.getElementById('services-menu');
            const industriesMenu = document.getElementById('industries-menu');
            const resourcesMenu = document.getElementById('resources-menu');
            const hireDevelopersMenu = document.getElementById('hire-developers-menu');
            
            const isClickInsideAbout = aboutMenu && aboutMenu.contains(event.target);
            const isClickInsideServices = servicesMenu && servicesMenu.contains(event.target);
            const isClickInsideIndustries = industriesMenu && industriesMenu.contains(event.target);
            const isClickInsideResources = resourcesMenu && resourcesMenu.contains(event.target);
            const isClickInsideHireDevelopers = hireDevelopersMenu && hireDevelopersMenu.contains(event.target);
            
            if (!isClickInsideAbout && !isClickInsideServices && !isClickInsideIndustries && !isClickInsideResources && !isClickInsideHireDevelopers) {
                closeAllDesktopDropdowns();
            }
        }
    });
    
    // Close dropdowns on escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeAllDesktopDropdowns();
        }
    });
    
    function openMenu() {
        if (!mobileMenu || !mobileMenuOverlay || !mobileMenuContent) return;
        
        // Show menu and overlay
        mobileMenu.classList.remove('hidden');
        mobileMenuOverlay.classList.remove('hidden');
        
        // Trigger animation
        requestAnimationFrame(() => {
            document.body.classList.add('mobile-menu-open');
            mobileMenuToggle.setAttribute('aria-expanded', 'true');
            menuIconOpen.classList.add('hidden');
            menuIconClose.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
    }
    
    function closeMenu() {
        if (!mobileMenu || !mobileMenuOverlay) return;
        
        // Remove open class to trigger close animation
        document.body.classList.remove('mobile-menu-open');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        menuIconOpen.classList.remove('hidden');
        menuIconClose.classList.add('hidden');
        document.body.style.overflow = '';
        
        // Close about submenu if open
        if (aboutMobileMenu) {
            aboutMobileMenu.classList.remove('show');
            aboutMobileMenu.classList.add('hidden');
            const arrow = aboutMobileToggle ? aboutMobileToggle.querySelector('svg') : null;
            if (arrow) {
                arrow.style.transform = 'rotate(0deg)';
            }
        }
        
        // Close industries submenu if open
        if (industriesMobileMenu) {
            industriesMobileMenu.classList.remove('show');
            industriesMobileMenu.classList.add('hidden');
            const arrow = industriesMobileToggle ? industriesMobileToggle.querySelector('svg') : null;
            if (arrow) {
                arrow.style.transform = 'rotate(0deg)';
            }
        }
        
        // Close services submenu if open
        if (servicesMobileMenu) {
            servicesMobileMenu.classList.remove('show');
            servicesMobileMenu.classList.add('hidden');
            const arrow = servicesMobileToggle ? servicesMobileToggle.querySelector('svg') : null;
            if (arrow) {
                arrow.style.transform = 'rotate(0deg)';
            }
        }
        
        // Close resources submenu if open
        if (resourcesMobileMenu) {
            resourcesMobileMenu.classList.remove('show');
            resourcesMobileMenu.classList.add('hidden');
            const arrow = resourcesMobileToggle ? resourcesMobileToggle.querySelector('svg') : null;
            if (arrow) {
                arrow.style.transform = 'rotate(0deg)';
            }
        }
        
        // Close hire developers submenu if open
        if (hireDevelopersMobileMenu) {
            hireDevelopersMobileMenu.classList.remove('show');
            hireDevelopersMobileMenu.classList.add('hidden');
            const arrow = hireDevelopersMobileToggle ? hireDevelopersMobileToggle.querySelector('svg') : null;
            if (arrow) {
                arrow.style.transform = 'rotate(0deg)';
            }
        }
        
        // Hide menu after animation completes
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
            mobileMenuOverlay.classList.add('hidden');
        }, 300);
    }
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            const isOpen = document.body.classList.contains('mobile-menu-open');
            
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }
    
    // Handle about submenu toggle
    if (aboutMobileToggle && aboutMobileMenu) {
        aboutMobileToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            const isOpen = aboutMobileMenu.classList.contains('show');
            const arrow = aboutMobileToggle.querySelector('svg');
            
            if (isOpen) {
                aboutMobileMenu.classList.remove('show');
                aboutMobileMenu.classList.add('hidden');
                if (arrow) {
                    arrow.style.transform = 'rotate(0deg)';
                }
            } else {
                aboutMobileMenu.classList.remove('hidden');
                // Trigger animation
                requestAnimationFrame(() => {
                    aboutMobileMenu.classList.add('show');
                    if (arrow) {
                        arrow.style.transform = 'rotate(180deg)';
                    }
                });
            }
        });
    }
    
    // Handle industries submenu toggle
    if (industriesMobileToggle && industriesMobileMenu) {
        industriesMobileToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            const isOpen = industriesMobileMenu.classList.contains('show');
            const arrow = industriesMobileToggle.querySelector('svg');
            
            if (isOpen) {
                industriesMobileMenu.classList.remove('show');
                industriesMobileMenu.classList.add('hidden');
                if (arrow) {
                    arrow.style.transform = 'rotate(0deg)';
                }
            } else {
                industriesMobileMenu.classList.remove('hidden');
                // Trigger animation
                requestAnimationFrame(() => {
                    industriesMobileMenu.classList.add('show');
                    if (arrow) {
                        arrow.style.transform = 'rotate(180deg)';
                    }
                });
            }
        });
    }
    
    // Handle services submenu toggle
    if (servicesMobileToggle && servicesMobileMenu) {
        servicesMobileToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            const isOpen = servicesMobileMenu.classList.contains('show');
            const arrow = servicesMobileToggle.querySelector('svg');
            
            if (isOpen) {
                servicesMobileMenu.classList.remove('show');
                servicesMobileMenu.classList.add('hidden');
                if (arrow) {
                    arrow.style.transform = 'rotate(0deg)';
                }
            } else {
                servicesMobileMenu.classList.remove('hidden');
                // Trigger animation
                requestAnimationFrame(() => {
                    servicesMobileMenu.classList.add('show');
                    if (arrow) {
                        arrow.style.transform = 'rotate(180deg)';
                    }
                });
            }
        });
    }
    
    // Handle resources submenu toggle
    if (resourcesMobileToggle && resourcesMobileMenu) {
        resourcesMobileToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            const isOpen = resourcesMobileMenu.classList.contains('show');
            const arrow = resourcesMobileToggle.querySelector('svg');
            
            if (isOpen) {
                resourcesMobileMenu.classList.remove('show');
                resourcesMobileMenu.classList.add('hidden');
                if (arrow) {
                    arrow.style.transform = 'rotate(0deg)';
                }
            } else {
                resourcesMobileMenu.classList.remove('hidden');
                // Trigger animation
                requestAnimationFrame(() => {
                    resourcesMobileMenu.classList.add('show');
                    if (arrow) {
                        arrow.style.transform = 'rotate(180deg)';
                    }
                });
            }
        });
    }
    
    // Handle hire developers submenu toggle
    if (hireDevelopersMobileToggle && hireDevelopersMobileMenu) {
        hireDevelopersMobileToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            const isOpen = hireDevelopersMobileMenu.classList.contains('show');
            const arrow = hireDevelopersMobileToggle.querySelector('svg');
            
            if (isOpen) {
                hireDevelopersMobileMenu.classList.remove('show');
                hireDevelopersMobileMenu.classList.add('hidden');
                if (arrow) {
                    arrow.style.transform = 'rotate(0deg)';
                }
            } else {
                hireDevelopersMobileMenu.classList.remove('hidden');
                // Trigger animation
                requestAnimationFrame(() => {
                    hireDevelopersMobileMenu.classList.add('show');
                    if (arrow) {
                        arrow.style.transform = 'rotate(180deg)';
                    }
                });
            }
        });
    }
    
    // Close menu when clicking overlay
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', function() {
            closeMenu();
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileMenu && mobileMenuToggle && 
            !mobileMenu.contains(event.target) && 
            !mobileMenuToggle.contains(event.target) &&
            document.body.classList.contains('mobile-menu-open')) {
            closeMenu();
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && document.body.classList.contains('mobile-menu-open')) {
            closeMenu();
        }
    });
});
</script>


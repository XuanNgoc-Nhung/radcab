<!DOCTYPE html>
<html lang="en" class="inter_e73ca43f-module__lUsY7a__variable">

<head>
    <base href="{{ asset('/') }}">
    <link rel="stylesheet" href="/_next/static/chunks/a7db655d40ea196a.css?dpl=dpl_BQX6JcjCNdC3UL3EwQ7zkMCA2ViD"
        data-precedence="next">
    <link rel="stylesheet" href="/_next/static/chunks/b984ac06f245fbf5.css?dpl=dpl_BQX6JcjCNdC3UL3EwQ7zkMCA2ViD"
        data-precedence="next">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Veridaxlabs | Top AI &amp; Blockchain Development Company USA</title>
    <meta name="description"
        content="Build smart Web3 platforms &amp; intelligent systems with Veridaxlabs. Providing blockchain solutions, DeFi apps &amp; AI integration for secure, scalable innovations.">
    <meta name="robots" content="index, follow">
    <meta property="og:title" content="Veridaxlabs | Top AI &amp; Blockchain Development Company USA">
    <meta property="og:description"
        content="Build smart Web3 platforms &amp; intelligent systems with Veridaxlabs. Providing blockchain solutions, DeFi apps &amp; AI integration for secure, scalable innovations.">
    <link rel="shortcut icon" href="/favicon.png">
    <link rel="icon" href="/favicon.png">
    <link rel="apple-touch-icon" href="/favicon.png">
    <!-- Animate.css for WOW.js animations -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <style type="text/css" data-styled-jsx="">
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none
        }

        .scrollbar-hide::-webkit-scrollbar {
            display: none
        }

        /* Marquee Animation */
        @keyframes marquee {
            0% {
                transform: translateY(0);
            }
            100% {
                transform: translateY(-50%);
            }
        }

        .animate-marquee {
            animation: marquee linear infinite;
        }

        /* Back to Top Button */
        .back-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #1b1b18 0%, #3E3E3A 100%);
            color: #fff;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(27, 27, 24, 0.4);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 0;
            transform: translateY(20px) scale(0.8);
        }

        .back-to-top.show {
            display: flex;
            opacity: 1;
            transform: translateY(0) scale(1);
        }

        .back-to-top:hover {
            background: linear-gradient(135deg, #3E3E3A 0%, #1b1b18 100%);
            transform: translateY(-5px) scale(1.1);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 8px rgba(27, 27, 24, 0.1);
        }

        .back-to-top:active {
            transform: translateY(-2px) scale(1.05);
        }

        .back-to-top svg {
            width: 24px;
            height: 24px;
            stroke: currentColor;
            fill: none;
            stroke-width: 2.5;
            stroke-linecap: round;
            stroke-linejoin: round;
        }

        /* Animation for button appearance */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px) scale(0.8);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }

        .back-to-top.show {
            animation: fadeInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Responsive */
        @media (max-width: 768px) {
            .back-to-top {
                bottom: 20px;
                right: 20px;
                width: 45px;
                height: 45px;
            }

            .back-to-top svg {
                width: 20px;
                height: 20px;
            }
        }

    </style>
</head>

<body class="font-sans antialiased" cz-shortcut-listen="true">
    @include('user.components.header')
    @yield('content')
    @include('user.components.footer')

    <!-- Back to Top Button -->
    <button class="back-to-top" id="backToTop" aria-label="Back to top">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
    </button>

    <!-- WOW.js for scroll animations -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>
    <script>
        // Initialize WOW.js
        new WOW({
            boxClass: 'wow',
            animateClass: 'animate__animated',
            offset: 100,
            mobile: true,
            live: true
        }).init();

        // Disable all anchor tags in body except those in header and footer
        document.addEventListener('DOMContentLoaded', function() {
            // Get all anchor tags in the body
            const allLinks = document.body.querySelectorAll('a');
            
            allLinks.forEach(function(link) {
                // Check if the link is inside header or footer
                const isInHeader = link.closest('header') !== null;
                const isInFooter = link.closest('footer') !== null;
                
                // If not in header or footer, disable it
                if (!isInHeader && !isInFooter) {
                    // Prevent default click behavior
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                    });
                    
                    // Add visual indication that link is disabled
                    link.style.cursor = 'not-allowed';
                    link.style.opacity = '0.6';
                    link.style.pointerEvents = 'none';
                }
            });

            // Back to Top Button Functionality
            const backToTopButton = document.getElementById('backToTop');
            const scrollThreshold = 300; // Show button after scrolling 300px

            // Show/hide button based on scroll position
            function toggleBackToTopButton() {
                if (window.pageYOffset > scrollThreshold) {
                    backToTopButton.classList.add('show');
                } else {
                    backToTopButton.classList.remove('show');
                }
            }

            // Smooth scroll to top when button is clicked
            backToTopButton.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });

            // Listen to scroll events
            window.addEventListener('scroll', toggleBackToTopButton);
            
            // Check initial scroll position
            toggleBackToTopButton();
        });
    </script>
</body>

</html>

@php
    // Chia FAQ thành 2 cột (5 câu hỏi mỗi cột)
    $faqs = $faqs ?? [];
    $faqsLeft = array_slice($faqs, 0, ceil(count($faqs) / 2));
    $faqsRight = array_slice($faqs, ceil(count($faqs) / 2));
@endphp

<div class="mb-16">
    <section class="w-full lg:py-16 pb-16 px-4">
        <div class="max-w-7xl mx-auto">
            <h2 class="text-center gradient-text font-medium text-3xl sm:text-4xl lg:mb-12 mb-6 wow animate__fadeInUp animate__animated"
                style="visibility: visible; animation-name: fadeInUp;">Frequently
                Asked Questions</h2>
            <div class="grid lg:gap-6 gap-4 grid-cols-1 sm:grid-cols-2">
                <div class="lg:space-y-6 space-y-3">
                    @foreach($faqsLeft as $index => $faq)
                    <div class="" style="animation-delay: {{ $index * 100 }}ms;">
                        <div class="accordion-item bg-card rounded-md card-shadow overflow-hidden">
                            <button class="accordion-trigger w-full flex items-center justify-between p-6 text-left">
                                <h3 class="font-normal text-base md:font-medium md:text-base">{{ $faq['question'] }}</h3>
                                <div class="flex-shrink-0 w-9 h-9 bg-card card-shadow dark:shadow-none flex items-center justify-center">
                                    <div class="w-7 h-7 flex items-center justify-center bg-card card-shadow dark:shadow-none">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                            viewBox="0 0 512 512"
                                            class="w-6 h-6 transition-transform duration-300 " height="1em"
                                            width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M128 192l128 128 128-128z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </button>
                            <div class="accordion-content px-6 overflow-hidden transition-all duration-300 max-h-0">
                                <div class="text-muted-foreground [&_a]:text-blue-600 [&_ul]:list-disc [&_ul]:ml-5 [&_ol]:list-decimal [&_ol]:ml-5 [&_a:hover]:underline dark:[&_a]:text-blue-400">
                                    {!! $faq['answer'] !!}
                                </div>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
                <div class="lg:space-y-6 space-y-3">
                    @foreach($faqsRight as $index => $faq)
                    <div class="" style="animation-delay: {{ $index * 100 }}ms;">
                        <div class="accordion-item bg-card rounded-md card-shadow overflow-hidden">
                            <button class="accordion-trigger w-full flex items-center justify-between p-6 text-left">
                                <h3 class="font-normal text-base md:font-medium md:text-base">{{ $faq['question'] }}</h3>
                                <div class="flex-shrink-0 w-9 h-9 bg-card card-shadow dark:shadow-none flex items-center justify-center">
                                    <div class="w-7 h-7 flex items-center justify-center bg-card card-shadow dark:shadow-none">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                            viewBox="0 0 512 512"
                                            class="w-6 h-6 transition-transform duration-300 " height="1em"
                                            width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M128 192l128 128 128-128z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </button>
                            <div class="accordion-content px-6 overflow-hidden transition-all duration-300 max-h-0">
                                <div class="text-muted-foreground [&_a]:text-blue-600 [&_ul]:list-disc [&_ul]:ml-5 [&_ol]:list-decimal [&_ol]:ml-5 [&_a:hover]:underline dark:[&_a]:text-blue-400">
                                    {!! $faq['answer'] !!}
                                </div>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>
        </div>
    </section>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Get all accordion triggers and items
        const accordionTriggers = document.querySelectorAll('.accordion-trigger');
        const accordionItems = document.querySelectorAll('.accordion-item');
        
        // Function to close all accordions
        function closeAllAccordions() {
            accordionItems.forEach(function(item) {
                const content = item.querySelector('.accordion-content');
                const icon = item.querySelector('svg');
                if (content) {
                    content.style.maxHeight = '0px';
                    content.classList.remove('py-4');
                    content.classList.add('max-h-0');
                }
                if (icon) {
                    icon.classList.remove('rotate-180');
                }
            });
        }
        
        accordionTriggers.forEach(function(trigger) {
            trigger.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Get the accordion item (parent container)
                const accordionItem = this.closest('.accordion-item');
                const accordionContent = accordionItem.querySelector('.accordion-content');
                const accordionIcon = accordionItem.querySelector('svg');
                
                if (!accordionContent) return;
                
                // Check if accordion is currently open
                const isOpen = accordionContent.style.maxHeight && 
                              accordionContent.style.maxHeight !== '0px' && 
                              accordionContent.style.maxHeight !== '';
                
                // Toggle current accordion
                if (isOpen) {
                    // Close accordion
                    accordionContent.style.maxHeight = '0px';
                    accordionContent.classList.remove('py-4');
                    accordionContent.classList.add('max-h-0');
                    if (accordionIcon) {
                        accordionIcon.classList.remove('rotate-180');
                    }
                } else {
                    // Close all other accordions first
                    closeAllAccordions();
                    
                    // Small delay to ensure other accordions are closed before opening this one
                    setTimeout(function() {
                        // Open accordion
                        accordionContent.classList.remove('max-h-0');
                        // First, set max-height to none to get the actual scrollHeight
                        accordionContent.style.maxHeight = 'none';
                        const scrollHeight = accordionContent.scrollHeight;
                        
                        // Reset to 0 for animation
                        accordionContent.style.maxHeight = '0px';
                        accordionContent.classList.add('py-4');
                        
                        // Force reflow
                        void accordionContent.offsetHeight;
                        
                        // Now animate to full height
                        setTimeout(function() {
                            accordionContent.style.maxHeight = scrollHeight + 'px';
                        }, 10);
                        
                        if (accordionIcon) {
                            accordionIcon.classList.add('rotate-180');
                        }
                        
                        // After transition, set to auto to allow content to grow if needed
                        setTimeout(function() {
                            if (accordionContent.style.maxHeight !== '0px') {
                                accordionContent.style.maxHeight = 'none';
                            }
                        }, 300);
                    }, 50);
                }
            });
        });
        
        // Initialize all accordions as closed
        closeAllAccordions();
    });
</script>

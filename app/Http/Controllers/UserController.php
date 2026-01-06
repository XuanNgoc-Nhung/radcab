<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function homepage()
    {
        $faqs = [
            [
                'question' => 'What software services do you offer?',
                'answer' => 'We offer end-to-end software development, including custom applications, AI integration, cloud solutions, automation systems, and enterprise platforms tailored to meet diverse business needs efficiently.'
            ],
            [
                'question' => 'What mobile app development services do you offer?',
                'answer' => 'We design, develop, and deploy high-performing <a href="/iphone-application-development">mobile apps for iOS</a>, Android, and cross-platform environments, ensuring seamless user experiences and business scalability through innovative, secure, and optimized solutions.'
            ],
            [
                'question' => 'Cost & timeline for blockchain development?',
                'answer' => 'The cost and timeline depend on project scope, complexity, and technology stack. Typically, blockchain solutions take 3–6 months and range from $30,000 to $150,000.'
            ],
            [
                'question' => 'How do you ensure software security & quality?',
                'answer' => 'We follow strict security protocols, code reviews, <a href="/quality-assurance">QA testing</a>, and compliance standards, ensuring reliable, high-quality, and secure software that meets both functional and regulatory requirements.'
            ],
            [
                'question' => 'Do you offer app support & maintenance?',
                'answer' => 'Yes, we provide comprehensive post-launch support, updates, performance monitoring, and feature enhancements to ensure your app remains secure, efficient, and aligned with evolving business needs.'
            ],
            [
                'question' => 'Why choose Nadcab Labs for development?',
                'answer' => 'Nadcab Labs combines deep technical expertise, agile methodologies, and innovative solutions to deliver scalable, high-quality software and mobile applications that drive growth and digital transformation.'
            ],
            [
                'question' => 'How does Nadcab Labs ensure ethical AI use?',
                'answer' => 'We prioritize transparency, fairness, and accountability in AI systems, ensuring ethical data handling, bias-free algorithms, and responsible AI practices aligned with global standard'
            ],
            [
                'question' => 'What\'s your app & software development process?',
                'answer' => 'Our process includes discovery, design, agile development, testing, deployment, and continuous improvement to ensure scalable, efficient, and user-centric software solutions.'
            ],
            [
                'question' => 'Do you handle integration & data migration?',
                'answer' => 'Yes, we offer seamless software integration and secure data <a href="/cloud-migration-services">migration services</a>, ensuring minimal downtime, data integrity, and a smooth transition to modern platforms.'
            ],
            [
                'question' => 'Can AI be integrated into legacy systems?',
                'answer' => 'Yes, we specialize in embedding AI into existing software, enhancing functionality, automation, and decision-making while maintaining system stability and compatibility.'
            ]
        ];

        return view('user.homepage', compact('faqs'));
    }

    public function about()
    {
        return view('user.about');
    }
    public function team()
    {
        return view('user.team');
    }
    public function career()
    {
        return view('user.career');
    }
    public function partner()
    {
        $faqs = [
            [
                'question' => 'Who can become a partner with Nadcab Labs?',
                'answer' => 'Nadcab Labs welcomes Web3 startups, enterprises, agencies, investors, NGOs, educational institutions, and accelerators who aim to collaborate on blockchain, Web3, or SaaS-based innovations.'
            ],
            [
                'question' => 'What are the benefits of partnering with Nadcab Labs?',
                'answer' => 'Partners gain access to our global network, expert blockchain developers, white-label solutions, co-marketing support, and opportunities for joint product development and revenue growth.'
            ],
            [
                'question' => 'How can I apply to become a Nadcab Labs partner?',
                'answer' => 'You can submit your partnership request through the \'Become a Partner\' form on our website. Our partnership team will connect with you within 48 hours to discuss collaboration opportunities.'
            ],
            [
                'question' => 'Do you offer white-label blockchain solutions for partners?',
                'answer' => 'Yes, we offer customizable white-label blockchain and SaaS products that partners can rebrand and resell to their clients with full technical and post-deployment support.'
            ],
            [
                'question' => 'What types of partnership programs are available?',
                'answer' => 'We offer multiple partnership programs, including Strategic Alliance, Incubation Support, SaaS Reseller, and Education & Training partnerships to suit different collaboration goals.'
            ],
            [
                'question' => 'Is there any cost to join as a partner?',
                'answer' => 'Joining Nadcab Labs as a partner typically has no upfront cost. Some programs, like SaaS reselling or incubation support, may have revenue-sharing or licensing terms based on collaboration scope.'
            ],
            [
                'question' => 'Can startups and small businesses partner with Nadcab Labs?',
                'answer' => 'Absolutely. We actively collaborate with startups and small businesses to provide blockchain infrastructure, mentorship, and technical support for faster go-to-market execution.'
            ],
            [
                'question' => 'Do you provide technical and marketing support to partners?',
                'answer' => 'Yes. Nadcab Labs offers end-to-end technical, marketing, and training support to ensure smooth collaboration, seamless delivery, and brand visibility for all our partners.'
            ]
        ];

        return view('user.partner', compact('faqs'));
    }
}

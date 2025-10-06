import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import WhatsAppIcon from "@/assets/icons/whatsapp.svg";
import LinuxIcon from "@/assets/icons/archlinux.svg";
import GentooIcon from "@/assets/icons/gentoo.svg";
import VimIcon from "@/assets/icons/vim.svg";
import TmuxIcon from "@/assets/icons/tmux.svg";
import RustIcon from "@/assets/icons/rust.svg";
import BurpIcon from "@/assets/icons/burpsuite.svg";
import ReverseEngineeringIcon from "@/assets/icons/radare2.svg";
import QemuIcon from "@/assets/icons/qemu.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import TlohnBook from "@/assets/images/books/Lawsofhumannature.jpg";
import TeBook from "@/assets/images/books/the-exorcist.jpg";
import TspBook from "@/assets/images/books/the-silent-patient.jpg";
import GitwBook from "@/assets/images/books/ghost-in-the-wires.jpg";
import TiiBook from "@/assets/images/books/the-intelligent-investor.jpg";
import ReactIcon from "@/assets/icons/tech/reactjs.jpg";
import AppwriteIcon from "@/assets/icons/tech/appwrite.jpg";
import TailwindIcon from "@/assets/icons/tech/tailwindcss.jpg";
import ReactQIcon from "@/assets/icons/tech/reactjs.jpg";
import TsIcon from "@/assets/icons/tech/typescript.jpg";
import snapgramImg from "@/assets/images/snapgram.png";
import berserkarchImg from "@/assets/images/berserkarch.png";
import chip8Img from "@/assets/images/chip8.png";
import TorIcon from "@/assets/icons/tech/tor.png";
import LinuxxIcon from "@/assets/icons/tech/linux.png";
import GitIcon from "@/assets/icons/tech/git.png";
import GithubLogoIcon from "@/assets/icons/tech/github.png";
import CicdIcon from "@/assets/icons/tech/cicd.png";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import HttsnBook from "@/assets/images/books/how-to-take-smart-notes.jpg";
import Ahbook from "@/assets/images/books/book-cover.png";


export const siteUrl = "https://thehackersbrain.xyz";

export const basicInfo = {
    name: "Gaurav Raj",
    title: "Security Researcher & Software Engineer",
    email: "me@thehackersbrain.xyz",
    location: "Patna/Bihar",
    status: "Available for Freelance Projects",
    description: "I'm Gaurav, a Cyber Security Researcher and Developer with over a half decade (5+ years) of experience in development and security. Mostly involved in Bug Hunting or Freelance projects.",
    toolboxItems: [
        {
            title: "Arch Linux",
            iconType: LinuxIcon,
        },
        {
            title: "Gentoo",
            iconType: GentooIcon,
        },
        {
            title: "Neovim",
            iconType: VimIcon,
        },
        {
            title: "Tmux",
            iconType: TmuxIcon,
        },
        {
            title: "Rust",
            iconType: RustIcon,
        },
        {
            title: "Radare2",
            iconType: ReverseEngineeringIcon,
        },
        {
            title: "Burp Suite",
            iconType: BurpIcon,
        },
        {
            title: "QEMU & KVM",
            iconType: QemuIcon,
        },
        {
            title: "Docker",
            iconType: DockerIcon,
        },
    ],
    hobbies: [
        {
            title: "Reading",
            emoji: "📖",
            left: "5%",
            top: "5%",
        },
        {
            title: "Hacking",
            emoji: "💻",
            left: "50%",
            top: "5%",
        },
        {
            title: "Boxing",
            emoji: "🥊",
            left: "10%",
            top: "35%",
        },
        {
            title: "Psychology",
            emoji: "🧠",
            left: "35%",
            top: "40%",
        },
        {
            title: "Anime",
            emoji: "🎌",
            left: "5%",
            top: "65%",
        },
        {
            title: "Biking",
            emoji: "🏍️",
            left: "45%",
            top: "70%",
        },
        {
            title: "Whiskey",
            emoji: "🥃",
            left: "55%",
            top: "25%",
        },
        {
            title: "Philosophy",
            emoji: "📜",
            left: "20%",
            top: "75%",
        },
        {
            title: "Coding",
            emoji: "🖥️",
            left: "75%",
            top: "30%",
        },
    ],
    books: [
        {
            src: TlohnBook,
        },
        {
            src: TeBook,
        },
        {
            src: TspBook,
        },
        {
            src: GitwBook,
        },
        {
            src: TiiBook,
        },
        {
            src: HttsnBook,
        },
        {
            src: Ahbook,
        },
    ]
}

export const portfolioProjects = [
    {
        company: "Cybercraft Labs Pvt Ltd",
        year: "2025",
        title: "BerserkArch Linux",
        results: [
            {
                title: "Minimal by Design, Hacking Ready by Default",
            },
            { title: "Performance Tuned for Security" },
            { title: "Built with Arch Linux" },
        ],
        tech: [
            {
                name: "Linux",
                image: LinuxxIcon,
            },
            {
                name: "CI/CD",
                image: CicdIcon,
            },
            {
                name: "Hacking Tools",
                image: GitIcon,
            },
            {
                name: "Dev Ready",
                image: GithubLogoIcon,
            },
            {
                name: "Tor",
                image: TorIcon,
            }
        ],
        link: "https://berserkarch.xyz/",
        githubLink: "https://github.com/berserkarch/berserkarch",
        image: berserkarchImg,
    },
    {
        company: "Cybercraft Labs Pvt Ltd",
        year: "2024",
        title: "Social Media WebApp",
        results: [
            {
                title: "Responsive & Modern Design",
            },
            { title: "Fully-Functional from Scratch Backend" },
            { title: "Built with React, Appwrite, Tailwind CSS" },
        ],
        tech: [
            {
                name: "ReactJS",
                image: ReactIcon,
            },
            {
                name: "Appwrite",
                image: AppwriteIcon,
            },
            {
                name: "Tailwind CSS",
                image: TailwindIcon,
            },
            {
                name: "React Query",
                image: ReactQIcon,
            },
            {
                name: "TypeScript",
                image: TsIcon,
            },
        ],
        link: "https://snapgram-two-self.vercel.app/",
        githubLink: "https://github.com/thehackersbrain/snapgram",
        image: snapgramImg,
    },
    {
        company: "Personal (THB)",
        year: "2023",
        title: "CHIP-8 Emulator",
        results: [
            { title: "Gaming Console Emulator in Rust" },
            { title: "Learned Systems Programming & Assembly" },
            { title: "Memory Management & CPU Emulation" },
        ],
        tech: [
            {
                name: "ReactJS",
                image: ReactIcon,
            },
            {
                name: "Appwrite",
                image: AppwriteIcon,
            },
            {
                name: "Tailwind CSS",
                image: TailwindIcon,
            },
            {
                name: "React Query",
                image: ReactQIcon,
            },
        ],
        link: "https://thehackersbrain.github.io/chip8",
        githubLink: "https://github.com/thehackersbrain/chip8",
        image: chip8Img,
    },
];

export const projects = [
    {
        name: "Tech Book - LaTex",
        githubLink: "https://github.com/thehackersbrain/tech-book-template",
        externalLink: "https://github.com/thehackersbrain/tech-book-template",
        date: "2025-04-26",
        description: "A LaTeX template for creating technical books, articles, and reports. This template is designed to be user-friendly and customizable, allowing authors to focus on their content while maintaining a professional appearance. It includes sections for chapters, figures, tables, and references, making it suitable for a wide range of technical writing projects.",
    },
    {
        name: "Carepulse",
        githubLink: "https://github.com/thehackersbrain/carepulse",
        externalLink: "https://carepulse-theta.vercel.app/",
        date: "2024-07-11",
        description:
            "A healthcare patient management application using Next.js, TypeScript, and TailwindCSS. This system enables patients to register, book, and manage appointments with doctors, while providing administrators tools for scheduling, confirming, and canceling appointments. It includes SMS notifications, file upload with Appwrite storage, and performance tracking using Sentry.",
    },
    {
        name: "Brainwave",
        githubLink: "https://github.com/thehackersbrain/brainwave",
        externalLink: "https://brainwave-pearl-five.vercel.app/",
        date: "2024-07-10",
        description:
            "Brainwave, a modern UI/UX website using React.js and TailwindCSS, built with Vite. This project showcases sleek design, parallax animations, complex UI geometry, and stylish gradients. It features beautiful sections including hero, services, features, and more, ensuring responsive functionality across all devices. Brainwave exemplifies contemporary web dev practices.",
    },
    // {
    //     name: "HooBank",
    //     githubLink: "https://github.com/thehackersbrain/hoobank",
    //     externalLink: "https://hoobank-two-wine.vercel.app/",
    //     date: "2024-07-08",
    //     description:
    //         "Created HooBank, a modern UI/UX website utilizing React.js and TailwindCSS. This project emphasizes sleek and responsive design, showcasing advanced web development skills and a focus on user experience. HooBank demonstrates proficiency in building visually appealing, high-performance web applications with contemporary front-end technologies.",
    // },
    {
        name: "Modern Portfolio",
        githubLink: "https://github.com/thehackersbrain/minimal-portfolio",
        externalLink: "https://minimal-portfolio-blue.vercel.app/",
        date: "2024-07-07",
        description:
            "Developed a modern portfolio web app using Next.js, Three.js, Framer Motion, and TailwindCSS. This project showcases a captivating hero section, interactive 3D elements, a dynamic testimonials area, and a visually striking canvas effect. It demonstrates advanced UI/UX design, responsiveness, and a unique presentation of personal information.",
    },
    {
        name: "Vigilante Arch",
        githubLink: "https://github.com/cybercraftlabs/vigarch-os",
        externalLink: "https://vigarch.cybercraftlabs.org/",
        date: "2024-04-09",
        description:
            "Vigilante Arch is the ultimate toolkit for modern-day cyber vigilantes. Built on the robust foundation of Arch Linux, The system equips you with the tools and anonymity you need to defend or attack the digital realm. Forge your path as a digital guardian. Vigilante Arch empowers hackers, security professionals, and geeks alike to explore.",
    },
    {
        name: "Passcraft",
        githubLink: "https://github.com/thehackersbrain/passcraft",
        externalLink: "https://github.com/thehackersbrain/passcraft",
        date: "2023-05-13",
        description:
            "PassCraft is a powerful and versatile tool designed to assist in the creation of password wordlists based on an individual's personal information. It provides a streamlined and automated approach to generate customized wordlists, enhancing the efficiency of password cracking and security assessment processes. Dictionary attacks simplified.",
    },
];

export const testimonials = [
    {
        name: "Alex Turner",
        position: "CTO @ CyberShield",
        text: "Gaurav was instrumental in securing our infrastructure against critical threats. His ability to identify and patch vulnerabilities before they became issues is truly exceptional. We trust him completely!",
        avatar: memojiAvatar1,
    },
    {
        name: "Olivia Green",
        position: "Lead Developer @ SecureCode",
        text: "Working with Gaurav was a game-changer. His deep understanding of secure coding practices helped us eliminate major security flaws. Our applications are now more robust than ever.",
        avatar: memojiAvatar2,
    },
    {
        name: "Daniel White",
        position: "CEO @ PentestPro",
        text: "Gaurav's penetration testing skills are second to none. He uncovered vulnerabilities that other teams missed, helping us reinforce our security posture significantly. We couldn’t be more impressed.",
        avatar: memojiAvatar3,
    },
    {
        name: "Emily Carter",
        position: "Security Engineer @ GlobalTech",
        text: "Gaurav is a true cybersecurity expert. His research into advanced exploitation techniques gave our team valuable insights. His contributions have strengthened our defenses tremendously.",
        avatar: memojiAvatar4,
    },
    {
        name: "Michael Brown",
        position: "Director of IT @ MegaCorp",
        text: "Gaurav’s expertise in secure software development has been invaluable. He not only built high-performance systems but also ensured they were resilient against real-world threats. Highly recommended!",
        avatar: memojiAvatar5,
    },
];

export const blogs = [
    {
        title: "Creating a Hacking Lab on Cloud using Docker for free",
        date: "2024-12-01",
        description:
            "Learn how to create a free hacking lab on the cloud using Docker and Kali Linux. This guide covers setting up a secure, cost-effective environment for penetration testing and cybersecurity experiments. Completely on Cloud for free.",
        link: "https://blog.thehackersbrain.xyz/blog/hacking-lab-on-docker",
    },
    {
        title: "Create an Image Steganography Program in Python",
        date: "2023-08-28",
        description:
            "Discover how to create an image steganography tool in Python. Learn to securely hide and extract data within PNG images using PIL and cryptography modules. Enhance your cybersecurity skills with this detailed guide.",
        link: "https://blog.thehackersbrain.xyz/blog/create-image-steg-tool",
    },
    {
        title: "Comprehensive Guide to Find & Exploit SSRF Vulnerabilities",
        date: "2024-07-11",
        description:
            "Explore an in-depth guide on finding and exploiting Server-Side Request Forgery (SSRF) vulnerabilities. Learn advanced techniques, practical examples, and methods to identify, bypass, and exploit SSRF for comprehensive web security testing.",
        link: "https://blog.thehackersbrain.xyz/blog/find-and-exploit-ssrf",
    },
    {
        title: "The Importance of Secure Coding Practices - Cybercraft Labs",
        date: "2024-03-27",
        description:
            "Learn how to create a free hacking lab on the cloud using Docker and Kali Linux. This guide covers setting up a secure, cost-effective environment for penetration testing and cybersecurity experiments. Completely on Cloud for free.",
        link: "https://blog.thehackersbrain.xyz/blog/importance-of-secure-coding/",
    },
    {
        title: "Unveiling the Dangers of Insecure Deserialization and more",
        date: "2024-08-05",
        description:
            "Explore insecure deserialization in web apps, a critical vulnerability that allows attackers to exploit serialized objects for code execution and privilege escalation. This blog covers real-world examples, causes, and best practices.",
        link: "https://blog.thehackersbrain.xyz/blog/insecure-deserialization-2024",
    },
    {
        title: "Navigating the Cloud - Introduction to Cloud Security",
        date: "2024-05-01",
        description:
            "Explore the critical role of security researchers in understanding development and deployment processes within cloud environments. Dive into real-world scenarios, expert insights, and how Cybercraftlab empowers researchers for cybersecurity excellence",
        link: "https://blog.thehackersbrain.xyz/blog/navigating-the-cloud/",
    },
]

export const socialLinks = [
    {
        name: GithubIcon,
        href: "https://github.com/thehackersbrain",
    },
    {
        name: TwitterIcon,
        href: "https://x.com/thehackersbrain",
    },
    {
        name: WhatsAppIcon,
        href: "https://wa.me/+917488930330",
    },
    {
        name: InstagramIcon,
        href: "https://instagram.com/thehackersbrain",
    },
    {
        name: LinkedinIcon,
        href: "https://linkedin.com/in/thehackersbrainn",
    },
]

export const aboutMeResume = {
    education: [
        {
            title: "B.Sc (Hons) Zoology",
            institution: "Magadh University, Bodh Gaya, Patna",
            year: "2021",
        },
        {
            title: "I.Sc (Science)",
            institution: "R.R.P. College, Bhergawan, Patna",
            year: "2018",
        }
    ],
    experience: [
        {
            title: "Python Developer",
            company: "Cybercraft Labs Pvt Ltd",
            companyUrl: "https://cybercraftlabs.org/",
            year: "Sept 2023 - Nov 2024",
            location: "Patna, Bihar",
            tags: ["Python", "Automation", "Cybersecurity", "Internal API"],
            results: [
                "Developed Python scripts for automating internal security tasks and vulnerability assessments.",
                "Collaborated with the researchers to create proof-of-concept exploits and payloads.",
                "Built and maintained internal tools for pentesting and bug bounty workflows."
            ]
        },
        {
            title: "Market Representative",
            company: "Nouveau Medicament Private Limited",
            companyUrl: "https://www.nouvmed.com/",
            year: "Apr 2023 - Sept 2023",
            location: "Patna, Bihar",
            tags: ["Sales", "Market Research", "Client Relations", "Market Data"],
            results: [
                "Represented the company in regional medical product promotions and demos.",
                "Conducted field research and competitor analysis to improve outreach",
                "Managed relationships with local pharmacies and distributors to expand the sales network."
            ]
        }
    ],
    featuredProjects: [
        {
            title: "Snapgram",
            projectUrl: "https://snapgram-two-self.vercel.app/",
            company: "Cybercraft Labs Pvt Ltd",
            companyUrl: "https://cybercraftlabs.org/",
            time: "Jul 2024",
            tags: ["TypeScript", "Next.js", "TailwindCSS", "Appwrite"],
            results: [
                "Responsive & Modern Design",
                "Full-Functional from Scratch Backend",
                "Built with React, Appwrite, Tailwind CSS"
            ]
        },
        {
            title: "Vigilante Linux",
            projectUrl: "https://vigarch.cybercraftlabs.org/",
            company: "Cybercraft Labs Pvt Ltd",
            companyUrl: "https://cybercraftlabs.org/",
            time: "Apr 2024",
            tags: ["Arch Linux", "Git/Github", "Tor Integration", "Vast tools repo"],
            results: [
                "Amnesic and Live System",
                "Minimal System with Vast Tools Repositories",
                "Tor Integration with Application Security Implemented"
            ]
        },
        {
            title: "CHIP-8 Emulator",
            projectUrl: "https://github.com/thehackersbrain/chip8/",
            company: "Personal (THB)",
            companyUrl: "https://thehackersbrain.xyz/",
            time: "Feb 2023",
            tags: ["Rust", "Git/Github", "System Programming", "x86 Assembly"],
            results: [
                "Gaming Console Emulator in Rust",
                "Learned Systems Programming and x86 Assembly",
                "Memory Management and CPU Emulation"
            ],
        }
    ],
    programmingLanguages: [
        "Python", "Rust", "C", "C++", "C#", "Java", "JavaScript", "TypeScript", "HTML", "CSS", "Bash", "PHP", "Go", "Ruby", "Dart", "SQL", "Kotlin", "Assembly"
    ],
    technologies: [
        "Tailwind CSS", "Material UI", "ShadCN UI", "Aceternity UI", "Bootstrap", "Django", "Flask", "FastAPI", "Node.js", "Express.js", "Next.js", "React.js", "Vue.js", "Nuxt.js", "Svelte", "Electron.js", "Socket.io", "Framer Motion", "Webpack", "Turbopack", "Vite", "Parcel", "Rollup", "Babel", "Sass", "Less", "PostCSS", "Redis", "MongoDB", "MySQL", "PostgreSQL", "SQLite", "Firebase", "AWS", "Google Cloud", "Azure", "DigitalOcean", "Heroku", "Netlify", "Vercel", "Cloudflare", "Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins", "GitHub Actions", "CircleCI", "Travis CI", "Selenium"
    ],
    tools: [
        "Linux", "Docker", "Radare2", "Qemu", "KVM", "Gentoo", "Burpsuite", "Tmux", "Neovim", "Vim", "GDB", "IDA Pro", "Ghidra", "OllyDbg", "WinDbg", "x64dbg", "Frida", "Cutter", "Immunity Debugger", "Wireshark", "Fiddler", "Postman", "Burp Suite", "Zap Proxy"
    ]
}
import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import WhatsAppIcon from "@/assets/icons/whatsapp.svg";
import { teardownTraceSubscriber } from "next/dist/build/swc/generated-native";

export const siteUrl = "https://thehackersbrain.xyz";

export const basicInfo = {
    name: "Gaurav Raj",
    title: "Security Researcher and Software Engineer",
    email: "me@thehackersbrain.xyz",
    location: "Patna/Bihar",
}

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
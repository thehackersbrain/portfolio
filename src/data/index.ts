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
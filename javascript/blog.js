const blogs = [
  {
    title: "5 Linux Commands That Made the Terminal Feel Like Home",
    desc: "A technical writing piece, covering five foundational Linux commands for beginners. Each command is explained with practical usage and clear examples, aimed at those new to the command line. ",
    meta: { platform: "Medium", category: "Linux · commands", readTime: "30 min read" },
    tags: ["Linux", "CLI", "Beginner Friendly", "Terminal"],
    link: "https://medium.com/@0xhaseebali/5-linux-commands-that-made-the-terminal-feel-like-home-90471cba71d6",
    img: "./blogs/linux.png",
    // Lines shown inside the SVG thumbnail
    svgLines: ["5 Linux Commands That Made the Terminal Feel Like Home"],
    svgLabel: "linux · commands",
  },

{
  title: "Anyone Can Bypass Your Linux Password — If You Haven't Secured Your Bootloader",
  desc: "Learn how attackers exploit an unsecured GRUB bootloader to bypass Linux login passwords — and how to stop them with PBKDF2 password hashing.",
  meta: {
    platform: "Medium",
    category: "Linux · Cybersecurity",
    readTime: "5 min read"
  },
  tags: ["Linux", "Hacking", "Ethical Hacking", "Information Security", "Cybersecurity"],
  link: "coming-soon",
  img: "./blogs/AnyoneCanBypassYourLinuxPassword.png",
  svgLines: [
    "$ cat /etc/grub.d/40_custom",
    "set superusers=\"root\"",
    "password_pbkdf2 root grub.pbkdf2...",
    "$ mount -o remount,rw /",
    "$ passwd oxhaseebali",
  ],
  svgLabel: "linux · grub · security",
}
];

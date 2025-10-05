import { Project, Experience, Education, Achievement, Skill, Certificate, CodingProfile } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Splitrr – Expense Sharing App',
    description:
      'A full-stack Splitwise clone enabling users to split bills, track balances, and manage group expenses in real-time with authentication and group management features.',
    technologies: ['Next.js', 'Node.js', 'React.js', 'Tailwind CSS', 'PostgreSQL'],
    githubUrl: 'https://github.com/Rajkr-1/splitrr.git',
    liveUrl: 'https://splitrr-alpha.vercel.app', // Add Render or Vercel URL if deployed
    imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    title: 'VibeSync – Real-Time Collaborative Music & Chat App',
    description:
      'A real-time chat and music app allowing multiple users to join rooms, chat, and watch synchronized YouTube videos with smooth, responsive UI using Socket.IO and Tailwind CSS.',
    technologies: ['Next.js', 'React.js', 'Socket.IO', 'YouTube API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Rajkr-1/my-chat-frontend.git',
    liveUrl: 'https://mychatap.onrender.com', // Replace with Render.com live link
    imageUrl: 'https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    title: 'FileEncryptDecrypt – Commandline File Encryption & Decryption Tool',
    description:
      'A C++17 command-line tool for encrypting and decrypting files using <filesystem> for directory traversal with modular architecture and Makefile-based automation.',
    technologies: ['C++17', 'Linux', 'Makefile', 'File I/O', 'Encryption'],
    githubUrl: 'https://github.com/Rajkr-1/FILE-ENCRYPT-DECRYPT.git',
    liveUrl: '',
    imageUrl: 'https://images.pexels.com/photos/5380643/pexels-photo-5380643.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];


export const experience: Experience[] = [
  {
    id: '1',
    title: 'Software Intern',
    company: 'Sasken Technologies',
    location: 'Kolkata, India',
    startDate: 'June 2025',
    endDate: 'July 2025',
    description: [
      'Worked on real-world projects involving software development and testing, gaining hands-on experience with industry-level workflows and tools.',
      'Contributed to problem-solving tasks by analyzing requirements, debugging issues, and implementing optimized solutions under the guidance of mentors.',
      'Collaborated in a professional environment, learning agile methodologies, version control practices (Git), and effective communication within a technical team.',
      'Enhanced technical skills in C/C++ programming, operating systems, and debugging techniques, applying them to practical use cases.',
      'Gained industry exposure, understanding how large-scale projects are managed and delivered in a corporate setup.'
    ],
    technologies: ['C/C++', 'Git', 'Operating Systems', 'Debugging', 'Agile Methodologies']
  },

  // Add more experiences here


];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Techno India University',
    location: 'Kolkata, West Bengal',
    startDate: 'Aug 2022',
    endDate: 'Jul 2026',
    grade: '8.2 CGPA',
    description: 'Relevant coursework: Data Structures & Algorithms, Database Management Systems, Operating systems, Software Engineering, OOP, Machine Learning'
  },
];

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Smart India Hackathon 2025',
    description: 'Cleared the internal round of Smart India Hackathon 2025 out of 300 teams with an innovative solution.',
    date: 'SEP 2025',
    category: 'Competition'
  },
 
];

export const skills: Skill[] = [
  {
    category: 'Programming Languages',
    items: ['JavaScript', 'Python', 'C++', 'C', 'SQL']
  },
  {
    category: 'Frontend Development',
    items: ['React', 'Next.js', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'SASS']
  },
  {
    category: 'Backend Development',
    items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs']
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite', 'Firebase']
  },
  {
    category: 'Tools & Technologies',
    items: ['Git', 'Docker', 'Linux', 'VS Code', 'Postman', 'Figma']
  }
];

export const certificates: Certificate[] = [
  {
    id: '1',
    title: 'WEB DEVELOPMENT CERTIFICATION',
    issuer: 'UDEMY',
    date: 'AUG 2025',
    url: 'https://drive.google.com/file/d/1A6cRHSJzusKnJPTumy0fl9Y9WOCUgFuR/view?usp=drivesdk'
  },
  {
    id: '2',
    title: 'DATA STRUCTURES AND ALGORITHMS WITH C++',
    issuer: 'CODEHELP',
    date: 'Aug 2025',
    url: 'https://codehelp.com'
  },
  {
    id: '3',
    title: 'SAP FUNDAMENTALS',
    issuer: 'SAP Alliances',
    date: 'Aug 2025',
    url: 'https://drive.google.com/file/d/1hE0YeP_lo8GjkvXGWFb3bZYlAOFkE7wU/view?usp=drivesdk'
  }
];

export const codingProfiles: CodingProfile[] = [
  {
    platform: 'LeetCode',
    username: 'mailrajk321',
    url: 'https://leetcode.com/mailrajk321',
    rating: '1500+',
    icon: 'Code'
  },
  {
    platform: 'Codeforces',
    username: 'rajk-75',
    url: 'https://codeforces.com/profile/rajk-75r',
    rating: '4 Star',
    icon: 'Trophy'
  },
  {
    platform: 'GitHub',
    username: 'Rajkr-1',
    url: 'https://github.com/Rajkr-1',
    rating: '10+ Repositories',
    icon: 'Github'
  },
  {
    platform: 'HackerRank',
    username: 'mailrajk321',
    url: 'https://hackerrank.com/mailrajk321',
    rating: '5 Star',
    icon: 'Star'
  }
];

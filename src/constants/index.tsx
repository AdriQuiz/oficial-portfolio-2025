import { FaBootstrap, FaCss3Alt, FaGitAlt, FaHtml5, FaLaravel, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiFirebase, SiJavascript, 
    SiMongodb, SiMysql, SiNeo4J, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { FaFlutter } from 'react-icons/fa6';

export const navLinks = [
    { id: '0', label: 'Home', href: '#home' },
    { id: '1', label: 'Skills', href: '#skills' },
    { id: '2', label: 'Experience', href: '#experience' },
    { id: '3', label: 'Projects', href: '#projects' },
    { id: '4', label: 'Contact', href: '#contact' }
];

export const frontStack = [
    { id: '0', name: 'React.js', icon: <FaReact className='size-14' />},
    { id: '1', name: 'Next.js', icon: <SiNextdotjs className='size-14' />},
    { id: '2', name: 'Flutter', icon: <FaFlutter className='size-14' />},
    { id: '3', name: 'Tailwind CSS', icon: <SiTailwindcss className='size-14' />},
    { id: '4', name: 'Bootstrap', icon: <FaBootstrap className='size-14' />},
    { id: '5', name: 'HTML', icon: <FaHtml5 className='size-14' />},
    { id: '6', name: 'CSS', icon: <FaCss3Alt className='size-14' />},
    { id: '7', name: 'JavaScript', icon: <SiJavascript className='size-14' />},
    { id: '8', name: 'TypeScript', icon: <SiTypescript className='size-14' />},
];

export const backStack = [
    { id: '0', name: 'Laravel', icon: <FaLaravel className='size-14' />},
    { id: '1', name: 'Express.js', icon: <SiExpress className='size-14' />},
    { id: '2', name: 'Node.js', icon: <FaNodeJs className='size-14' />},
    { id: '4', name: 'TypeScript', icon: <SiTypescript className='size-14' />},
    { id: '5', name: 'Git', icon: <FaGitAlt className='size-14' />}
];

export const databases = [
    { id: '0', name: 'MySQL', icon: <SiMysql className='size-14' />},
    { id: '1', name: 'MongoDB', icon: <SiMongodb className='size-14' />},
    { id: '2', name: 'Firebase', icon: <SiFirebase className='size-14' />},
    { id: '3', name: 'Neo4j', icon: <SiNeo4J className='size-14' />}
];


import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2,
    Database,
    Layout,
    Server,
    Terminal,
    Cpu,
    Monitor,
    Globe,
    Smartphone,
    Workflow
} from 'lucide-react';
import styles from './Skills.module.css';

const skillCategories = [
    {
        title: 'UI/UX Design',
        description: 'Creating intuitive, engaging interfaces that delight users.',
        icon: <Layout size={32} />,
        theme: 'blue',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2564&auto=format&fit=crop', // Abstract blue/tech
        skills: ['Figma', 'Prototyping', 'Design Systems', 'User Research']
    },
    {
        title: 'Development',
        description: 'Building robust, scalable applications with modern stacks.',
        icon: <Terminal size={32} />,
        theme: 'orange',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop', // Abstract orange/warm
        skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind']
    },
    {
        title: 'Brand Strategy',
        description: 'Defining digital presence and visual identity.',
        icon: <Globe size={32} />,
        theme: 'dark',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop', // Abstract dark
        skills: ['SEO', 'Analytics', 'Content Strategy', 'Marketing']
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 50 }
    }
};

const Skills = () => {
    return (
        <section id="skills" className={styles.section}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <h2 className={styles.heading}>Technical Expertise</h2>
                    <p className={styles.subheading}>Tools and technologies I use to bring ideas to life.</p>
                </motion.div>

                <div className={styles.grid}>
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.title}
                            className={`${styles.card} ${styles[category.theme]}`}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <div className={styles.cardImageWrapper}>
                                <img src={category.image} alt="" className={styles.cardImage} />
                                <div className={styles.cardOverlay}></div>
                            </div>

                            <div className={styles.cardContent}>
                                <div className={styles.iconWrapper}>
                                    {category.icon}
                                </div>
                                <h3 className={styles.cardTitle}>{category.title}</h3>
                                <p className={styles.cardDesc}>{category.description}</p>

                                <div className={styles.tags}>
                                    {category.skills.map(skill => (
                                        <span key={skill} className={styles.tag}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

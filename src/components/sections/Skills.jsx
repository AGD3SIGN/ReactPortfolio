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
        title: 'Frontend Development',
        icon: <Monitor size={24} />,
        skills: [
            { name: 'React', level: 'Expert', icon: <Code2 size={20} /> },
            { name: 'TypeScript', level: 'Advanced', icon: <Terminal size={20} /> },
            { name: 'Next.js', level: 'Advanced', icon: <Globe size={20} /> },
            { name: 'Tailwind/CSS', level: 'Expert', icon: <Layout size={20} /> },
            { name: 'Framer Motion', level: 'Intermediate', icon: <Workflow size={20} /> },
        ]
    },
    {
        title: 'Backend & Infrastructure',
        icon: <Server size={24} />,
        skills: [
            { name: 'Node.js', level: 'Advanced', icon: <Cpu size={20} /> },
            { name: 'PostgreSQL', level: 'Intermediate', icon: <Database size={20} /> },
            { name: 'GraphQL', level: 'Intermediate', icon: <Code2 size={20} /> },
            { name: 'AWS', level: 'Intermediate', icon: <Globe size={20} /> },
        ]
    },
    {
        title: 'Tools & Workflow',
        icon: <Terminal size={24} />,
        skills: [
            { name: 'Git', level: 'Expert', icon: <Terminal size={20} /> },
            { name: 'Docker', level: 'Intermediate', icon: <Server size={20} /> },
            { name: 'Figma', level: 'Advanced', icon: <Layout size={20} /> },
        ]
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
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            className={styles.categoryCard}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <div className={styles.categoryHeader}>
                                <div className={styles.iconWrapper}>{category.icon}</div>
                                <h3 className={styles.categoryTitle}>{category.title}</h3>
                            </div>

                            <div className={styles.skillsList}>
                                {category.skills.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        className={styles.skillItem}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05, x: 5 }}
                                    >
                                        <span className={styles.skillIcon}>{skill.icon}</span>
                                        <span className={styles.skillName}>{skill.name}</span>

                                        {/* Tooltip */}
                                        <div className={styles.tooltip}>
                                            {skill.level}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

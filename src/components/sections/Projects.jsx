import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Layers } from 'lucide-react';
import styles from './Projects.module.css';
import Modal from '../ui/Modal';

// Sample Data
const projects = [
    {
        id: 1,
        title: 'E-Commerce Dashboard',
        description: 'A comprehensive analytics dashboard for online retailers.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
        tags: ['React', 'D3.js', 'Node.js'],
        fullDescription: 'This dashboard allows retailers to track sales, inventory, and customer metrics in real-time. Built with React for the frontend and Node.js for the API layer.',
        challenges: 'Handling real-time data flow without performance bottlenecks.',
        solution: 'Implemented WebSocket connections and batched updates to reduce render cycles.',
        techStack: ['React', 'Redux', 'D3.js', 'Node.js', 'Socket.io', 'PostgreSQL'],
        link: '#',
        github: '#'
    },
    {
        id: 2,
        title: 'Finance App UI',
        description: 'Mobile-first banking application interface with complex animations.',
        image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2670&auto=format&fit=crop',
        tags: ['React Native', 'Framer'],
        fullDescription: 'A concept banking app focused on smooth transitions and biometric security flows.',
        challenges: 'Achieving 60fps animations on lower-end Android devices.',
        solution: 'Used Reanimated 2 for native-thread driven animations.',
        techStack: ['React Native', 'Expo', 'Reanimated', 'Framer Motion'],
        link: '#',
        github: '#'
    },
    {
        id: 3,
        title: 'Creative Agency Site',
        description: 'Award-winning portfolio site with WebGL interactions.',
        image: 'https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=2670&auto=format&fit=crop',
        tags: ['Three.js', 'WebGL', 'GSAP'],
        fullDescription: 'Utilizing Three.js to create immersive 3D experiences directly in the browser.',
        challenges: 'Loading heavy 3D assets quickly.',
        solution: 'Implemented progressive loading and draco compression for 3D models.',
        techStack: ['React', 'Three.js', 'React Three Fiber', 'GSAP', 'Vite'],
        link: '#',
        github: '#'
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' }
    }
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const openProject = (project) => setSelectedProject(project);
    const closeProject = () => setSelectedProject(null);

    return (
        <section id="projects" className={styles.section}>
            <div className="container">
                <SectionHeader
                    title="Selected Work"
                    subtitle="A collection of projects that define my journey."
                />

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            className={styles.card}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => openProject(project)}
                        >
                            <div className={styles.imageWrapper}>
                                <img src={project.image} alt={project.title} className={styles.image} loading="lazy" />
                                <div className={styles.overlay}>
                                    <span className={styles.viewBtn}>View Project</span>
                                </div>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{project.title}</h3>
                                <p className={styles.cardDesc}>{project.description}</p>
                                <div className={styles.tags}>
                                    {project.tags.map(tag => (
                                        <span key={tag} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            <Modal
                isOpen={!!selectedProject}
                onClose={closeProject}
                title={selectedProject?.title || ''}
            >
                {selectedProject && (
                    <div className={styles.modalContent}>
                        <div className={styles.modalBody}>
                            <div className={styles.modalLeft}>
                                <div className={styles.modalImageWrapper}>
                                    <img src={selectedProject.image} alt={selectedProject.title} className={styles.modalImage} />
                                </div>
                                <div className={styles.modalActions}>
                                    <a href={selectedProject.link} className={styles.modalLink} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                    <a href={selectedProject.github} className={styles.modalLinkSecondary} target="_blank" rel="noopener noreferrer">
                                        <Github size={18} /> Source Code
                                    </a>
                                </div>
                            </div>

                            <div className={styles.modalRight}>
                                <p className={styles.modalDesc}>{selectedProject.fullDescription}</p>

                                <div className={styles.detailBlock}>
                                    <h4>Challenge</h4>
                                    <p>{selectedProject.challenges}</p>
                                </div>

                                <div className={styles.detailBlock}>
                                    <h4>Solution</h4>
                                    <p>{selectedProject.solution}</p>
                                </div>

                                <div className={styles.detailBlock}>
                                    <h4>Technlogies</h4>
                                    <div className={styles.techTags}>
                                        {selectedProject.techStack.map(t => (
                                            <span key={t} className={styles.techTag}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};

export default Projects;

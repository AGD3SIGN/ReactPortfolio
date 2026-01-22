import React, { useRef } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, PenTool, Code, Rocket } from 'lucide-react';
import styles from './Experience.module.css';
import clsx from 'clsx';

const steps = [
    {
        id: 1,
        title: 'Discover',
        description: 'Understanding your goals, audience, and technical requirements to build a solid foundation.',
        icon: <Search size={24} />,
        date: 'Phase 1'
    },
    {
        id: 2,
        title: 'Design',
        description: 'Crafting intuitive interfaces and premium aesthetics that align with your brand identity.',
        icon: <PenTool size={24} />,
        date: 'Phase 2'
    },
    {
        id: 3,
        title: 'Build',
        description: 'Developing robust, scalable solutions using modern tech stacks like React, Next.js, and Node.',
        icon: <Code size={24} />,
        date: 'Phase 3'
    },
    {
        id: 4,
        title: 'Deploy',
        description: 'Rigorous testing, optimization, and seamless deployment to ensure a perfect launch.',
        icon: <Rocket size={24} />,
        date: 'Phase 4'
    }
];

const Experience = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="experience" className={styles.section} ref={containerRef}>
            <div className="container">
                <SectionHeader
                    title="My Process"
                    subtitle="A structured approach to delivering excellence."
                    align="center"
                />

                <div className={styles.timeline}>
                    {/* Continuous Line Background */}
                    <div className={styles.lineTrack}>
                        <motion.div
                            className={styles.lineProgress}
                            style={{ height: lineHeight }}
                        />
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className={styles.step}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Left: Date/Meta */}
                            <div className={styles.meta}>
                                <span className={styles.date}>{step.date}</span>
                            </div>

                            {/* Center: Icon */}
                            <div className={styles.iconColumn}>
                                <div className={styles.iconWrapper}>
                                    {step.icon}
                                </div>
                            </div>

                            {/* Right: Content */}
                            <div className={styles.content}>
                                <h3 className={styles.title}>{step.title}</h3>
                                <p className={styles.description}>{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

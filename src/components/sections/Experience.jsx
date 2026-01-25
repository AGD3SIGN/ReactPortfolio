import { useRef } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, PenTool, Code, Rocket } from 'lucide-react';
import styles from './Experience.module.css';


const steps = [
    {
        id: 1,
        title: 'Discover',
        description:
            'Clarifying your business goals, user needs, and technical constraints—so every decision is intentional and aligned from day one.',
        deliverables: 'Project scope, technical plan, success metrics',
        icon: <Search size={24} />,
        date: 'Phase 1',
        color: '#dffe00'
    },
    {
        id: 2,
        title: 'Design',
        description:
            'Translating strategy into intuitive interfaces and refined visuals that build trust and reinforce your brand.',
        deliverables: 'UI concepts, responsive layouts, design system foundations',
        icon: <PenTool size={24} />,
        date: 'Phase 2',
        color: '#dffe00'
    },
    {
        id: 3,
        title: 'Build',
        description:
            'Engineering fast, scalable, production-ready solutions using modern frameworks that grow with your business.',
        deliverables: 'Clean codebase, performance optimization, deployment & handoff',
        icon: <Code size={24} />,
        date: 'Phase 3',
        color: '#dffe00'
    },
    {
        id: 4,
        title: 'Deploy',
        description:
            'Validating, optimizing, and launching with confidence—ensuring long-term stability from day one.',
        deliverables: 'Production deployment, monitoring, post-launch support',
        icon: <Rocket size={24} />,
        date: 'Phase 4',
        color: '#dffe00'
    }
];

const Experience = () => {
    const timelineRef = useRef(null);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="experience" className={styles.section} ref={containerRef}>
            <div className={styles.container}>
                <SectionHeader
                    title="My Process"
                    subtitle="A structured approach to delivering excellence."
                    align="center"
                />

                <div className={styles.timelineWrapper} ref={timelineRef}>
                    {/* The main vertical line track */}
                    <div className={styles.lineTrack}>
                        <motion.div
                            className={styles.lineProgress}
                            style={{ scaleY: scrollYProgress }}
                        />
                    </div>

                    <div className={styles.stepsContainer}>
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                className={styles.stepItem}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-30%' }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.16, 1, 0.3, 1],
                                    delay: index * 0.12
                                }}
                            >
                                <div className={styles.markerWrapper}>
                                    <div
                                        className={styles.marker}
                                        style={{ borderColor: step.color }}
                                    >
                                        <motion.div
                                            className={styles.icon}
                                            style={{ color: step.color }}
                                            initial={{ scale: 0.85, rotate: -6 }}
                                            whileInView={{ scale: 1, rotate: 0 }}
                                            transition={{ duration: 0.4, ease: 'easeOut' }}
                                        >
                                            {step.icon}
                                        </motion.div>
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <span className={styles.date} style={{ color: step.color }}>{step.date}</span>
                                    <h3 className={styles.title}>{step.title}</h3>
                                    <p className={styles.description}>{step.description}</p>
                                    <span className={styles.deliverables}>{step.deliverables}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

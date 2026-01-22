import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import styles from './About.module.css';

const Counter = ({ value, prefix = '', suffix = '' }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const displayValue = useTransform(spring, (current) => Math.round(current));

    useEffect(() => {
        if (inView) {
            spring.set(value);
        }
    }, [inView, value, spring]);

    return (
        <span ref={ref} className={styles.statNumber}>
            {prefix}
            <motion.span>{displayValue}</motion.span>
            {suffix}
        </span>
    );
};

const About = () => {
    return (
        <section id="about" className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Left Column: Content */}
                    <div className={styles.content}>
                        <h2 className={styles.heading}>About Me</h2>
                        <p className={styles.description}>
                            I am a passionate software engineer with a focus on building scalable web applications and intuitive user interfaces. With over a decade of experience, I bridge the gap between complex engineering and elegant design, creating solutions that not only work seamlessly but also delight users. I believe in clean code, continuous learning, and the power of technology to solve real-world problems.
                        </p>

                        <div className={styles.statsContainer}>
                            <div className={styles.statItem}>
                                <Counter value={200} prefix="+" />
                                <span className={styles.statLabel}>Project completed</span>
                            </div>
                            <div className={styles.separator}></div>
                            <div className={styles.statItem}>
                                <Counter value={750} prefix="+" />
                                <span className={styles.statLabel}>Happy Customer</span>
                            </div>
                            <div className={styles.separator}></div>
                            <div className={styles.statItem}>
                                <Counter value={99} suffix="%" />
                                <span className={styles.statLabel}>Satisfied Customer</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className={styles.imageColumn}>
                        <div className={styles.imageWrapper}>
                            <img src="/profile.jpg" alt="Profile" className={styles.profileImage} />

                            {/* Circular Badge */}
                            <div className={styles.badge}>
                                <div className={styles.badgeContent}>
                                    <svg viewBox="0 0 100 100" className={styles.badgeText}>
                                        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                                        <text>
                                            <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                                                Based in San Francisco • Open to Work •
                                            </textPath>
                                        </text>
                                    </svg>
                                    <div className={styles.arrowIcon}>
                                        <ArrowUpRight size={24} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

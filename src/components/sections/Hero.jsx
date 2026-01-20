import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import Beams from '../ui/Beams';
import styles from './Hero.module.css';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 50,
            damping: 20,
        }
    },
};

const Hero = () => {
    return (
        <section id="hero" className={styles.hero}>
            {/* Background Ambience */}
            <div className={styles.background} style={{ zIndex: 0 }}>
                <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
                    <Beams
                        beamWidth={3}
                        beamHeight={30}
                        beamNumber={20}
                        lightColor="#ffffff"
                        speed={2}
                        noiseIntensity={1.75}
                        scale={0.2}
                        rotation={30}
                    />
                </div>
            </div>

            <div className={`container ${styles.container}`} style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}>
                <motion.div
                    className={styles.content}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ pointerEvents: 'auto' }}
                >
                    <motion.h1 variants={itemVariants} className={styles.headline}>
                        Building <span className={styles.gradientText}>TESTING UPDATES Experiences</span> That Matter.
                    </motion.h1>

                    <motion.p variants={itemVariants} className={styles.subheading}>
                        I’m a freelance full-stack developer specializing in building high-performance, design-led web applications that scale with your business.
                    </motion.p>

                    <motion.div variants={itemVariants} className={styles.ctaGroup}>
                        <a href="#projects" className={styles.primaryBtn}>
                            View Work <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className={styles.secondaryBtn}>
                            Get in Touch <Mail size={18} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

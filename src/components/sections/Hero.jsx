import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import DotGrid from '../ui/DotGrid';
import RotatingText from '../ui/RotatingText';
import styles from './Hero.module.css';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1], // easeOutExpo-ish
        }
    },
};

const Hero = () => {
    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.background}>
                <DotGrid
                    dotSize={4}
                    gap={24}
                    baseColor="#e5e5e5"
                    activeColor="#000000"
                    proximity={100}
                    shockRadius={200}
                />
            </div>

            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 variants={itemVariants} className={styles.headline}>
                        Welcome To <br />
                        My Portfolio!
                        <span className={styles.greyText}>
                            I Build Websites <br /> With
                            <RotatingText
                                texts={['Empathy', 'Clarity', 'Intention', 'Purpose', 'Care']}
                                mainClassName={styles.rotatingText}
                                staggerFrom={"last"}
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: "-120%", opacity: 0 }}
                                staggerDuration={0.025}
                                splitLevelClassName={styles.splitLevel}
                                transition={{ type: "spring", damping: 40, stiffness: 400 }}
                                mainTransition={{ type: "spring", damping: 20, stiffness: 120 }}
                                rotationInterval={2500}
                                animatePresenceMode="wait"
                            />
                            .
                        </span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className={styles.description}>
                        I build high-performance web applications that work everywhere.
                        Offline-first, design-led, and scalable by default.
                    </motion.p>

                    <motion.div variants={itemVariants} className={styles.ctaGroup}>
                        <a href="#projects" className={styles.primaryBtn}>
                            <ChevronRight size={20} style={{ fill: "none" }} /> View Recent Work
                        </a>
                        <a href="#contact" className={styles.secondaryBtn}>
                            Start a Project
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

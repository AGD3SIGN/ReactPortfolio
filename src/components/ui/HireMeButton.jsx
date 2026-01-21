import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './HireMeButton.module.css';

const HireMeButton = ({ onClick, className }) => {
    return (
        <motion.button
            className={`${styles.button} ${className || ''}`}
            onClick={onClick}
            whileHover="hover"
            initial="initial"
        >
            <span className={styles.text}>Start a Project</span>
            <ArrowRight size={18} className={styles.arrow} />

            {/* Paper Popup Animation */}
            <motion.div
                className={styles.paper}
                variants={{
                    initial: { y: 10, opacity: 0, rotate: -5, scale: 0.8 },
                    hover: {
                        y: -45,
                        opacity: 1,
                        rotate: -5,
                        scale: 1,
                        transition: { type: "spring", stiffness: 300, damping: 15 }
                    }
                }}
            >
                <div className={styles.paperContent}>
                    <span className={styles.paperText}>Hire Me</span>
                    <div className={styles.paperLines}>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                    </div>
                </div>
            </motion.div>
        </motion.button>
    );
};

export default HireMeButton;

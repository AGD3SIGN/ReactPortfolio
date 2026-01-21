import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HireMeButton from './HireMeButton';
import styles from './StickyNav.module.css';

const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'Work' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Process' },
    { id: 'contact', label: 'Contact' },
];

const StickyNav = () => {
    // Optional: Only show after scrolling a bit? Or always show?
    // "Floating navigation menu" usually implies it's always there or follows you.
    // Let's make it appear after a small scroll to keep Hero clean, OR always present.
    // Since we removed the main Header, this MUST be the main nav. So always visible or appear after hero?
    // User said "revert back to old hero" which had a header? No, I removed the header.
    // I should probably make this visible AFTER scroll, or simply ALWAYS visible as a dock.
    // Let's make it a smart dynamic island. Always visible but small, expands on hover? No, keep it simple.
    // Fixed at top, with margin.

    const [isVisible, setIsVisible] = useState(true);

    // Optional: Hide on scroll down, show on scroll up? Or just static floating?
    // "Re-do the floating navigation menu".
    // I will make it a nice aesthetic pill that sits at the top.

    return (
        <div className={styles.navWrapper}>
            <motion.nav
                className={styles.nav}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
            >
                <div className={styles.logo}>Brandon Torres</div>

                <ul className={styles.navList}>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`} className={styles.navLink}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className={styles.actions}>
                    <HireMeButton className={styles.navBtn} onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} />
                </div>
            </motion.nav>
        </div>
    );
};

export default StickyNav;

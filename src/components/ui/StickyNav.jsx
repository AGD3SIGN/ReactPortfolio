import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './StickyNav.module.css';

const navLinks = [
    { id: 'projects', label: 'Work' },
    { id: 'experience', label: 'Process' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
];

const StickyNav = () => {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    return (
        <div className={styles.navWrapper}>
            <motion.nav
                className={styles.nav}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                    backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
                    boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none'
                }}
            >
                <div className={styles.container}>
                    <div className={styles.logo}>
                        {/* Simple geometric logo/text to match Ditto */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="2" width="8" height="8" fill="black" />
                            <rect x="14" y="2" width="8" height="8" fill="black" fillOpacity="0.5" />
                            <rect x="2" y="14" width="8" height="8" fill="black" fillOpacity="0.5" />
                            <rect x="14" y="14" width="8" height="8" fill="black" fillOpacity="0.2" />
                        </svg>
                        Brandon Torres
                    </div>

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
                        <a href="#contact" className={styles.ctaBtn}>
                            Get Started <ArrowRight size={16} />
                        </a>
                    </div>
                </div>
            </motion.nav>
        </div>
    );
};

export default StickyNav;

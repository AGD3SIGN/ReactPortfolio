import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.copyright}>
                    © {new Date().getFullYear()} Freelance Dev. All rights reserved.
                </div>

                <div className={styles.socials}>
                    <a href="#" aria-label="Github" className={styles.socialLink}>
                        <Github size={20} />
                    </a>
                    <a href="#" aria-label="Twitter" className={styles.socialLink}>
                        <Twitter size={20} />
                    </a>
                    <a href="#" aria-label="LinkedIn" className={styles.socialLink}>
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:hello@example.com" aria-label="Email" className={styles.socialLink}>
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

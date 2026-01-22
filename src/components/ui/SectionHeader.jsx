import React from 'react';
import { motion } from 'framer-motion';
import styles from './SectionHeader.module.css';
import clsx from 'clsx';

const SectionHeader = ({ title, subtitle, align = 'left', className }) => {
    return (
        <motion.div
            className={clsx(styles.header, styles[align], className)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
            <h2 className={styles.heading}>{title}</h2>
            {subtitle && <p className={styles.subheading}>{subtitle}</p>}
        </motion.div>
    );
};

export default SectionHeader;

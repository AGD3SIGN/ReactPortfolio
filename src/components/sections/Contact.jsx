import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';
import RotatingText from '../ui/RotatingText';
import styles from './Contact.module.css';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });

        // Reset success message after 3s
        setTimeout(() => setSubmitted(false), 3000);
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={styles.banner}
                >
                    <div className={styles.content}>
                        <h2 className={styles.heading}>
                            Let's Build Something
                            <RotatingText
                                texts={['Amazing', 'Unique', 'Scalable', 'Secure']}
                                mainClassName={styles.rotatingText}
                                splitLevelClassName={styles.rotatingTextSplit}
                                staggerFrom={"last"}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                animatePresenceMode="popLayout"
                                transition={{ type: "spring", damping: 20, stiffness: 80, mass: 1 }}
                                rotationInterval={1800}
                            />
                        </h2>
                        <p className={styles.text}>
                            Have a project in mind or just want to say hi? I'm currently available for new opportunities.
                        </p>

                        <div className={styles.contactInfo}>
                            <div className={styles.infoItem}>
                                <Mail className={styles.icon} size={20} />
                                <span>hello@example.com</span>
                            </div>
                            <div className={styles.infoItem}>
                                <MapPin className={styles.icon} size={20} />
                                <span>San Francisco, CA (Remote)</span>
                            </div>
                        </div>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                required
                                className={styles.input}
                                placeholder="John Doe"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                required
                                className={styles.input}
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formState.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className={styles.textarea}
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            className={styles.submitBtn}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : submitted ? 'Message Sent!' : (
                                <>
                                    Send Message <Send size={18} />
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

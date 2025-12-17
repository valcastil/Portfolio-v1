import {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const formRef = useRef(null);
    const [loading, setloading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setloading(true);

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
            );
            setForm({ name: '', email: '', subject: '', message: '' });
            alert('Email sent successfully!');
        } catch (error) {
            // Error handling
            console.error('Error sending email:', error);
            alert('Failed to send email. Please try again.');

        }finally {
            setloading(false);
        }

    };

    return (
        <section id="contact" className="py-20 px-4 bg-gradient-to-b from-black to-purple-900/20">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                    Get In <span className="text-purple-500">Touch</span>
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit} ref={formRef}>
                    <div className="grid md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full px-6 py-4 bg-gray-900 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                            required
                        />
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Your Email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full px-6 py-4 bg-gray-900 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                            required
                        />
                    </div>
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full px-6 py-4 bg-gray-900 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        rows={6}
                        className="w-full px-6 py-4 bg-gray-900 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none transition-colors resize-none"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-4 rounded-lg font-semibold hover:scale-105 transition-transform"
                        disabled={loading}>
                        {loading ? 'Sending ...': 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
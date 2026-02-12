import '../App.css';
import { useState } from 'react';
import Image from '../assets/about.jpg';
import emailjs from 'emailjs-com';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const templateParams = {
            from_name: formData.name,     // User's name
            from_email: formData.email,   // User's email
            message: formData.message,    // Message entered by the user
            reply_to: formData.email,     // Optional: reply to the user's email
            to_name: 'Recipient Name',    // Optional: Use a fixed name or another dynamic value
          };

        // Send the email using EmailJS
        emailjs
            .send(
                'service_0c2bbvq', // Replace with your EmailJS Service ID
                'template_m8qumkj', // Replace with your EmailJS Template ID
                templateParams, // Dynamic data from your form
                'Kj_4WieHQ5JLCV_IO' // Replace with your EmailJS Public Key (from integration settings)
            )
            .then((result) => {
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Failed to send the message. Please try again.');
            })
            .finally(() => setLoading(false)); // Reset loading state
    };

    return (
        <section className="react-contact flex">
            <div className="contact-overall p-3 flex flex-col jus w-full gap-3">
                <div className="contact-header p-3 flex flex-col justify-center">
                    <div className="contact-header-text flex justify-center">
                        <span className="contact-Me about-header font-bold text-2xl underline">Contact Me</span>
                    </div>
                </div>

                <div className="contact-body grid grid-cols-1 lg:grid-cols-2">
                    <div className="contact-form-overall justify-center w-full p-3 flex flex-col rounded">
                        <div className="contact-header">
                            <span className="lets-talk text-2xl font-bold text-yellow-300">
                                Let's <span className="gold-talk text-black">Talk</span>
                            </span>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="contact-body p-3">
                                <div className="contact-form-body">
                                    <div className="contact-form-group flex flex-col md:flex-row">
                                        <div className="input-group flex flex-col gap-3 w-full p-3">
                                            <label htmlFor="name" className="name-label font-bold">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter your name"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full input rounded p-2"
                                            />
                                        </div>
                                        <div className="input-group flex flex-col gap-3 w-full p-3">
                                            <label htmlFor="email" className="name-label font-bold">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full input rounded p-2"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-form-body">
                                    <div className="contact-form-group flex">
                                        <div className="input-group flex flex-col gap-3 w-full p-3">
                                            <label htmlFor="message" className="name-label font-bold">
                                                Your Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Type your message here"
                                                required
                                                rows="4"
                                                className="w-full input rounded p-2"
                                            />
                                        </div>
                                    </div>
                                    <div className="button-send flex justify-center">
                                        <span className="send-msg flex p-3 w-fit">
                                            <button type="submit" className="btn-submit">
                                                {loading ? 'Sending...' : 'Send Message'}
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="image-right w-full justify-center flex">
                        <div className="image-container flex p-3 lg:w-1/2">
                            <span className="img-right">
                                <img src={Image} className="rounded-e-xl" alt="About" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";
import React, { useState } from "react";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        dob: "",
        email: "",
        phone: "",
        nationality: "",
        message: ""
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setStatus("Sending...");

    //     const response = await fetch("/form-api/sendEmail", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(formData),
    //     });

    //     const result = await response.json();
    //     if (response.status === 200) {
    //         setStatus("Email sent successfully!");
    //         setFormData({
    //             name: "",
    //             dob: "",
    //             email: "",
    //             phone: "",
    //             nationality: "",
    //             message: ""
    //         });
    //     } else {
    //         setStatus("Failed to send email.");
    //     }
    // };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="dob"
                            placeholder="Date of Birth"
                            value={formData.dob}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                        placeholder="Nationality"
                        required
                        className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>
                <button type="submit" className="darkbtn">Submit</button>
                {status && <p className="mt-4 text-center text-blue-600">{status}</p>}
            </form>
        </div>
    );
}

export default ContactForm;

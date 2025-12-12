// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Contact.css";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//     message: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Captured Form Data:", formData); // shows data in console
//     navigate("/"); // redirect to home after submit
//   };

//   return (
//     <div className="contact-container">
//       <h2 className="contact-title">Contact Me</h2>

//       {/* Contact Info Panel */}
//       <div className="contact-info">
//         <p><strong>Email:</strong> parineetkaur@gmail.com</p>
//         <p><strong>Phone:</strong> +1 (123) 456-7890</p>
//         <p><strong>Location:</strong> Toronto, ON</p>
//       </div>

//       {/* Contact Form */}
//       <form className="contact-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="firstName"
//           placeholder="First Name"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="lastName"
//           placeholder="Last Name"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="tel"
//           name="phone"
//           placeholder="Contact Number"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           rows="4"
//           onChange={handleChange}
//           required
//         ></textarea>
//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//   );
// }


import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./Contact.css";
import { createContact } from "../api/contact-api.js";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  // const navigate = useNavigate();
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      firstname: formData.firstName,
      lastname: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      description: formData.message
    };

    const result = await createContact(payload);

    if (result.error) {
      alert("Failed to send message: " + result.error);
    } else {
      setSuccess("Your message has been sent successfully!");
      // setTimeout(() => navigate("/"), 1500);
    }
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Me</h2>

      {success && <p style={{ color: "green", textAlign: "center" }}>{success}</p>}

      {/* Contact Info Panel */}
      <div className="contact-info">
        <p><strong>Email:</strong> parineetkaur@gmail.com</p>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p><strong>Location:</strong> Toronto, ON</p>
      </div>

      {/* Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />

        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />

        <input type="tel" name="phone" placeholder="Contact Number" onChange={handleChange} required />

        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />

        <textarea name="message" placeholder="Your Message" rows="4" onChange={handleChange} required />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

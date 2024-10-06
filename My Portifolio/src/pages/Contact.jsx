import { useState } from "react";
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formDetails); // Adicionado para imprimir os dados
    // setButtonText("Sending...");
    // Código de envio ao servidor comentado
    // setButtonText("Send");
    // setFormDetails(formInitialDetails);
    // setStatus({ success: true, message: 'Message sent successfully' });
  };

  return (
    <section className="contact bg-gray-100 py-10 h-screen flex justify-center items-center" id="connect">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-6 px-6">
          <div>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="text-3xl font-bold mb-6 text-center">Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="px-4">
                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} className="w-full p-2 border rounded-md" />
                      </div>
                      <div className="px-4">
                        <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} className="w-full p-2 border rounded-md" />
                      </div>
                      <div className="px-4">
                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} className="w-full p-2 border rounded-md" />
                      </div>
                      <div className="px-4">
                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} className="w-full p-2 border rounded-md" />
                      </div>
                      <div className="px-4 sm:col-span-2">
                        <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} className="w-full p-2 border rounded-md"></textarea>
                      </div>
                      <div className="px-4 sm:col-span-2 text-center">
                        <button type="submit" className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition">{buttonText}</button>
                      </div>
                      {
                        status.message &&
                        <div className="px-4 sm:col-span-2 text-center">
                          <p className={status.success === false ? "text-red-600" : "text-green-600"}>{status.message}</p>
                        </div>
                      }
                    </div>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

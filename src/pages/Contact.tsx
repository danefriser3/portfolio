// src/pages/Contact.jsx
const Contact = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
      <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <label className="block mb-4">
          <span className="text-gray-700">Your Name</span>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-500"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-500"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Message</span>
          <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring focus:ring-blue-500"></textarea>
        </label>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;

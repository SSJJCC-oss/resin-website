import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-turquoise-700 flex flex-col items-center justify-center p-8">
      
      <h1 className="text-4xl text-white mb-8">Contact Us</h1>
      <p className="text-white mb-8">For inquiries or VR meeting, please reach out!</p>

      {/* VR Meeting (placeholder for now) */}
      <button className="text-white bg-turquoise-800 hover:bg-turquoise-600 p-4 rounded-full">
        Schedule VR Meeting
      </button>
    </div>
  );
}

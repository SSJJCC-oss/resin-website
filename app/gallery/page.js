import Link from 'next/link';

export default function Gallery() {
  return (
    <div className="min-h-screen bg-turquoise-600 flex flex-col items-center justify-center p-8">
      

      <h1 className="text-4xl text-white mb-8">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-4 rounded-lg shadow-lg">Product 1</div>
        <div className="bg-white p-4 rounded-lg shadow-lg">Product 2</div>
        <div className="bg-white p-4 rounded-lg shadow-lg">Product 3</div>
      </div>
    </div>
  );
}

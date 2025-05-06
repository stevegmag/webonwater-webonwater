import Link from "next/link";

export default function Custom404() {
  return (
    <div className="container mx-auto my-12 py-12 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">The page you're looking for doesn't exist.</p>
      <p className="text-lg mb-6">GitHub Pages URL: {typeof window !== 'undefined' ? window.location.href : ''}</p>
      <Link href="/">
        <a className="px-4 py-2 bg-blue-500 text-white rounded">Go Back Home</a>
      </Link>
    </div>
  );
}
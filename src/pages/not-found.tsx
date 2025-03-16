// app/not-found.tsx (for Next.js 13+ with App Router)
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mt-4">Oops! Page not found.</p>
        <p className="text-gray-500 mt-2">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link href="/" className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

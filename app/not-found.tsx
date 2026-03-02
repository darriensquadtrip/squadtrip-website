import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-6xl font-bold text-purple-700 mb-4">404</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-block rounded-lg bg-purple px-8 py-3 text-lg font-semibold text-white hover:bg-purple-dark transition-colors"
          >
            Go to homepage
          </Link>
          <Link
            href="/guides"
            className="inline-block rounded-lg border border-gray-300 bg-white px-8 py-3 text-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Browse guides
          </Link>
        </div>
      </div>
    </section>
  );
}

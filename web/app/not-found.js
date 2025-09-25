import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#14213d] to-black flex items-center justify-center p-6 mt-10">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-gradient-to-r from-[#fca311] to-[#fca311]/50 bg-clip-text leading-none">
            404
          </h1>
        </div>

        {/* Error Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-[#fca311]/20 rounded-full flex items-center justify-center border-2 border-[#fca311]/30">
            <svg
              className="w-12 h-12 text-[#fca311]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-3-8.5a9.5 9.5 0 109.5 9.5A9.558 9.558 0 0012 3.5z"
              />
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-[#e5e5e5] text-lg md:text-xl mb-6">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <p className="text-[#e5e5e5]/80 text-base">
            Don&apos;t worry, let&apos;s get you back on track to manage your POS system.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/dashboard"
            className="bg-gradient-to-r from-[#fca311] to-[#fca311]/80 hover:from-[#fca311]/90 hover:to-[#fca311]/70 text-black px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-[#fca311]/25 hover:scale-105"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/"
            className="bg-[#14213d]/80 backdrop-blur-lg border border-[#fca311]/20 text-[#fca311] px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-[#14213d] hover:border-[#fca311]/40 hover:scale-105"
          >
            Back to Home
          </Link>
        </div>

        {/* Additional Navigation */}
        <div className="mt-12 pt-8 border-t border-[#fca311]/20">
          <p className="text-[#e5e5e5] text-sm mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link
              href="/dashboard"
              className="text-[#fca311] hover:text-[#fca311]/80 transition-colors underline underline-offset-4"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/products"
              className="text-[#fca311] hover:text-[#fca311]/80 transition-colors underline underline-offset-4"
            >
              Products
            </Link>
            <Link
              href="/dashboard/sales"
              className="text-[#fca311] hover:text-[#fca311]/80 transition-colors underline underline-offset-4"
            >
              Sales
            </Link>
            <Link
              href="/dashboard/inventory"
              className="text-[#fca311] hover:text-[#fca311]/80 transition-colors underline underline-offset-4"
            >
              Inventory
            </Link>
            <Link
              href="/dashboard/settings"
              className="text-[#fca311] hover:text-[#fca311]/80 transition-colors underline underline-offset-4"
            >
              Settings
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#fca311]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#14213d]/50 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-5 w-16 h-16 bg-[#fca311]/5 rounded-full blur-lg"></div>
      </div>
    </div>
  );
}

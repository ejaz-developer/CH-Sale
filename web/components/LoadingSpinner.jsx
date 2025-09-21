function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#14213d] to-black flex items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#fca311]"></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;

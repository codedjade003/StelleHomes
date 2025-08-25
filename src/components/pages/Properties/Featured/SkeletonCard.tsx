export const SkeletonCard = () => (
  <div className="w-screen bg-[#fff9ed]">
    <div className="mx-auto max-w-[1240px] px-4 py-10 animate-pulse">
      <div className="h-[240px] lg:h-[404px] bg-gray-200 rounded-lg mb-6" />
      <div className="h-6 bg-gray-200 w-1/2 rounded mb-2" />
      <div className="h-4 bg-gray-200 w-1/3 rounded mb-2" />
      <div className="h-4 bg-gray-200 w-2/3 rounded" />
    </div>
  </div>
);

import frameworkData from "./framework.json";

export default function FrameworkList() {
  return (
    <div className="min-h-screen bg-pink-50 p-8 font-sans">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-black text-pink-600 tracking-tight italic">
          FRAMEWORK <span className="text-pink-400">PINKY</span>
        </h1>
        <div className="h-1 w-20 bg-pink-400 mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Grid Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {frameworkData.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white/80 backdrop-blur-sm border-2 border-pink-100 p-6 rounded-3xl shadow-lg 
                       hover:shadow-pink-200 hover:border-pink-300 transition-all duration-500 flex flex-col justify-between"
          >
            {/* Dekorasi Bulatan */}
            <div className="absolute -top-3 -right-3 w-12 h-12 bg-pink-200/50 rounded-full blur-xl group-hover:bg-pink-400/50 transition-all"></div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-pink-500">
                  {item.details.developer}
                </span>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors">
                {item.name}
              </h2>
              
              <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-pink-100 text-pink-600 text-[10px] font-bold px-3 py-1 rounded-lg
                               border border-pink-200 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300"
                  >
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>

              <a
                href={item.details.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full py-3 bg-pink-500 text-white rounded-2xl font-semibold 
                           text-sm shadow-md shadow-pink-200 hover:bg-pink-600 hover:shadow-lg 
                           active:scale-95 transition-all outline-none"
              >
                View Documentation
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
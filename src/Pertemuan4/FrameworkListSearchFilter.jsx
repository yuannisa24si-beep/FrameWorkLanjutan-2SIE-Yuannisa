import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
  /** * 1. Deklarasi state sebelumnya (DIKOMEN/DIHAPUS)
   * const [searchTerm, setSearchTerm] = useState("");
   * const [selectedTag, setSelectedTag] = useState("");
   **/

  /* Inisialisasi DataForm - Menggabungkan semua state jadi satu object */
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
    /* Tambah state lain jika perlu di sini */
  });

  /* Inisialisasi Handle perubahan nilai input form */
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm, // Mengambil data lama (copy)
      [name]: value, // Mengupdate field berdasarkan properti 'name' pada input
    });
  };

  /** Logic: Mengambil nilai unique dari list tags **/
  const allTags = [...new Set(frameworkData.flatMap((item) => item.tags))];

  /** * Logic Filtering:
   * Sekarang memanggil state menggunakan dataForm.searchTerm dan dataForm.selectedTag
   **/
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag 
      ? framework.tags.includes(dataForm.selectedTag) 
      : true;

    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-pink-50 p-8 font-sans">
      <div className="max-w-6xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-black text-pink-600 tracking-tight italic uppercase">
          Framework <span className="text-pink-400">Library</span>
        </h1>
        <div className="h-1 w-24 bg-pink-400 mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Filter Section - Mengikuti instruksi foto (After) */}
      <div className="max-w-6xl mx-auto mb-12 flex flex-col md:flex-row gap-4">
        
        {/* Input Search */}
        <div className="relative flex-1">
          <input
            type="text"
            name="searchTerm" // HARUS SAMA dengan key di dataForm
            placeholder="Search by name or description..."
            value={dataForm.searchTerm} // Memanggil dari dataForm
            onChange={handleChange} // Menggunakan fungsi handleChange tunggal
            className="w-full p-4 pl-12 bg-white border-2 border-pink-100 rounded-2xl focus:border-pink-400 outline-none shadow-sm text-gray-700"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2">🔍</span>
        </div>

        {/* Select Tag */}
        <select
          name="selectedTag" // HARUS SAMA dengan key di dataForm
          value={dataForm.selectedTag} // Memanggil dari dataForm
          onChange={handleChange} // Menggunakan fungsi handleChange tunggal
          className="p-4 bg-white border-2 border-pink-100 rounded-2xl focus:border-pink-400 outline-none shadow-sm text-gray-600 font-medium cursor-pointer"
        >
          <option value="">All Tags ✨</option>
          {allTags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* Grid List */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredFrameworks.length > 0 ? (
          filteredFrameworks.map((item) => (
            <div
              key={item.id}
              className="group bg-white/90 backdrop-blur-sm border-2 border-pink-100 p-6 rounded-3xl shadow-lg hover:shadow-pink-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-pink-500 bg-pink-50 px-2 py-1 rounded-lg">
                    {item.details.developer}
                  </span>
                  <span className="text-xs text-gray-400">{item.details.releaseYear}</span>
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
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-pink-100 text-pink-600 text-[10px] font-bold px-3 py-1 rounded-full border border-pink-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <a
                  href={item.details.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full py-3 bg-pink-500 text-white rounded-2xl font-semibold text-sm shadow-md hover:bg-pink-600 transition-all"
                >
                  Visit Official Site
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 font-medium text-pink-300">
            Opps! Tidak ada framework yang cocok... 🌸
          </div>
        )}
      </div>
    </div>
  );
}
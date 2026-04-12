import { useState } from "react";
import data from "./negara.json";
import GuestView from "./GuestView";
import AdminView from "./AdminView";

function App() {
    const [mode, setMode] = useState("guest");
    const [search, setSearch] = useState("");
    const [filterBenua, setFilterBenua] = useState("");
    const [filterPemerintahan, setFilterPemerintahan] = useState("");

    const benuaList = [...new Set(data.map(d => d.benua))];
    const pemerintahanList = [...new Set(data.map(d => d.detail.pemerintahan))];

    const filtered = data.filter(item => {
        const matchSearch = item.nama.toLowerCase().includes(search.toLowerCase()) ||
            item.ibuKota.toLowerCase().includes(search.toLowerCase());
        const matchBenua = filterBenua ? item.benua === filterBenua : true;
        const matchPemerintahan = filterPemerintahan ? item.detail.pemerintahan === filterPemerintahan : true;
        return matchSearch && matchBenua && matchPemerintahan;
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-rose-300 to-pink-200 text-rose-900 py-8 px-6 shadow-sm">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold mb-1">Negara Explorer</h1>
                    <p className="text-rose-700 text-sm">Data JSON · Search & Filter · Best Practice State · Responsive Grid</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-6">
                {/* Controls */}
                <div className="flex flex-col md:flex-row gap-3 mb-6">
                    <input
                        type="text"
                        placeholder="🔍 Cari negara atau ibu kota..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="flex-1 px-4 py-2.5 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300 text-sm bg-white shadow-sm"
                    />
                    <select
                        value={filterBenua}
                        onChange={e => setFilterBenua(e.target.value)}
                        className="px-4 py-2.5 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300 text-sm bg-white shadow-sm"
                    >
                        <option value="">Semua Benua</option>
                        {benuaList.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                    <select
                        value={filterPemerintahan}
                        onChange={e => setFilterPemerintahan(e.target.value)}
                        className="px-4 py-2.5 rounded-xl border border-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300 text-sm bg-white shadow-sm"
                    >
                        <option value="">Semua Pemerintahan</option>
                        {pemerintahanList.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                    <div className="flex rounded-xl overflow-hidden border border-rose-200 shadow-sm">
                        <button
                            onClick={() => setMode("guest")}
                            className={`px-4 py-2.5 text-sm font-semibold transition-colors ${
                                mode === "guest"
                                    ? "bg-gradient-to-r from-rose-300 to-pink-200 text-rose-900"
                                    : "bg-white text-gray-500 hover:bg-rose-50"
                            }`}
                        >
                            👤 Guest
                        </button>
                        <button
                            onClick={() => setMode("admin")}
                            className={`px-4 py-2.5 text-sm font-semibold transition-colors ${
                                mode === "admin"
                                    ? "bg-gradient-to-r from-rose-300 to-pink-200 text-rose-900"
                                    : "bg-white text-gray-500 hover:bg-rose-50"
                            }`}
                        >
                            🛠️ Admin
                        </button>
                    </div>
                </div>

                <p className="text-sm text-gray-500 mb-4">
                    Menampilkan <span className="font-semibold text-rose-400">{filtered.length}</span> dari {data.length} negara
                </p>

                {filtered.length === 0 ? (
                    <div className="text-center py-20 text-gray-400">
                        <p className="text-4xl mb-3">🔍</p>
                        <p className="text-lg font-medium">Tidak ada data yang ditemukan</p>
                    </div>
                ) : mode === "guest" ? (
                    <GuestView data={filtered} />
                ) : (
                    <AdminView data={filtered} />
                )}
            </div>
        </div>
    );
}
export default App;
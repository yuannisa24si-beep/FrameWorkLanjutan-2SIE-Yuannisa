// Improvisasi 2: Modal saat klik search
export default function SearchModal({ onClose }) {
    return (
        <div
            className="fixed inset-0 bg-black/40 flex items-start justify-center pt-24 z-50"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-2 mb-4">
                    <span className="text-gray-400">🔍</span>
                    <input
                        autoFocus
                        type="text"
                        placeholder="Cari menu, order, customer..."
                        className="flex-1 outline-none text-sm text-gray-700 font-poppins"
                    />
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xs">ESC</button>
                </div>
                <p className="text-xs text-gray-400 font-poppins">Pencarian cepat — ketik untuk mulai mencari</p>
                <div className="mt-4 space-y-2">
                    {["Dashboard", "Order List", "Customer", "Analytics", "Foods"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-green-50 cursor-pointer text-sm text-gray-600 hover:text-green-600 transition-colors">
                            <span>📄</span> {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

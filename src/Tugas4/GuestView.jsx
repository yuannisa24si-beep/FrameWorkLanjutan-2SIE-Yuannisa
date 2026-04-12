function GuestView({ data }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.map(item => (
                <div key={item.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                    <div className="bg-gradient-to-br from-rose-50 to-pink-50 flex items-center justify-center h-36 p-4">
                        <img
                            src={item.gambar}
                            alt={item.nama}
                            className="h-24 w-36 object-cover rounded-lg shadow"
                            onError={e => { e.target.src = "https://placehold.co/144x96?text=" + item.nama }}
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-800">{item.nama}</h3>
                        <p className="text-sm text-gray-500 mb-3">🏙️ {item.ibuKota}</p>

                        <div className="flex flex-wrap gap-2 mb-3">
                            <span className="text-xs bg-rose-100 text-rose-500 px-2 py-1 rounded-full font-medium">
                                {item.benua}
                            </span>
                            <span className="text-xs bg-pink-100 text-pink-400 px-2 py-1 rounded-full font-medium">
                                {item.bahasa}
                            </span>
                        </div>
                        <div className="text-xs text-gray-500 border-t pt-3 space-y-1">
                            <p>👥 {item.populasi.toLocaleString("id-ID")} jiwa</p>
                            <p>💰 {item.detail.matauang}</p>
                            <p>🏛️ {item.detail.pemerintahan}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default GuestView;

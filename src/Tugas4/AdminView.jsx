function AdminView({ data }) {
    return (
        <div className="overflow-x-auto rounded-xl shadow border border-gray-200">
            <table className="min-w-full text-sm">
                <thead className="bg-gradient-to-r from-rose-300 to-pink-200 text-rose-900">
                    <tr>
                        <th className="px-4 py-3 text-left">No</th>
                        <th className="px-4 py-3 text-left">Bendera</th>
                        <th className="px-4 py-3 text-left">Negara</th>
                        <th className="px-4 py-3 text-left">Ibu Kota</th>
                        <th className="px-4 py-3 text-left">Benua</th>
                        <th className="px-4 py-3 text-left">Bahasa</th>
                        <th className="px-4 py-3 text-left">Populasi</th>
                        <th className="px-4 py-3 text-left">Mata Uang</th>
                        <th className="px-4 py-3 text-left">Kepadatan</th>
                        <th className="px-4 py-3 text-left">Pemerintahan</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => (
                        <tr key={item.id} className={i % 2 === 0 ? "bg-white" : "bg-rose-50"}>
                            <td className="px-4 py-3 text-gray-500">{i + 1}</td>
                            <td className="px-4 py-3">
                                <img
                                    src={item.gambar}
                                    alt={item.nama}
                                    className="h-6 w-10 object-cover rounded shadow"
                                    onError={e => { e.target.src = "https://placehold.co/40x24?text=?" }}
                                />
                            </td>
                            <td className="px-4 py-3 font-semibold text-gray-800">{item.nama}</td>
                            <td className="px-4 py-3 text-gray-600">{item.ibuKota}</td>
                            <td className="px-4 py-3">
                                <span className="bg-rose-100 text-rose-500 px-2 py-0.5 rounded-full text-xs font-medium">
                                    {item.benua}
                                </span>
                            </td>
                            <td className="px-4 py-3 text-gray-600">{item.bahasa}</td>
                            <td className="px-4 py-3 text-gray-600">{item.populasi.toLocaleString("id-ID")}</td>
                            <td className="px-4 py-3 text-gray-600">{item.detail.matauang}</td>
                            <td className="px-4 py-3">
                                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                                    item.detail.kepadatan === "Sangat Tinggi" ? "bg-red-100 text-red-700" :
                                    item.detail.kepadatan === "Tinggi" ? "bg-orange-100 text-orange-700" :
                                    item.detail.kepadatan === "Sedang" ? "bg-yellow-100 text-yellow-700" :
                                    "bg-green-100 text-green-700"
                                }`}>
                                    {item.detail.kepadatan}
                                </span>
                            </td>
                            <td className="px-4 py-3 text-gray-600">{item.detail.pemerintahan}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default AdminView;
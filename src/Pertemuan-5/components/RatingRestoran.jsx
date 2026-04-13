// Improvisasi 3: Rating & statistik restoran
const stats = [
    { label: "Rating Rata-rata", value: "4.8", icon: "⭐", sub: "dari 5.0" },
    { label: "Total Review", value: "1.2K", icon: "💬", sub: "bulan ini" },
    { label: "Pelanggan Setia", value: "320", icon: "❤️", sub: "repeat order" },
];

export default function RatingRestoran() {
    return (
        <div className="bg-white rounded-xl shadow-md p-5 m-5">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">🏅 Statistik Restoran</h2>
            <div className="grid grid-cols-3 gap-4">
                {stats.map((s, i) => (
                    <div key={i} className="flex flex-col items-center bg-gray-50 rounded-xl p-4 text-center">
                        <span className="text-3xl mb-2">{s.icon}</span>
                        <span className="text-2xl font-bold text-gray-800">{s.value}</span>
                        <span className="text-sm font-medium text-gray-600 mt-1">{s.label}</span>
                        <span className="text-xs text-gray-400">{s.sub}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

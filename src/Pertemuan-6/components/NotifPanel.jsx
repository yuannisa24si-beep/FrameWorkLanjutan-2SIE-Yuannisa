// Improvisasi 1: Panel notifikasi saat klik bell
const notifs = [
    { pesan: "Order #001 telah dikirim", waktu: "2 menit lalu", warna: "bg-green-100 text-green-600" },
    { pesan: "Customer baru mendaftar", waktu: "10 menit lalu", warna: "bg-blue-100 text-blue-600" },
    { pesan: "Order #004 dibatalkan", waktu: "1 jam lalu", warna: "bg-red-100 text-red-500" },
    { pesan: "Review baru dari Nisa", waktu: "2 jam lalu", warna: "bg-yellow-100 text-yellow-600" },
];

export default function NotifPanel({ onClose }) {
    return (
        <div className="fixed inset-0 z-50" onClick={onClose}>
            <div
                className="absolute top-16 right-4 bg-white rounded-2xl shadow-2xl w-80 p-4"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-700">🔔 Notifikasi</h3>
                    <button onClick={onClose} className="text-xs text-gray-400 hover:text-gray-600">Tutup</button>
                </div>
                <div className="space-y-2">
                    {notifs.map((n, i) => (
                        <div key={i} className={`flex items-start gap-3 p-3 rounded-xl ${n.warna}`}>
                            <div className="flex-1">
                                <p className="text-sm font-medium">{n.pesan}</p>
                                <p className="text-xs opacity-70 mt-0.5">{n.waktu}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

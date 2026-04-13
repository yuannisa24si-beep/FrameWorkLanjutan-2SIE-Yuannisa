// Improvisasi 2: Progress target harian
const targets = [
    { label: "Target Order", current: 75, target: 100, color: "bg-green-400" },
    { label: "Target Revenue", current: 128, target: 200, color: "bg-blue-400" },
    { label: "Target Customer Baru", current: 40, target: 50, color: "bg-yellow-400" },
];

export default function TargetHarian() {
    return (
        <div className="bg-white rounded-xl shadow-md p-5 m-5">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">🎯 Target Harian</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {targets.map((t, i) => {
                    const pct = Math.round((t.current / t.target) * 100);
                    return (
                        <div key={i} className="bg-gray-50 rounded-xl p-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-gray-600">{t.label}</span>
                                <span className="text-sm font-bold text-gray-700">{pct}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                                <div className={`${t.color} h-2.5 rounded-full`} style={{ width: `${pct}%` }} />
                            </div>
                            <p className="text-xs text-gray-400">{t.current} / {t.target}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

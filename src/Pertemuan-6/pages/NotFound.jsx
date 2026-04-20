import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="text-center">
                <p className="text-9xl font-bold text-green-500">404</p>
                <h1 className="text-3xl font-bold text-gray-800 mt-4">Halaman Tidak Ditemukan</h1>
                <p className="text-gray-500 mt-2 mb-6">
                    Maaf, halaman yang kamu cari tidak ada atau sudah dipindahkan.
                </p>
                <Link
                    to="/"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors inline-block"
                >
                    ← Kembali ke Dashboard
                </Link>
            </div>
        </div>
    );
}

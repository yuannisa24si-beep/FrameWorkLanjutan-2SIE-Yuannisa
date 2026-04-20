import { Link } from "react-router-dom";

export default function ErrorPage({ kodeError, deskripsiError, gambarError }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] p-6 text-center">
            {gambarError && (
                <img src={gambarError} alt="error" className="w-48 mb-6 opacity-80" />
            )}
            <p className="text-8xl font-bold text-green-500 mb-2">{kodeError}</p>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">
                {kodeError === 400 && "Bad Request"}
                {kodeError === 401 && "Unauthorized"}
                {kodeError === 403 && "Forbidden"}
                {kodeError === 404 && "Not Found"}
            </h2>
            <p className="text-gray-500 mb-6 max-w-md">{deskripsiError}</p>
            <Link to="/" className="bg-green-500 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-green-600 transition-colors">
                ← Kembali ke Dashboard
            </Link>
        </div>
    );
}

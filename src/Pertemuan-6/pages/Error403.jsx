import ErrorPage from "../components/ErrorPage";
export default function Error403() {
    return <ErrorPage kodeError={403} deskripsiError="Akses ditolak. Kamu tidak memiliki hak untuk mengakses halaman ini." gambarError="https://cdn-icons-png.flaticon.com/512/6195/6195702.png" />;
}

import ErrorPage from "../components/ErrorPage";
export default function Error400() {
    return <ErrorPage kodeError={400} deskripsiError="Permintaan tidak valid. Periksa kembali data yang kamu kirim." gambarError="https://cdn-icons-png.flaticon.com/512/6195/6195678.png" />;
}

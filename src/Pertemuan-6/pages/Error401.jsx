import ErrorPage from "../components/ErrorPage";
export default function Error401() {
    return <ErrorPage kodeError={401} deskripsiError="Kamu tidak memiliki izin akses. Silakan login terlebih dahulu." gambarError="https://cdn-icons-png.flaticon.com/512/6195/6195700.png" />;
}

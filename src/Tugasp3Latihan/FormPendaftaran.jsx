import { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import HasilPendaftaran from "./HasilPendaftaran";


const opsiProduk = [
    { value: "Baju", label: "Baju" },
    { value: "Celana", label: "Celana" },
    { value: "Topi", label: "Topi" },
    { value: "Sepatu", label: "Sepatu" },
];

const opsiPembayaran = [
    { value: "Transfer Bank", label: "Transfer Bank" },
    { value: "QRIS", label: "QRIS (Diskon 5%)" },
    { value: "COD", label: "COD / Bayar di Tempat" },
    { value: "Kartu Kredit", label: "Kartu Kredit (Diskon 3%)" },
];

function FormPendaftaran() {
    const [form, setForm] = useState({
        nama: "", alamat: "", telepon: "",
        produk: "", pembayaran: "",
        harga: "", kuantitas: ""
    });
    const [errors, setErrors] = useState({});
    const [hasil, setHasil] = useState(null);

    function validate(data) {
        const e = {};
        if (!data.nama.trim())
            e.nama = "Nama tidak boleh kosong.";
        else if (/\d/.test(data.nama))
            e.nama = "Nama tidak boleh mengandung angka.";
        else if (data.nama.trim().length < 3)
            e.nama = "Nama minimal 3 karakter.";

        if (!data.alamat.trim())
            e.alamat = "Alamat tidak boleh kosong.";
        else if (data.alamat.trim().length < 5)
            e.alamat = "Alamat minimal 5 karakter.";

        if (!data.telepon.trim())
            e.telepon = "No. telepon tidak boleh kosong.";
        else if (!/^\d+$/.test(data.telepon))
            e.telepon = "No. telepon hanya boleh berisi angka.";
        else if (data.telepon.length < 10)
            e.telepon = "No. telepon minimal 10 digit.";

        if (!data.produk) e.produk = "Pilih produk terlebih dahulu.";
        if (!data.pembayaran) e.pembayaran = "Pilih metode pembayaran.";

        if (!data.harga)
            e.harga = "Harga tidak boleh kosong.";
        else if (!/^\d+$/.test(data.harga))
            e.harga = "Harga hanya boleh berisi angka.";
        else if (Number(data.harga) <= 0)
            e.harga = "Harga harus lebih dari 0.";

        if (!data.kuantitas)
            e.kuantitas = "Kuantitas tidak boleh kosong.";
        else if (!/^\d+$/.test(data.kuantitas))
            e.kuantitas = "Kuantitas hanya boleh berisi angka.";
        else if (Number(data.kuantitas) <= 0)
            e.kuantitas = "Kuantitas minimal 1.";

        return e;
    }

    function handleChange(e) {
        const { name, value } = e.target;
        const updated = { ...form, [name]: value };
        setForm(updated);
        const errs = validate(updated);
        setErrors(prev => ({ ...prev, [name]: errs[name] || "" }));
        setHasil(null);
    }

    function isFormValid() {
        return Object.keys(validate(form)).length === 0;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const errs = validate(form);
        if (Object.keys(errs).length > 0) { setErrors(errs); return; }
        setHasil({ ...form });
    }

    return (
        <div className="form-wrapper">
            <div className="form-header">
                <span className="form-icon">👗</span>
                <div>
                    <h1>Pemesanan Pakaian</h1>
                    <p className="subtitle">Isi data kamu untuk memesan pakaian</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} noValidate>
                {/* Data Diri */}
                <p className="section-label">Data Pemesan</p>
                <InputField label="Nama Pemesan" name="nama" value={form.nama}
                    onChange={handleChange} error={errors.nama}
                    placeholder="Contoh: Yuannisa Zahratul Firza" />
                <InputField label="Alamat Pengiriman" name="alamat" value={form.alamat}
                    onChange={handleChange} error={errors.alamat}
                    placeholder="Contoh: Jl. Sudirman No. 10, Pekanbaru" />
                <InputField label="No. Telepon" name="telepon" value={form.telepon}
                    onChange={handleChange} error={errors.telepon}
                    placeholder="Contoh: 08123456789" />

                {/* Detail Pesanan */}
                <p className="section-label">Detail Pesanan</p>
                <div className="row-2">
                    <SelectField label="Pilih Produk" name="produk" value={form.produk}
                        onChange={handleChange} error={errors.produk} options={opsiProduk} />
                    <SelectField label="Metode Pembayaran" name="pembayaran" value={form.pembayaran}
                        onChange={handleChange} error={errors.pembayaran} options={opsiPembayaran} />
                </div>
                <div className="row-2">
                    <InputField label="Harga Satuan (Rp)" name="harga" value={form.harga}
                        onChange={handleChange} error={errors.harga}
                        placeholder="Contoh: 120000" />
                    <InputField label="Kuantitas" name="kuantitas" value={form.kuantitas}
                        onChange={handleChange} error={errors.kuantitas}
                        placeholder="Contoh: 2" />
                </div>

                {isFormValid() && (
                    <button type="submit" className="btn-submit">Pesan Sekarang 🛒</button>
                )}
            </form>

            {hasil && <HasilPendaftaran data={hasil} />}
        </div>
    );
}

export default FormPendaftaran;

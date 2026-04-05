import { useState, useEffect } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import "./custom.css";

const kategoriOptions = [
    { value: "elektronik", label: "Elektronik", diskon: 5 },
    { value: "pakaian", label: "Pakaian", diskon: 10 },
    { value: "makanan", label: "Makanan & Minuman", diskon: 3 },
    { value: "fashion", label: "Fashion", diskon: 15 },
];

const metodePembayaranOptions = [
    { value: "cash", label: "Cash / Tunai", diskon: 0 },
    { value: "debit", label: "Kartu Debit", diskon: 5 },
    { value: "credit", label: "Kartu Kredit", diskon: 0 },
    { value: "qris", label: "QRIS", diskon: 15 },
];

function KalkulatorDiskonForm() {
    const [formData, setFormData] = useState({
        namaBarang: "",
        hargaBarang: "",
        kuantitas: "",
        kategori: "",
        metodePembayaran: "",
    });

    const [errors, setErrors] = useState({});
    const [hasil, setHasil] = useState(null);
    const [isFormValid, setIsFormValid] = useState(false);

    function validateField(name, value) {
        if (name === "namaBarang") {
            if (!value.trim()) return "Nama barang wajib diisi";
            if (/\d/.test(value)) return "Nama barang tidak boleh mengandung angka";
            if (value.trim().length < 3) return "Nama barang minimal 3 karakter";
        }
        if (name === "hargaBarang") {
            if (!value) return "Harga wajib diisi";
            if (isNaN(value) || Number(value) <= 0) return "Harga harus berupa angka lebih dari 0";
            if (Number(value) > 100000000) return "Harga maksimal Rp 100.000.000";
        }
        if (name === "kuantitas") {
            if (!value) return "Kuantitas wajib diisi";
            if (!Number.isInteger(Number(value)) || Number(value) <= 0) return "Kuantitas harus bilangan bulat positif";
            if (Number(value) > 1000) return "Kuantitas maksimal 1000";
        }
        if (name === "kategori" && !value) return "Kategori wajib dipilih";
        if (name === "metodePembayaran" && !value) return "Metode pembayaran wajib dipilih";
        return "";
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
        setHasil(null);
    }

    useEffect(() => {
        const allFilled = Object.values(formData).every(v => v !== "");
        const noErrors = Object.values(errors).every(e => e === "");
        setIsFormValid(allFilled && noErrors);
    }, [formData, errors]);

    function handleSubmit(e) {
        e.preventDefault();
        const newErrors = {};
        Object.keys(formData).forEach(k => {
            const err = validateField(k, formData[k]);
            if (err) newErrors[k] = err;
        });
        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;

        const harga = Number(formData.hargaBarang);
        const qty = Number(formData.kuantitas);
        const subtotal = harga * qty;

        const katObj = kategoriOptions.find(o => o.value === formData.kategori);
        const metObj = metodePembayaranOptions.find(o => o.value === formData.metodePembayaran);

        const diskonKat = katObj?.diskon || 0;
        const diskonMet = metObj?.diskon || 0;

        const nominalKat = subtotal * (diskonKat / 100);
        const nominalMet = subtotal * (diskonMet / 100);
        const totalDiskon = nominalKat + nominalMet;
        const totalBayar = subtotal - totalDiskon;

        setHasil({
            namaBarang: formData.namaBarang,
            hargaPerItem: harga,
            kuantitas: qty,
            kategori: katObj?.label,
            metodePembayaran: `${metObj?.label}${diskonMet > 0 ? ` (Diskon ${diskonMet}%)` : ""}`,
            subtotal,
            diskonKat,
            diskonMet,
            nominalKat,
            nominalMet,
            totalDiskon,
            totalBayar,
        });
    }

    return (
        <div className="kalk-wrapper">
            {/* Header */}
            <div className="kalk-header">
                <h1>🛍️ Kalkulator Diskon</h1>
                <p>Hitung total bayar dengan berbagai diskon</p>
            </div>

            {/* Form */}
            <div className="kalk-body">
                <form onSubmit={handleSubmit}>
                    <InputField label="Nama Barang" name="namaBarang" value={formData.namaBarang}
                        onChange={handleChange} error={errors.namaBarang} placeholder="Contoh: Baju" />
                    <InputField label="Harga Barang (Rp)" name="hargaBarang" value={formData.hargaBarang}
                        onChange={handleChange} error={errors.hargaBarang} placeholder="Contoh: 100000" />
                    <InputField label="Kuantitas" name="kuantitas" value={formData.kuantitas}
                        onChange={handleChange} error={errors.kuantitas} placeholder="Contoh: 5" />
                    <SelectField label="Kategori" name="kategori" value={formData.kategori}
                        onChange={handleChange} error={errors.kategori} options={kategoriOptions} />
                    <SelectField label="Metode Pembayaran" name="metodePembayaran" value={formData.metodePembayaran}
                        onChange={handleChange} error={errors.metodePembayaran} options={metodePembayaranOptions} />

                    {/* Conditional: tombol submit hanya muncul kalau valid */}
                    {isFormValid && (
                        <button type="submit" className="kalk-btn">
                            💰 Hitung Total Bayar
                        </button>
                    )}

                    {!isFormValid && (
                        <div className="kalk-warning">
                            ⚠️ Lengkapi semua data dengan benar untuk melihat tombol submit
                        </div>
                    )}
                </form>

                {/* Hasil Rincian */}
                {hasil && (
                    <div className="kalk-result">
                        <h3>🎉 Rincian Belanja</h3>

                        <div className="result-rows">
                            <div className="result-row">
                                <span>Nama Barang:</span>
                                <span>{hasil.namaBarang}</span>
                            </div>
                            <div className="result-row">
                                <span>Harga per Item:</span>
                                <span>Rp {hasil.hargaPerItem.toLocaleString("id-ID")}</span>
                            </div>
                            <div className="result-row">
                                <span>Kuantitas:</span>
                                <span>{hasil.kuantitas} item</span>
                            </div>
                            <div className="result-row">
                                <span>Kategori:</span>
                                <span>{hasil.kategori}</span>
                            </div>
                            <div className="result-row">
                                <span>Metode Pembayaran:</span>
                                <span>{hasil.metodePembayaran}</span>
                            </div>
                        </div>

                        <div className="result-divider" />

                        <div className="result-rows">
                            <div className="result-row">
                                <span className="fw600">Subtotal:</span>
                                <span>Rp {hasil.subtotal.toLocaleString("id-ID")}</span>
                            </div>
                            {hasil.diskonKat > 0 && (
                                <div className="result-row diskon-row">
                                    <span>Diskon Kategori ({hasil.diskonKat}%):</span>
                                    <span>- Rp {hasil.nominalKat.toLocaleString("id-ID")}</span>
                                </div>
                            )}
                            {hasil.diskonMet > 0 && (
                                <div className="result-row diskon-row">
                                    <span>Diskon Pembayaran ({hasil.diskonMet}%):</span>
                                    <span>- Rp {hasil.nominalMet.toLocaleString("id-ID")}</span>
                                </div>
                            )}
                            <div className="result-row total-diskon-row">
                                <span>Total Diskon:</span>
                                <span>- Rp {hasil.totalDiskon.toLocaleString("id-ID")}</span>
                            </div>
                        </div>

                        <div className="result-divider" />

                        <div className="result-row total-bayar-row">
                            <span>Total Yang Harus Dibayar:</span>
                            <span>Rp {hasil.totalBayar.toLocaleString("id-ID")}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default KalkulatorDiskonForm;

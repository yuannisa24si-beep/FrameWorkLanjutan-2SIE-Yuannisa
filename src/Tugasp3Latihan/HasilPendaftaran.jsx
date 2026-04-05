const DISKON_PEMBAYARAN = {
    "QRIS": 5,
    "Kartu Kredit": 3,
};

function HasilPendaftaran({ data }) {
    const harga = Number(data.harga);
    const kuantitas = Number(data.kuantitas);
    const ongkir = 15000;
    const subtotal = harga * kuantitas;
    const pctDiskon = DISKON_PEMBAYARAN[data.pembayaran] || 0;
    const nominalDiskon = subtotal * (pctDiskon / 100);
    const total = subtotal - nominalDiskon + ongkir;

    return (
        <div className="result-card">
            <h2>✅ Pesanan Berhasil!</h2>

            <div className="result-info-row">
                <span className="info-label">Nama Pemesan</span>
                <span className="info-value">{data.nama}</span>
            </div>
            <div className="result-info-row">
                <span className="info-label">Alamat Pengiriman</span>
                <span className="info-value">{data.alamat}</span>
            </div>
            <div className="result-info-row">
                <span className="info-label">No. Telepon</span>
                <span className="info-value">{data.telepon}</span>
            </div>
            <div className="result-info-row">
                <span className="info-label">Produk</span>
                <span className="info-value">{data.produk}</span>
            </div>
            <div className="result-info-row">
                <span className="info-label">Metode Pembayaran</span>
                <span className="info-value">{data.pembayaran}</span>
            </div>
            <div className="result-info-row">
                <span className="info-label">Harga Satuan</span>
                <span className="info-value">Rp {harga.toLocaleString("id-ID")}</span>
            </div>
            <div className="result-info-row">
                <span className="info-label">Kuantitas</span>
                <span className="info-value">{kuantitas} pcs</span>
            </div>

            <div className="result-divider" />

            <div className="result-row-item">
                <span>Subtotal</span>
                <span>Rp {subtotal.toLocaleString("id-ID")}</span>
            </div>
            {pctDiskon > 0 && (
                <div className="result-row-item diskon">
                    <span>Diskon {data.pembayaran} ({pctDiskon}%)</span>
                    <span>- Rp {nominalDiskon.toLocaleString("id-ID")}</span>
                </div>
            )}
            <div className="result-row-item">
                <span>Ongkos Kirim</span>
                <span>Rp {ongkir.toLocaleString("id-ID")}</span>
            </div>
            <div className="biaya">
                <span>Total Pembayaran</span>
                <span>Rp {total.toLocaleString("id-ID")}</span>
            </div>
        </div>
    );
}

export default HasilPendaftaran;

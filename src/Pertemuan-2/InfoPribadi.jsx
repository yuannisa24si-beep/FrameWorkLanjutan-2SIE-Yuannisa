// Komponen 2: Informasi pribadi (NIM, jurusan, angkatan, dll)
export default function InfoPribadi({ nim, jurusan, angkatan, asalKota, tanggalLahir }) {
  return (
    <div className="section-card">
      <h2>Informasi Pribadi</h2>
      <ul className="info-list">
        <li><span className="label">NIM</span><span className="value">{nim}</span></li>
        <li><span className="label">Jurusan</span><span className="value">{jurusan}</span></li>
        <li><span className="label">Angkatan</span><span className="value">{angkatan}</span></li>
        <li><span className="label">Asal Kota</span><span className="value">{asalKota}</span></li>
        <li><span className="label">Tanggal Lahir</span><span className="value">{tanggalLahir}</span></li>
      </ul>
    </div>
  );
}

import Nama from './Nama';
import NIM from './Nim';
import Jurusan from './Jurusan';
import Alamat from './Alamat';
import Hobi from './Hobi';
import Skill from './Skill';
import './custom.css';

function BiodataDiri() {
    return (
        <div className="card">
            <div className="header"></div>

            <img
                src="public/img/gambar1.jpg"
                alt="profile"
                className="profile-img"
            />

            <div className="name">Nisa</div>
            <div className="sub">Mahasiswa Sistem Informasi</div>

            <div className="info">
                <Nama />
                <NIM />
                <Jurusan />
                <Alamat />
                <Hobi />
                <Skill />
            </div>

            <div className="footer">
                <button className="btn">Follow</button>
            </div>
        </div>
    );
}

export default BiodataDiri;
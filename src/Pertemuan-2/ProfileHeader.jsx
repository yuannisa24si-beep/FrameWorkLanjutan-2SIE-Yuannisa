// Komponen 1: Header profil dengan foto/avatar dan nama
export default function ProfileHeader({ nama, panggilan, emoji }) {
  return (
    <div className="profile-header">
      <div className="profile-avatar-placeholder">{emoji}</div>
      <div className="profile-info">
        <h1>{nama}</h1>
        <p className="nickname">"{panggilan}"</p>
      </div>
    </div>
  );
}

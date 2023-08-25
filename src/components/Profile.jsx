// CSS
import './Profile.css';

// Image
import { images } from '../assets/data/images';

const Profile = () => {
	return (
		<div className="profile">
			<a href={images[0].src} target="_blank" rel="noreferrer">
				<img src={images[0].src} alt="Avatar do grupo Zé da Guiomar" />
			</a>
			<p>@zedaguiomar</p>
		</div>
	);
};

export default Profile;

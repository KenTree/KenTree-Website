import profilePic from './assets/me.jpg'

function Card()
{
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Kenneth</h2>
            <p className="card-text">I am a Student studying Computer Science!</p>
        </div>
    );
}

export default Card
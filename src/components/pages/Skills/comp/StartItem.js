import starImage from './img/Star.png';

function StartItem({ word }) {
    return (
        <div className="star-item">
            <img src={starImage} alt="star" />
            <span className="span">{word}</span>
        </div>
    );
}

export default StartItem;
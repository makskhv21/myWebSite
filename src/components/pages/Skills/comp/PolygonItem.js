import polygonImage from "./img/Polygon.png";

function PolygonItem({ word }) {
    return (
        <div className="polygon-item">
            <img src={polygonImage} alt="polygon" />
            <span className="span">{word}</span>
        </div>
    );
}

export default PolygonItem;
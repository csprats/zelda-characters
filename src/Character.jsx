export const Character = ({name, image, locations, drops}) => {
    return (
        <div className="character">
            <img src={image} alt={name} className="image"/>
            <h2>{name}</h2>
            <p>Locations:</p>
            {locations && locations.map((loc, i) => (
                <b key={i}>{loc}</b>
            ))}
            <p>Drops:</p>
            {drops && drops.map((drop, i) => (
                <b key={i}>{drop}</b>
            ))}            
        </div>
    )
}
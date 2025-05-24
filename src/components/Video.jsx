import '../assets/styles/Video.css';

export default function Video() {
  return (
    <div className="video-container">
      <h1 className="video-title">Makuva</h1>
      <div className="video-player">
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/d2wSPoopG74?si=39PhGxp4tBIXsyLk" 
          title="YouTube video player" frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
      </div>
      <div className="video-description">
        Descubre Colombia: explora rutas, paisajes y experiencias únicas para viajeros y aventureros. ¡Planifica tu próximo viaje con nosotros!
      </div>
    </div>
  );
}
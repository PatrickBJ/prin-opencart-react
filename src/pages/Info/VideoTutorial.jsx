const VideoTutorial = () => (
  <>
    <p>Veja como é o processo de criação no vídeo abaixo:</p><br />

    <iframe
      width="100%"
      height="640"
      src="https://www.youtube.com/embed/oNFKLM5RD_8"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen=""
      style={{ margin: '20px 0 30px 0' }}
    />

    <p>Experimente nossa Mesa de Criação. É simples e divertido. Sem registro, sem download de aplicativos, simplesmente escolha seu preferido.</p>

    <a href="/" >
      <input className="btn btn-primary" style={{ marginTop: '30px' }} type="submit" value="EXPERIMENTAR" />
    </a>
  </>
);

export default VideoTutorial;
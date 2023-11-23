import "./BgImage.css";

const BgImage = () => {
  return (
    <div id="stick_content">
      <div id="img_container">
        <img src="./foodiesfeed.com_healthy-foods.jpg" id="bg_img"></img>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          id="cover_img"
        >
          <path
            fill="#1a1a1a"
            fillOpacity="1"
            d="M0,192L120,202.7C240,213,480,235,720,250.7C960,267,1200,277,1320,282.7L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default BgImage;

import "./Card.css";
import twitter from "../image/twitter-brands-solid.svg";
import instagram from "../image/instagram-brands-solid.svg";
import youtube from "../image/youtube-brands-solid.svg";

function Card() {
  return (
    <>
      <div className="card_main">
        <div className="card">
          <div className="card_image_main">
            <div className="card_image">
              <img src={twitter} alt="twitter-icon" />
            </div>
          </div>

          <h2 className="title"> TWITTER</h2>
          <div className="sum_text">
            Lorem ipsum dolor sit, amet <br /> adipisicing elit. Sunt sequi quas
            co
          </div>
          <div className="btn">
            <button className="btn1">Read More</button>
          </div>
        </div>

        <div className="card">
          <div className="card_image_main">
            <div className="card_image">
              <img src={instagram} alt="INSTAGRAM-icon" />
            </div>
          </div>

          <h2 className="title">INSTAGRAM</h2>
          <div className="sum_text">
            Lorem ipsum dolor sit, amet <br /> adipisicing elit. Sunt sequi quas
            co
          </div>
          <div className="btn">
            <button className="btn1">Read More</button>
          </div>
        </div>
        <div className="card">
          <div className="card_image_main">
            <div className="card_image">
              <img src={youtube} alt="YOUTUBE-icon" />
            </div>
          </div>

          <h2 className="title"> YOUTUBE</h2>
          <div className="sum_text">
            Lorem ipsum dolor sit, amet <br /> adipisicing elit. Sunt sequi quas
            co
          </div>
          <div className="btn">
            <button className="btn1">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;

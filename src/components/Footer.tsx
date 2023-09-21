import { SocialIcon } from "react-social-icons";
const size = { width: "2rem", height: "2rem" };
export default function Footer() {
  return (
    <footer>
      <section>
        <div className="left">
          <h1 className="title">Youser Stack</h1>
          <div className="social">
            <SocialIcon url="www.github.com" href="/#" style={size} />
            <SocialIcon url="www.twitter.com" href="/#" style={size} />
            <SocialIcon url="www.kakao.com" href="/#" style={size} />
          </div>
        </div>
        <div className="right">
          <h1>Index</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Works</li>
            <li>Contact</li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

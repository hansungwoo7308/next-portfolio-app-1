import Link from "next/link";
import { SocialIcon } from "react-social-icons";
const size = { width: "2rem", height: "2rem" };
export default function Footer() {
  return (
    <footer>
      <section>
        <div className="left">
          <h1 className="title">Youser Stack</h1>
          <div className="social">
            <SocialIcon className="icon" url="www.github.com" href="/#" style={size} />
            <SocialIcon className="icon" url="www.twitter.com" href="/#" style={size} />
            <SocialIcon className="icon" url="www.kakao.com" href="/#" style={size} />
          </div>
        </div>
        <div className="right">
          <h1>Index</h1>
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/#about"}>About</Link>
            </li>
            <li>
              <Link href={"/#works"}>Works</Link>
            </li>
            <li>
              <Link href={"/#contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

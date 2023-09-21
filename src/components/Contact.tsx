export default function Contact() {
  return (
    <section className="contact">
      <div className="left">
        <form action="">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <input type="tel" placeholder="Your phone number" />
          {/* <input type="text" placeholder="Message" /> */}
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Message"
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
      <div className="right">
        <h1>Another ways to contact</h1>
        <p>Kakao ID : wooky7308 </p>
        <p>Kakao Open Talk : </p>
        <p>Email : hsw7308@naver.com</p>
      </div>
    </section>
  );
}
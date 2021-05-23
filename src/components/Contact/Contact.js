import React,{useState} from "react";
import "./../../index.css";

const Contact = () => {
  const [fullname,setFullname] = useState('');
  const [showMsg,setShowMsg] = useState(false);
  const onSubmit = (e) =>{
    e.preventDefault();
    if(fullname == "") return;
    setShowMsg(true);
  }
  return (
    <section className="contact-container" name="contact" id="contact">
      <div className="profile-image"></div>
      <h1 className="heading">Contact</h1>

      <div className="cards-container">
        {/* Card 1 - Email */}
        <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="contact-text">
            <span>Email</span>
          </div>
          <div className="contact-links">
            <span>karisakib@gmail.com</span>
          </div>
        </div>

        {/* Card 2 - Social Media */}
        <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-globe"></i>
          </div>
          <div className="contact-text">
            <span>Profiles</span>
          </div>
          <div className="contact-links">
            {/* github */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/karisakib"
            >
              <i className="fab fa-github" title="github" id="github"></i>
            </a>

            {/* linkedIn */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/kari-sakib/"
            >
              <i className="fab fa-linkedin" title="linkedin" id="linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Message form */}
      <div className="container-messageme">
  <form action="post" onSubmit={(e)=>onSubmit(e)}>
    {showMsg && <div className="succes-msg">Hey {fullname}, your message was sent successfully!</div>} 
    <label for="fname">Full Name</label>
    <input type="text" requaired id="fname" name="fullname" onChange={(e)=>setFullname(e.target.value)} placeholder="Your name.."/>

    <label for="subject">Message</label>
    <textarea id="subject" requaired name="subject" placeholder="Write something.." style={{height:"80px"}}/>

    <input type="submit" value="Submit" />
  </form>
  </div>
    </section>
  );
};

export default Contact;

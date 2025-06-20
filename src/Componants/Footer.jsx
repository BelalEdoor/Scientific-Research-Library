import linkedin from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';
import whatsapp from '../assets/whatsapp.svg';
import telegram from '../assets/telegram.svg';
import instagramIcon from '../assets/instagram.svg';

export function Footer() {
  return (
    <footer
      className="bg-[#2b2b2b] px-[15rem] py-12 mt-40 flex items-center justify-between flex-wrap md:flex-nowrap md:text-left text-center gap-8 md:gap-0
                 max-[800px]:flex-col max-[800px]:px-[10rem] max-[600px]:px-4"
    >
     
      <div>
        <p className="tracking-[0.2rem] flex items-center gap-2 text-from-pink-500 to-purple-500 text-[1.8rem] max-[600px]:text-[1.2rem]">
          Scientific Research Library
        </p>
      </div>

      <div className="social-media flex items-center justify-between gap-4">
        <a
          href="https://www.linkedin.com/in/%D8%A8%D9%84%D8%A7%D9%84-%D8%B9%D8%AF%D9%88%D8%B1-56544230b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" className="w-12 text-[3rem]" />
        </a>
        <a href="https://github.com/BilalEdoor" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" className="w-12 text-[3rem]" />
        </a>
        <a href="https://wa.me/+970568033525" target="_blank" rel="noreferrer">
          <img src={whatsapp} alt="Whatsapp" className="w-12 text-[3rem]" />
        </a>
        <a href="https://t.me/Bilal_edoor" target="_blank" rel="noreferrer">
          <img src={telegram} alt="telegram" className="w-12 text-[3rem]" />
        </a>
        <a
          href="https://www.instagram.com/bilal._.3door/profilecard/?igsh=MTR6czZlN2d4dDI5dg=="
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" className="w-12 text-[3rem]" />
        </a>
      </div>
    </footer>
  );
}
export default Footer
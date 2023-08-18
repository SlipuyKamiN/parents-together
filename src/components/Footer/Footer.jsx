const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <h3>Карта сайту</h3>
          <ul>
            <li>
              <a href="/">Користувачам</a>
            </li>
            <li>
              <a href="/">Як це працює</a>
            </li>
            <li>
              <a href="/">Про нас</a>
            </li>
            <li>
              <a href="/">Відгуки</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Розсилка наших новин</h3>
          <form autoComplete="off">
            <input type="text" placeholder="andrijkivbogdana@gmail.com" />
            <button type="submit">{'=>'}</button>
          </form>
        </div>
      </div>
      <div>
        <p>батьки разом - сучасна колоборативнв мережа батьків</p>
        <a href="/">
          <span>Батьки</span> разом
        </a>
        <p>створімо спільні ініціативи для наших дітей!</p>
      </div>
      <address id="address">
        <h3>Контакти</h3>
        <ul>
          <li>
            <a href="tel:+380962722100">UA: +3 8096 272 2100</a>
          </li>
          <li>
            <a href="https://www.halo-lab.com">www.halo-lab.com</a>
          </li>
          <li>
            <a href="mailto:mail@halo-lab.com">mail@halo-lab.com</a>
          </li>
          <li>
            <a href="https://goo.gl/maps/5AdUtNmhmynsaZdi6">Ukraine, Odessa</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://www.facebook.com/">f</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/">in</a>
          </li>
          <li>
            <a href="https://www.instagram.com/">inst</a>
          </li>
          <li>
            <a href="https://web.telegram.org/">tg</a>
          </li>
        </ul>
      </address>
    </footer>
  );
};

export default Footer;

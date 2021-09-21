const Styles = /*html*/`
  <style>
    nav button{
      background: transparent;
      border: 0;
      padding: 10px;
      transition: 0.3s;
    }
    nav button:hover{
      font-weight: bold;
      cursor: pointer;
    }
    nav{
      text-align: center;
      background: #ededed
    }
  </style>
`;
const Navigation = /*html*/`
${Styles}
  <header>
  <nav>
    <button onclick="gts(HomePage())">
      HOME
    </button>
    <button onclick="gts(AboutUs())">
      ABOUT
    </button>
    <button onclick="gts(ContactUs())">
      CONTACT
    </button>
  </nav>
</header>
`;
const HeaderSection = ({title}) => /*html*/`
  <style>
    section{
      width: 100%;
      background: #f7f0ff;
      text-align: center;
      padding-top: 10vh;
      padding-bottom: 15vh
    }
    section p{
      font-size: 50px
    }
  </style>
  <section><br>
    <p>${title}</p>
  </section>
`;
const ps = `      <style>
#p{
  margin: 20px;
  line-height: 25px;
}
</style>`;
const HomePage = () => {
  return comp(
    `Home Page`,
    ``,
    /*html*/`
      ${Navigation}
      ${HeaderSection({title: "Hi! It's Me!"})}
      ${ps}
      <p id="p">
          Hi there! If you can see this page, it means <strong>Yugal</strong> is succefully installed, now go ahead an edit this project.
          <br>
          Some sample Text. Some sample Text.
          Some sample Text. Some sample Text.
          Some sample Text. Some sample Text.
          Some sample Text. Some sample Text.
          Some sample Text. Some sample Text.
          Some sample Text. Some sample Text.
          Some sample Text. Some sample Text.
          Some sample Text. Some sample Text.
          Some sample Text. Some sample Text.
          Some sample Text. Some sample Text.
          Some sample Text. Some sample Text.
          Some sample Text. Some sample Text.
          Some sample Text. Some sample Text.
          Some sample Text. Some sample Text.
          Some sample Text. Some sample Text.
        </p>
    `,
    'index.html'
  );
}

const AboutUs = () => {
  return comp(
    `About Us`,
    ``,
    /*html*/`
      ${Navigation}
      ${HeaderSection({title: "About Yugal"})}
      ${ps}
      <p id="p">
      Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! Its a PHP and JavaScript Framework! 
      </p>
    `,
    'about.html'
  );
}
const ContactUs = () => {
  return comp(
    `Contact Screen`,
    ``,
    /*html*/`
      ${Navigation}
      ${HeaderSection({title: "Contact Me!"})}
      ${ps}
      <p id="p">
      I will not pick you call. I will not pick you call. I will not pick you call. I will not pick you call. I will not pick you call. I will not pick you call. I will not pick you call. I will not pick you call. I will not pick you call. I will not pick you call. I will not pick you call. I will not pick you call. I will not pick you call. I will not pick you call. I will not pick you call. I will not pick you call. I will not pick you call. I will not pick you call. I will not pick you call. I will not pick you call. I will not pick you call. I will not pick you call. I will not pick you call. I will not pick you call. I will not pick you call. I will not pick you call. I will not pick you call. I will not pick you call. I will not pick you call. I will not pick you call. I will not pick you call. I will not pick you call. I will not pick you call. 
      </p>
    `,
    'contact.html'
  );
}
window.addEventListener("load", 
  ()=>Router({
    initial: HomePage,
    screens: [
      {
        name: "index.html",
        page: HomePage
      },
      {
        name: "about.html",
        page: AboutUs
      },
      {
        name: "contact.html",
        page: ContactUs
      }
    ]
  })
);
import React from 'react';
import './App.css';
/* Various image files */
import search from './search.svg';
import logo from './tnw.png';
import finance1 from './finance1.jpeg';
import finance2 from './finance2.jpeg';
import finance3 from './finance3.jpeg';
import finance4 from './finance4.jpeg';
import icon1 from './icon1.jpg';
import icon2 from './icon2.png';
import icon3 from './icon3.jpg';
import icon4 from './icon4.png';
import icon5 from './icon5.jpg';
import icon6 from './icon6.jpg';
import icon7 from './icon7.jpg';
import icon8 from './icon8.png';
import icon9 from './icon9.jpg';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      property: 'value'
    };
    this.handleMouseIn = this.handleMouseIn.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
      /*Fix nav after scrolling 32px*/
      let nav = document.querySelector(".navFixed");
      if(window.scrollY >= 32) {
        nav.classList.remove('invisible');
      }
      if(window.scrollY < 32 && (!nav.classList.contains("invisible"))) {
        nav.classList.add("invisible");
      }
  }

  handleMouseIn(e) {
    /* Hover effects for images */
    if(e.target.classList.contains("searchPic")){
      e.target.classList.remove("bright");
      return;
    }
    /* Nav dropdown menus on hover */
    if(e.target.firstChild.textContent === "Events ▼") {
      let list = document.querySelector(".dropdown1");
      list.classList.remove("invisible");
    } else {
      let list = document.querySelector(".dropdown2");
      list.classList.remove("invisible");
    }
  }

  handleMouseOut() {
    /* Remove hover effects from images */
    let icon = document.querySelector(".searchPic");
    if(!(icon.classList.contains("bright"))){
      icon.classList.add("bright");
      return;
    }
    let icon2 = document.querySelector(".Pic2");
    if(!(icon2.classList.contains("bright"))){
      icon2.classList.add("bright");
      return;
    }
    /* Stop displaying dropdown menus when mouse leaves */
    let list = document.querySelector(".dropdown1");
    if(list.classList.contains("invisible")) {
      document.querySelector(".dropdown2").classList.add("invisible");
    } else {
      list.classList.add("invisible");
    }
  }

  render () {
    return (
      <div className="App">
        <Nav onMouseEnter={this.handleMouseIn} onMouseLeave={this.handleMouseOut}/>
        <NavFixed onMouseEnter={this.handleMouseIn} onMouseLeave={this.handleMouseOut}/>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Footer />
      </div>
    );
  }
}

function Nav(props) {
  return (
    <div className="App">
      <nav className="nav">
        <ul className="holder">
          <li className="white">News</li>
          <li onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}><span className="hover">Events ▼</span>
            <ul className="dropdown dropdown1 invisible">
              <li className="block">TNW2020</li>
              <li className="block">Couch Conferences</li>
            </ul>
          </li>
          <li onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}><span className="hover">Business ▼</span>
            <ul className="dropdown dropdown2 invisible">
              <li className="block">Index</li>
              <li className="block">Programs</li>
            </ul>
          </li>
          <li>AMAs</li>
          <li>Spaces</li>
          <li>Terms & Conditions</li>
          <div className="secondPart">
            <li>About</li>
            <li>Advertise</li>
            <li>Jobs</li>
            <li>Contact</li>
          </div>
        </ul>
        <nav className="nav2">
          <div className="logo orig invisible">
            <img className="logoPic" src={logo} alt="logo"></img>
          </div>
          <ul className="holder2">
            <li>LATEST</li>
            <li>HARD FORK</li>
            <li>PLUGGED</li>
            <li>README</li>
            <li>GROWTH QUARTERS</li>
            <li className="boxDelete">SHIFT</li>
            <li className="boxDelete">NEURAL</li>
          </ul>
          <div className="imageHolder">
            <img src={search} alt="search icon" className="searchPic bright" onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}></img>
          </div>
        </nav>
        <div className="banner">
          Stay home. Go global. Build your network at TNW2020 Online →
        </div>
      </nav>
    </div>
  );
}

/* Copy of nav that appears on top of original after 32px scrolled, then sticks to top of screen*/
function NavFixed (props) {
  return (
    <div className="navFixed invisible">
      <nav className="nav2">
        <div className="logo slideIn">
          <img className="logoPic" src={logo} alt="logo"></img>
        </div>
        <ul className="holder2">
          <li>LATEST</li>
          <li>HARD FORK</li>
          <li>PLUGGED</li>
          <li>README</li>
          <li>GROWTH QUARTERS</li>
          <li className="boxDelete">SHIFT</li>
          <li className="boxDelete">NEURAL</li>
        </ul>
        <div className="imageHolder">
          <img src={search} alt="search icon" className="searchPic Pic2 bright" onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}></img>
        </div>
      </nav>
      <div className="banner">
        Stay home. Go global. Build your network at TNW2020 Online →
      </div>
    </div>
  );
}

function Section1 () {
  return (
    <div className="section1">
      <div className="area1">
        <div className="gradient1"></div>
        <div className="date1">
          Monday — September 21, 2020
        </div>
        <div className="logo1"></div>
        <div className="text">
          <h5 className="insights">Insights</h5>
          <h2 className="header1">The content gold mine your brand needs to leverage: Long-term trending topics</h2>
          <div className="extras">
            by <span className="hover">Amanda Milligan</span> &nbsp; &nbsp;
            <svg width="16" height="16" viewBox="-7.5 992.5 16 16" id="clock" x="128" y="128" xmlns="http://www.w3.org/2000/svg"><path fill="#AAA" d="M-3.508 993.575C-2.28 992.858-.944 992.5.5 992.5s2.78.358 4.008 1.075a7.982 7.982 0 0 1 2.917 2.916c.717 1.229 1.075 2.564 1.075 4.009s-.358 2.78-1.075 4.009a7.975 7.975 0 0 1-2.917 2.916c-1.228.717-2.564 1.075-4.008 1.075s-2.781-.358-4.008-1.075a7.982 7.982 0 0 1-2.917-2.916c-.717-1.229-1.075-2.564-1.075-4.009s.358-2.78 1.075-4.009a7.99 7.99 0 0 1 2.917-2.916zM-3.7 1004.7c1.178 1.178 2.578 1.767 4.2 1.767 1.622 0 3.022-.589 4.2-1.767 1.177-1.178 1.767-2.578 1.767-4.2s-.59-3.022-1.767-4.2c-1.178-1.178-2.578-1.767-4.2-1.767-1.623 0-3.022.589-4.2 1.767s-1.767 2.578-1.767 4.2.589 3.022 1.767 4.2zm7.267-1.066a.84.84 0 0 1-.592.232.84.84 0 0 1-.592-.232l-2.633-2.101c-.233-.211-.339-.461-.317-.75l.184-4.233a.866.866 0 0 1 .283-.616.834.834 0 0 1 .633-.233c.233.011.431.1.592.267s.247.361.258.583l.167 3.783 2.067 2.033a.85.85 0 0 1 .233.643.88.88 0 0 1-.283.624z"></path></svg>
            &nbsp; 50 minutes ago  &nbsp; &nbsp;
            <svg width="16" height="16" viewBox="-7.5 992.5 16 16" id="share" x="880" y="880" xmlns="http://www.w3.org/2000/svg"><path fill="#AAA" d="M8.5 1005.5a3.001 3.001 0 0 1-6 0v-.008l-5.195-2.594a3 3 0 1 1 0-4.796l5.195-2.594v-.008a3.001 3.001 0 0 1 6 0 3.001 3.001 0 0 1-4.805 2.398l-5.211 2.602 5.211 2.602A3 3 0 0 1 8.5 1005.5z"></path></svg>
            &nbsp; 5
          </div>
        </div>
      </div>
      <div className="area2">
        <div className="gradient2"></div>
        <div className="text">
          <h2 className="header2">Attend our 15th annual flagship event online for FREE</h2>
        </div>
      </div>
      <div className="area3">
        <div className="gradient2"></div>
        <div className="text">
          <h5 className="insights">Insights</h5>
          <h2 className="header2">Level-up your customer service with these 4 dynamite strategies</h2>
          <div className="extras">
            by <span className="hover">Tom Sagi</span> &nbsp; &nbsp;
            <svg width="16" height="16" viewBox="-7.5 992.5 16 16" id="clock" x="128" y="128" xmlns="http://www.w3.org/2000/svg"><path fill="#AAA" d="M-3.508 993.575C-2.28 992.858-.944 992.5.5 992.5s2.78.358 4.008 1.075a7.982 7.982 0 0 1 2.917 2.916c.717 1.229 1.075 2.564 1.075 4.009s-.358 2.78-1.075 4.009a7.975 7.975 0 0 1-2.917 2.916c-1.228.717-2.564 1.075-4.008 1.075s-2.781-.358-4.008-1.075a7.982 7.982 0 0 1-2.917-2.916c-.717-1.229-1.075-2.564-1.075-4.009s.358-2.78 1.075-4.009a7.99 7.99 0 0 1 2.917-2.916zM-3.7 1004.7c1.178 1.178 2.578 1.767 4.2 1.767 1.622 0 3.022-.589 4.2-1.767 1.177-1.178 1.767-2.578 1.767-4.2s-.59-3.022-1.767-4.2c-1.178-1.178-2.578-1.767-4.2-1.767-1.623 0-3.022.589-4.2 1.767s-1.767 2.578-1.767 4.2.589 3.022 1.767 4.2zm7.267-1.066a.84.84 0 0 1-.592.232.84.84 0 0 1-.592-.232l-2.633-2.101c-.233-.211-.339-.461-.317-.75l.184-4.233a.866.866 0 0 1 .283-.616.834.834 0 0 1 .633-.233c.233.011.431.1.592.267s.247.361.258.583l.167 3.783 2.067 2.033a.85.85 0 0 1 .233.643.88.88 0 0 1-.283.624z"></path></svg>
            &nbsp; 1 hour ago  &nbsp; &nbsp;
            <svg width="16" height="16" viewBox="-7.5 992.5 16 16" id="share" x="880" y="880" xmlns="http://www.w3.org/2000/svg"><path fill="#AAA" d="M8.5 1005.5a3.001 3.001 0 0 1-6 0v-.008l-5.195-2.594a3 3 0 1 1 0-4.796l5.195-2.594v-.008a3.001 3.001 0 0 1 6 0 3.001 3.001 0 0 1-4.805 2.398l-5.211 2.602 5.211 2.602A3 3 0 0 1 8.5 1005.5z"></path></svg>
            &nbsp; 6
          </div>
        </div>
      </div>
    </div>
  );
}

function Section2 () {
  return (
    <div className="section">
      <div className="paddingBottom"><span className="title">Latest news &gt;</span></div>
      <div className="newsContainer">
        <div className="news">
          <div className="flex flex1"></div>
          <span className="flexText">How to get the most out of attending a digital event</span>
          <div className="minor"><span className="name">Patrick de Laive</span> &nbsp; &#183; &nbsp; 23 minutes ago</div>
        </div>
        <div className="news">
          <div className="flex flex2"></div>
          <span className="flexText">PSA: Microsoft Edge comes to Linux next month</span>
          <div className="minor"><span className="name">Napier Lopez</span> &nbsp; &#183; &nbsp; 9 hours ago</div>
        </div>
        <div className="news">
          <div className="flex flex3"></div>
          <span className="flexText">iOS 14: How to use the new pin, mention and reply features in Messages</span>
          <div className="minor"><span className="name">Rachel Kaser</span> &nbsp; &#183; &nbsp; 11 hours ago</div>
        </div>
        <div className="news">
          <div className="flex flex4"></div>
          <span className="flexText">Pixel 5 leaks: everything we know so far</span>
          <div className="minor"><span className="name">Napier Lopez</span> &nbsp; &#183; &nbsp; 11 hours ago</div>
        </div>
        <div className="news">
          <div className="flex flex5"></div>
          <span className="flexText">The worst technology company in the world</span>
          <div className="minor"><span className="name">Tristan Greene</span> &nbsp; &#183; &nbsp; 13 hours ago</div>
        </div>
        <div className="news">
          <div className="flex flex6"></div>
          <span className="flexText">A computer can guess more than 100 billion passwords per second — still think yours is secure?</span>
          <div className="minor"><span className="name">The Conversation</span> &nbsp; &#183; &nbsp; 16 hours ago</div>
        </div>
        <div className="news">
          <div className="flex flex7"></div>
          <span className="flexText">Apple finally figured out what the f*** its Watch is for</span>
          <div className="minor"><span className="name">Callum Booth</span> &nbsp; &#183; &nbsp; 17 hours ago</div>
        </div>
        <div className="news">
          <div className="flex flex8"></div>
          <span className="flexText">DevOps is an IT buzz title. And if you really want to understand it, this training can help</span>
          <div className="minor"><span className="name">TNW Deals</span> &nbsp; &#183; &nbsp; 18 hours ago</div>
        </div>
      </div>
    </div>
  );
}

function Section3 () {
  return (
    <div className="section">
      <div className="paddingBottom"><span className="title">Latest funding rounds on Index.co &gt;</span>
        <div className="floatRight">
        <div className="appear"></div>
          <span className="offer">Add info</span> &nbsp; | &nbsp;
          <span className="offer">Get updates by email</span> &nbsp; | &nbsp;
          <span className="offer">See more</span>
        </div>
      </div>
      <div className="boxContainer">
        <div className="box">
          <div className="relative">
            <img src={finance1} alt="logo" className="image"></img>
            <h4 className="headline">NextCapital</h4>
            <div className="amount">
              <h4 className="myh4">$30M</h4>
              <h5 className="myh5">Venture Capital</h5>
            </div>
          </div>
          <div className="tags">
            <div className="tag">
              <svg className="cursor" width="16" height="16" viewBox="656.5 1056.5 16 16" id="tag--dark" x="976" y="976" xmlns="http://www.w3.org/2000/svg"><path d="M661.231 1059.879c0-.373-.132-.691-.396-.955-.264-.265-.583-.396-.956-.396s-.692.132-.956.396a1.301 1.301 0 0 0-.396.955c0 .374.132.692.396.956s.583.396.956.396.691-.132.956-.396.396-.582.396-.956zm11.269 6.083c0 .374-.13.69-.391.951l-5.186 5.195a1.35 1.35 0 0 1-.961.392c-.373 0-.69-.131-.95-.392l-7.551-7.562c-.268-.26-.495-.615-.681-1.066-.187-.45-.28-.862-.28-1.235v-4.394a1.3 1.3 0 0 1 .401-.95c.268-.268.584-.401.951-.401h4.394c.373 0 .785.093 1.235.279.451.188.81.414 1.077.682l7.551 7.541c.261.274.391.595.391.96z"></path></svg>
              &nbsp; &nbsp; <span className="highlight">Finance, +3</span>
            </div>
            <div className="tag">
              <svg className="cursor" width="16" height="16" viewBox="-239.5 160.5 16 16" id="briefcase--dark" x="48" y="48" xmlns="http://www.w3.org/2000/svg"><path d="M-233.786 163.833h4.571v-1.166h-4.571v1.166zm10.286 5.833v4.374c0 .402-.141.744-.42 1.03-.28.285-.616.43-1.009.43h-13.144c-.393 0-.729-.145-1.009-.43s-.419-.628-.419-1.03v-4.374h6v1.459c0 .158.056.293.169.409a.545.545 0 0 0 .402.173h2.855a.545.545 0 0 0 .402-.173.565.565 0 0 0 .17-.409v-1.459h6.003zm-6.857 0v1.167h-2.285v-1.167h2.285zm6.857-4.373v3.498h-16v-3.498c0-.403.14-.745.419-1.032.28-.284.616-.429 1.009-.429h3.144v-1.457c0-.243.083-.449.25-.62a.822.822 0 0 1 .606-.255h5.144c.237 0 .439.086.606.255a.857.857 0 0 1 .249.62v1.457h3.145c.393 0 .729.145 1.009.429.278.287.419.63.419 1.032z"></path></svg>
              &nbsp; &nbsp; <span className="highlight">Oak HC/FT, +2</span>
            </div>
          </div>
          <div className="info">
            <div className="cursor">NextCapital raises $30M in Growth</div>
            <div className="cursor">Funding <span className="grey">on FinSMEs</span></div>
          </div>
        </div>
        <div className="box">
          <div className="relative">
            <img src={finance2} alt="logo" className="image"></img>
            <h4 className="headline">ICEYE</h4>
            <div className="amount">
              <h4 className="myh4">$87M</h4>
              <h5 className="myh5">Series C</h5>
            </div>
          </div>
          <div className="tags">
            <div className="tag">
              <svg className="cursor" width="16" height="16" viewBox="656.5 1056.5 16 16" id="tag--dark" x="976" y="976" xmlns="http://www.w3.org/2000/svg"><path d="M661.231 1059.879c0-.373-.132-.691-.396-.955-.264-.265-.583-.396-.956-.396s-.692.132-.956.396a1.301 1.301 0 0 0-.396.955c0 .374.132.692.396.956s.583.396.956.396.691-.132.956-.396.396-.582.396-.956zm11.269 6.083c0 .374-.13.69-.391.951l-5.186 5.195a1.35 1.35 0 0 1-.961.392c-.373 0-.69-.131-.95-.392l-7.551-7.562c-.268-.26-.495-.615-.681-1.066-.187-.45-.28-.862-.28-1.235v-4.394a1.3 1.3 0 0 1 .401-.95c.268-.268.584-.401.951-.401h4.394c.373 0 .785.093 1.235.279.451.188.81.414 1.077.682l7.551 7.541c.261.274.391.595.391.96z"></path></svg>
              &nbsp; &nbsp; <span className="highlight">Information Technology, +2</span>
            </div>
            <div className="tag">
              <svg className="cursor" width="16" height="16" viewBox="-239.5 160.5 16 16" id="briefcase--dark" x="48" y="48" xmlns="http://www.w3.org/2000/svg"><path d="M-233.786 163.833h4.571v-1.166h-4.571v1.166zm10.286 5.833v4.374c0 .402-.141.744-.42 1.03-.28.285-.616.43-1.009.43h-13.144c-.393 0-.729-.145-1.009-.43s-.419-.628-.419-1.03v-4.374h6v1.459c0 .158.056.293.169.409a.545.545 0 0 0 .402.173h2.855a.545.545 0 0 0 .402-.173.565.565 0 0 0 .17-.409v-1.459h6.003zm-6.857 0v1.167h-2.285v-1.167h2.285zm6.857-4.373v3.498h-16v-3.498c0-.403.14-.745.419-1.032.28-.284.616-.429 1.009-.429h3.144v-1.457c0-.243.083-.449.25-.62a.822.822 0 0 1 .606-.255h5.144c.237 0 .439.086.606.255a.857.857 0 0 1 .249.62v1.457h3.145c.393 0 .729.145 1.009.429.278.287.419.63.419 1.032z"></path></svg>
              &nbsp; &nbsp; <span className="highlight">True Ventures, +4</span>
            </div>
          </div>
          <div className="info">
            <div className="cursor">
              Satellite radar startup ICEYE raises $87 million to continue to grow its operational constellation <span className="grey">
              on TechCrunch</span></div>
          </div>
        </div>
        <div className="box">
          <div className="relative">
            <img src={finance3} alt="logo" className="image"></img>
            <h4 className="headline">Mirakl</h4>
            <div className="amount">
              <h4 className="myh4">$300M</h4>
              <h5 className="myh5">Venture Capital</h5>
            </div>
          </div>
          <div className="tags">
            <div className="tag">
              <svg className="cursor" width="16" height="16" viewBox="656.5 1056.5 16 16" id="tag--dark" x="976" y="976" xmlns="http://www.w3.org/2000/svg"><path d="M661.231 1059.879c0-.373-.132-.691-.396-.955-.264-.265-.583-.396-.956-.396s-.692.132-.956.396a1.301 1.301 0 0 0-.396.955c0 .374.132.692.396.956s.583.396.956.396.691-.132.956-.396.396-.582.396-.956zm11.269 6.083c0 .374-.13.69-.391.951l-5.186 5.195a1.35 1.35 0 0 1-.961.392c-.373 0-.69-.131-.95-.392l-7.551-7.562c-.268-.26-.495-.615-.681-1.066-.187-.45-.28-.862-.28-1.235v-4.394a1.3 1.3 0 0 1 .401-.95c.268-.268.584-.401.951-.401h4.394c.373 0 .785.093 1.235.279.451.188.81.414 1.077.682l7.551 7.541c.261.274.391.595.391.96z"></path></svg>
              &nbsp; &nbsp; <span className="highlight">E-Commerce</span>
            </div>
            <div className="tag">
              <svg className="cursor" width="16" height="16" viewBox="-239.5 160.5 16 16" id="briefcase--dark" x="48" y="48" xmlns="http://www.w3.org/2000/svg"><path d="M-233.786 163.833h4.571v-1.166h-4.571v1.166zm10.286 5.833v4.374c0 .402-.141.744-.42 1.03-.28.285-.616.43-1.009.43h-13.144c-.393 0-.729-.145-1.009-.43s-.419-.628-.419-1.03v-4.374h6v1.459c0 .158.056.293.169.409a.545.545 0 0 0 .402.173h2.855a.545.545 0 0 0 .402-.173.565.565 0 0 0 .17-.409v-1.459h6.003zm-6.857 0v1.167h-2.285v-1.167h2.285zm6.857-4.373v3.498h-16v-3.498c0-.403.14-.745.419-1.032.28-.284.616-.429 1.009-.429h3.144v-1.457c0-.243.083-.449.25-.62a.822.822 0 0 1 .606-.255h5.144c.237 0 .439.086.606.255a.857.857 0 0 1 .249.62v1.457h3.145c.393 0 .729.145 1.009.429.278.287.419.63.419 1.032z"></path></svg>
              &nbsp; &nbsp; <span className="highlight">Bain Capital Ventures, +4</span>
            </div>
          </div>
          <div className="info">
            <div className="cursor">
              Mirakl raises $300 million for its marketplace platform <span className="grey">
              on TechCrunch</span></div>
          </div>
        </div>
        <div className="box boxDelete">
          <div className="relative">
            <img src={finance4} alt="logo" className="image"></img>
            <h4 className="headline">CloudMargin</h4>
            <div className="amount">
              <h4 className="myh4">$15M</h4>
              <h5 className="myh5">Series B</h5>
            </div>
          </div>
          <div className="tags">
            <div className="tag">
              <svg className="cursor" width="16" height="16" viewBox="656.5 1056.5 16 16" id="tag--dark" x="976" y="976" xmlns="http://www.w3.org/2000/svg"><path d="M661.231 1059.879c0-.373-.132-.691-.396-.955-.264-.265-.583-.396-.956-.396s-.692.132-.956.396a1.301 1.301 0 0 0-.396.955c0 .374.132.692.396.956s.583.396.956.396.691-.132.956-.396.396-.582.396-.956zm11.269 6.083c0 .374-.13.69-.391.951l-5.186 5.195a1.35 1.35 0 0 1-.961.392c-.373 0-.69-.131-.95-.392l-7.551-7.562c-.268-.26-.495-.615-.681-1.066-.187-.45-.28-.862-.28-1.235v-4.394a1.3 1.3 0 0 1 .401-.95c.268-.268.584-.401.951-.401h4.394c.373 0 .785.093 1.235.279.451.188.81.414 1.077.682l7.551 7.541c.261.274.391.595.391.96z"></path></svg>
              &nbsp; &nbsp; <span className="highlight">Cloud Computing</span>
            </div>
            <div className="tag">
              <svg className="cursor" width="16" height="16" viewBox="-239.5 160.5 16 16" id="briefcase--dark" x="48" y="48" xmlns="http://www.w3.org/2000/svg"><path d="M-233.786 163.833h4.571v-1.166h-4.571v1.166zm10.286 5.833v4.374c0 .402-.141.744-.42 1.03-.28.285-.616.43-1.009.43h-13.144c-.393 0-.729-.145-1.009-.43s-.419-.628-.419-1.03v-4.374h6v1.459c0 .158.056.293.169.409a.545.545 0 0 0 .402.173h2.855a.545.545 0 0 0 .402-.173.565.565 0 0 0 .17-.409v-1.459h6.003zm-6.857 0v1.167h-2.285v-1.167h2.285zm6.857-4.373v3.498h-16v-3.498c0-.403.14-.745.419-1.032.28-.284.616-.429 1.009-.429h3.144v-1.457c0-.243.083-.449.25-.62a.822.822 0 0 1 .606-.255h5.144c.237 0 .439.086.606.255a.857.857 0 0 1 .249.62v1.457h3.145c.393 0 .729.145 1.009.429.278.287.419.63.419 1.032z"></path></svg>
              &nbsp; &nbsp; <span className="highlight">Deutsche Bank, +2</span>
            </div>
          </div>
          <div className="info">
            <div className="cursor">
              CloudMargin raises $15M in series B Funding <span className="grey">
              on FinSMEs</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section4 () {
  return (
    <div className="section temp">
      <div className="newsContainer">
        <div className="con">
          <h2 className="title margin">Hard Fork &gt;</h2>
          <div className="background background1">
          <div className="gradient3"></div>
          <div className="text2">
            <h5 className="insights2">Most Popular</h5>
            <h2 className="marginBottom">Wirecard left a $30B in European fintech — can Dutch startups fill the gap?</h2>
            <div className="extras">
              <span className="hover">David Canellis &#183;</span> &nbsp; &nbsp; 13 minutes ago
            </div>
          </div>
        </div>
        <div className="listHead">
          <img src={icon1} alt="icon" className="icon"></img>
          <h5 className="myh52">Latest</h5>
          <h4 className="myh42">Satoshi Nakaboto: "Iran to auction surplus energy to Bitcoin miners"</h4>
        </div>
        <ul>
          <li><h4 className="li">Tesla stocks dives after Elon Musk cools 'Battery Day' hype</h4></li>
          <li><h4 className="li">Satoshi Nakaboto: 'Bitcoin plunges as stock market continues downward trend'</h4></li>
          <li><h4 className="li">Satoshi Nakaboto: 'Norwegian government indirectly owns hundreds of Bitcoin'</h4></li>
          <li><h4 className="li">Nikola stock collapses after founder Trevor Milton resigns over fraud allegations</h4></li>
          <li><h4 className="li">Satoshi Nakaboto: 'Number of Bitcoin ATMs surpasses 10,000 worldwide'</h4></li>
        </ul>
        </div>
        <div className="con">
          <h2 className="title margin">Apps &gt;</h2>
          <div className="background background2">
          <div className="gradient3"></div>
          <div className="text2">
            <h5 className="insights2">Most Popular</h5>
            <h2 className="marginBottom">Google Maps now has a COVID-19 layer because 2020</h2>
            <div className="extras">
              <span className="hover">Napier Lopez &#183;</span> &nbsp; &nbsp; 12 hours ago
            </div>
          </div>
        </div>
        <div className="listHead">
          <img src={icon2} alt="icon" className="icon"></img>
          <h5 className="myh52">Latest</h5>
          <h4 className="myh42">Todoist takes a shot at Trello with Kanban-style 'boards'</h4>
        </div>
        <ul>
          <li><h4 className="li">Instagram Reels are now double the length and easier to edit</h4></li>
          <li><h4 className="li">Google Maps now has a COVID-19 layer because 2020</h4></li>
          <li><h4 className="li">PSA: Microsoft Edge comes to Linux next month</h4></li>
          <li><h4 className="li">iOS14: How to use the new pin, mention and reply features in Messages</h4></li>
          <li><h4 className="li">WhatsApp is working on self-destructing pics and videos</h4></li>
        </ul>
        </div>
        <div className="con">
          <h2 className="title margin">Gear &gt;</h2>
          <div className="background background3">
          <div className="gradient3"></div>
          <div className="text2">
            <h5 className="insights2">Most Popular</h5>
            <h2 className="marginBottom">Report: Apple's iPhone12 event will probably be on October 13</h2>
            <div className="extras">
              <span className="hover">Napier Lopez &#183;</span> &nbsp; &nbsp; 9 hours ago
            </div>
          </div>
        </div>
        <div className="listHead">
          <img src={icon3} alt="icon" className="icon"></img>
          <h5 className="myh52">Latest</h5>
          <h4 className="myh42">Why were the PS5 and Xbox Series X pre-orders so chaotic?</h4>
        </div>
        <ul>
          <li><h4 className="li">Report: Apples iPhone12 event will probably be on October 13</h4></li>
          <li><h4 className="li">Pixel 5 leaks: everything we know so far</h4></li>
          <li><h4 className="li">Apple finally figured out what the f*** its watch is for</h4></li>
          <li><h4 className="li">Royole's brand new FlexPai 2 does nothing to convince me of foldables</h4></li>
          <li><h4 className="li">KEF updates its legendary LS50 speakers distortion-killing 'metamaterials'</h4></li>
        </ul>
        </div>
        <div className="con">
          <h2 className="title margin">Tech &gt;</h2>
          <div className="background background4">
          <div className="gradient3"></div>
          <div className="text2">
            <h5 className="insights2">Most Popular</h5>
            <h2 className="marginBottom">6 practical tricks every Python developer should have</h2>
            <div className="extras">
              <span className="hover">Ben Dickson &#183;</span> &nbsp; &nbsp; 18 hours ago
            </div>
          </div>
        </div>
        <div className="listHead">
          <img src={icon4} alt="icon" className="icon"></img>
          <h5 className="myh52">Latest</h5>
          <h4 className="myh42">Meet the designer who made a chatbot to flag workplace racism</h4>
        </div>
        <ul>
          <li><h4 className="li">How to hide pages of apps in iOS14</h4></li>
          <li><h4 className="li">How UX designers can save us from our own passwords</h4></li>
          <li><h4 className="li">6 practical tricks every Python developer should have</h4></li>
          <li><h4 className="li">How giving product features away for free helped my startup grow during COVID-19</h4></li>
          <li><h4 className="li">The worst technology company in the world</h4></li>
        </ul>
        </div>
        <div className="con">
          <h2 className="title margin">Creative &gt;</h2>
          <div className="background background5">
          <div className="gradient3"></div>
          <div className="text2">
            <h5 className="insights2">Most Popular</h5>
            <h2 className="marginBottom">This real-world multiplayer game lets you spend other people's money — really</h2>
            <div className="extras">
              <span className="hover">Mix &#183;</span> &nbsp; &nbsp; 9 days ago
            </div>
          </div>
        </div>
        <div className="listHead">
          <img src={icon5} alt="icon" className="icon"></img>
          <h5 className="myh52">Latest</h5>
          <h4 className="myh42">Warzone is infinitely more fun without vehicles (even though it's just a bug)</h4>
        </div>
        <ul>
          <li><h4 className="li">The Winamp Skin Museum is a beautiful homage to an iconic piece of software</h4></li>
          <li><h4 className="li">Why skin tone modifiers don't work, explained by an emoji historian</h4></li>
          <li><h4 className="li">Why you need Design Thinking and Proofs of Concept to level up your business</h4></li>
          <li><h4 className="li">How an AI graphic designer convinced clients it was human</h4></li>
          <li><h4 className="li">This illustrator celebrates analog photography by drawing classic film cameras</h4></li>
        </ul>
        </div>
        <div className="con">
          <h2 className="title margin">Podium &gt;</h2>
          <div className="background background6">
          <div className="gradient3"></div>
          <div className="text2">
            <h5 className="insights2">Most Popular</h5>
            <h2 className="marginBottom">6 big data blunders businesses should avoid</h2>
            <div className="extras">
              <span className="hover">Pratip Biswas &#183;</span> &nbsp; &nbsp; 5 days ago
            </div>
          </div>
        </div>
        <div className="listHead">
          <img src={icon6} alt="icon" className="icon"></img>
          <h5 className="myh52">Latest</h5>
          <h4 className="myh42">The AI landscape is shifting from data to 'knowledge'. Here's why that matters</h4>
        </div>
        <ul>
          <li><h4 className="li">Disruptive fintech is our best bet to economic recovery post COVID-19</h4></li>
          <li><h4 className="li">Tech in Latin America: An entrepreneur's guide to June's startup news</h4></li>
          <li><h4 className="li">4 ways to improve your latest product's landing page to guarantee conversion</h4></li>
          <li><h4 className="li">Why our laws can't protect me from my digital stalker</h4></li>
          <li><h4 className="li">Tech in Latin America: An entrepreneur's guide to June's startup news</h4></li>
        </ul>
        </div>
        <div className="con">
          <h2 className="title margin">Insights &gt;</h2>
          <div className="background background7">
          <div className="gradient3"></div>
          <div className="text2">
            <h5 className="insights2">Most Popular</h5>
            <h2 className="marginBottom">3 productivity tips on working from home — straight from a distraction expert</h2>
            <div className="extras">
              <span className="hover">Mix &#183;</span> &nbsp; &nbsp; 18 hours ago
            </div>
          </div>
        </div>
        <div className="listHead">
          <img src={icon7} alt="icon" className="icon"></img>
          <h5 className="myh52">Latest</h5>
          <h4 className="myh42">Wirecard left a $30B hole in European fintech — can Dutch startups fill the gap?</h4>
        </div>
        <ul>
          <li><h4 className="li">Why digital events should be part of your marketing mix</h4></li>
          <li><h4 className="li">California bans sale of (new) gas vehicles starting 2035</h4></li>
          <li><h4 className="li">3 productivity tips on working from home — straight from a distraction expert</h4></li>
          <li><h4 className="li">Satoshi Nakaboto: "Iran to auction surplus energy to Bitcoin miners"</h4></li>
          <li><h4 className="li">4 ways to use psychology to win your competition's customers</h4></li>
        </ul>
        </div>
        <div className="con">
          <h2 className="title margin">Launch &gt;</h2>
          <div className="background background8">
          <div className="gradient3"></div>
          <div className="text2">
            <h5 className="insights2">Most Popular</h5>
            <h2 className="marginBottom">Lucid unveils the Air, its luxury EV with up to 517-miles of range costing as much as £169K</h2>
            <div className="extras">
              <span className="hover">Matthew Beedham &#183;</span> &nbsp; &nbsp; 14 days ago
            </div>
          </div>
        </div>
        <div className="listHead">
          <img src={icon8} alt="icon" className="icon"></img>
          <h5 className="myh52">Latest</h5>
          <h4 className="myh42">Say hello to SHIFT, our new publication about the future of mobility tech</h4>
        </div>
        <ul>
          <li><h4 className="li">How can you watch BMW unveil its hotly anticipated iX3 EV next week</h4></li>
          <li><h4 className="li">Facebook takes another stab at enabling 'free' mobile web access with its new Discover app</h4></li>
          <li><h4 className="li">Facebook-backed Reliance Jio pilots basic grocery ordering service on WhatsApp India</h4></li>
          <li><h4 className="li">Google's coronavirus information site is now live</h4></li>
          <li><h4 className="li">The hyper-compact Microlino 2.0 EV is almost too cute for words</h4></li>
        </ul>
        </div>
        <div className="con">
          <h2 className="title margin">Distract &gt;</h2>
          <div className="background background9">
          <div className="gradient3"></div>
          <div className="text2">
            <h5 className="insights2">Most Popular</h5>
            <h2 className="marginBottom">The Lucid Air might have just beat Tesla's Plaid Model S round Laguna Seca</h2>
            <div className="extras">
              <span className="hover">Matthew Beedham &#183;</span> &nbsp; &nbsp; 5 days ago
            </div>
          </div>
        </div>
        <div className="listHead">
          <img src={icon9} alt="icon" className="icon"></img>
          <h5 className="myh52">Latest</h5>
          <h4 className="myh42">Dear developers, it's time to stop making the same sports games over and over</h4>
        </div>
        <ul>
          <li><h4 className="li">NBA 2K21 review: more of a patch for NBA 2K20 than a new game</h4></li>
          <li><h4 className="li">How to enjoy movies, games and more with friends online while social distancing</h4></li>
          <li><h4 className="li">Watch Ken Block tear it up in an all-electric Rallycross car</h4></li>
          <li><h4 className="li">Try to spend Bill Gates' $116B fortune in this online shopping game</h4></li>
          <li><h4 className="li">How to use Twitch's new Watch Party feature to binge shows with viewers</h4></li>
        </ul>
        </div>
      </div>
    </div>
  );
}

function Section5 () {
  return (
    <div className="section">
      <div className="paddingBottom"><span className="title">Latest deals &gt;</span></div>
      <div className="newsContainer">
        <div className="news">
          <div className="deal deal1"></div>
          <span className="flexText">Dashlane Password Manager Premium Plan: 1-Yr Subscription</span>
          <div><span className="oldPrice">$59</span> <span className="newPrice"> $29.99 </span></div>
        </div>
        <div className="news">
          <div className="deal deal2"></div>
          <span className="flexText">Degoo Premium: Lifetime 10TB Backup Plan</span>
          <div><span className="oldPrice">$3600</span> <span className="newPrice"> $99.99 </span></div>
        </div>
        <div className="news">
          <div className="deal deal3"></div>
          <span className="flexText">The Ultimate Financial Accounting & CPA Certification Training Bundle</span>
          <div><span className="oldPrice">$1592</span> <span className="newPrice"> $44.99 </span></div>
        </div>
        <div className="news">
          <div className="deal deal4"></div>
          <span className="flexText">The Ultimate Electrical Power Engineer Preparation Program Bundle</span>
          <div><span className="oldPrice">$1000</span> <span className="newPrice"> $25 </span></div>
        </div>
        <div className="news">
          <div className="deal deal5"></div>
          <span className="flexText">The Deep Learning & Data Analysis Certification Bundle</span>
          <div><span className="oldPrice">$1600</span> <span className="newPrice"> $39.99 </span></div>
        </div>
        <div className="news">
          <div className="deal deal6"></div>
          <span className="flexText">KeepSolid VPN Unlimited: Lifetime Subscription</span>
          <div><span className="oldPrice">$199</span> <span className="newPrice"> $39 </span></div>
        </div>
        <div className="news">
          <div className="deal deal7"></div>
          <span className="flexText">FastestVPN: Lifetime Subscription (5 devices)</span>
          <div><span className="oldPrice">$600</span> <span className="newPrice"> $19.99 </span></div>
        </div>
        <div className="news">
          <div className="deal deal8"></div>
          <span className="flexText">LongTailPro: One Time (10,000 Keyword Lookups, No Expiry, No Reset)</span>
          <div><span className="oldPrice">$1500</span> <span className="newPrice"> $49.99 </span></div>
        </div>        
      </div>
    </div>
  );
}

function Footer () {
  return (
    <footer className="footer">
      <div className="backgroundFill">
        <div className="wrapper">
          <ul className="clickables">
            <li className="click">
              <svg className="whitened" width="16" height="16" viewBox="-7.5 992.5 16 16" id="facebook--dark" x="256" y="256" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 993.5v14c0 .547-.453 1-1 1h-4v-6.219h2l.336-2.305H3.5v-1.812c0-.656.336-1.031 1-1.031H6v-2.078s-.672-.109-1.641-.109c-2.195 0-3.305 1.219-3.305 3.039v1.992h-2v2.305h2v6.219H-6.5c-.547 0-1-.453-1-1v-14c0-.547.453-1 1-1h14c.547-.001 1 .452 1 .999z"></path></svg>
            </li>
            <li className="click">
              <svg className="whitened" width="16" height="16" viewBox="-7.5 992.5 16 16" id="twitter--dark" x="1008" y="1008" xmlns="http://www.w3.org/2000/svg"><path d="M6.867 997.234v.43c0 4.336-3.297 9.336-9.328 9.336-1.852 0-3.594-.406-5.039-1.336.258.039.516.055.781.055 1.531 0 2.961-.664 4.07-1.555-1.422-.016-2.648-.984-3.055-2.281a3.227 3.227 0 0 0 1.484-.055 3.28 3.28 0 0 1-2.633-3.219v-.039c.445.242.945.391 1.484.406a3.266 3.266 0 0 1-1.469-2.719c0-.609.172-1.109.445-1.594 1.633 1.984 4.039 3.219 6.758 3.367a3.4 3.4 0 0 1-.07-.758 3.267 3.267 0 0 1 3.273-3.273c.945 0 1.797.406 2.414 1.031a6.571 6.571 0 0 0 2.07-.797 3.252 3.252 0 0 1-1.445 1.82 6.42 6.42 0 0 0 1.891-.523 6.587 6.587 0 0 1-1.631 1.704z"></path></svg>
            </li>
            <li className="click">
              <svg className="whitened" width="16" height="16" viewBox="-7.5 992.5 16 16" id="youtube--dark" x="1264" y="1264" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 1000.5c0 5.664 0 5.664-8 5.664s-8 0-8-5.664 0-5.664 8-5.664 8 0 8 5.664zm-5 0l-5-3v6l5-3z"></path></svg>
            </li>
            <li className="click">
              <svg className="whitened" width="16" height="16" viewBox="-7.5 992.5 16 16" id="instagram--dark" x="400" y="400" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 994.836v11.328a2.337 2.337 0 0 1-2.336 2.336H-5.164a2.337 2.337 0 0 1-2.336-2.336v-11.328a2.337 2.337 0 0 1 2.336-2.336H6.164a2.337 2.337 0 0 1 2.336 2.336zM6.836 999.5H5.062c.07.32.102.656.102 1 0 2.578-2.086 4.664-4.664 4.664s-4.664-2.086-4.664-4.664c0-.344.031-.68.102-1h-1.773v7c0 .188.148.336.336.336h12a.333.333 0 0 0 .336-.336v-7zm-9.336 1a3.001 3.001 0 0 0 6 0 3.001 3.001 0 0 0-6 0zm9.336-6a.333.333 0 0 0-.336-.336h-2a.333.333 0 0 0-.336.336v2c0 .188.148.336.336.336h2a.333.333 0 0 0 .336-.336v-2z"></path></svg>
            </li>
            <li className="click">
              <svg className="whitened" width="16" height="16" viewBox="-7.5 992.5 16 16" id="pinterest--dark" x="656" y="656" xmlns="http://www.w3.org/2000/svg"><path d="M6.688 997.759c0 3.609-2.001 6.297-4.946 6.297-1 0-1.93-.516-2.258-1.125 0 0-.523 2.109-.648 2.516-.391 1.445-1.555 2.891-1.649 3-.078.094-.203.055-.227-.038-.016-.188-.312-2.017.039-3.501.164-.742 1.164-5 1.164-5s-.273-.594-.273-1.461c0-1.376.773-2.376 1.757-2.376.836 0 1.243.617 1.243 1.376 0 .835-.539 2.094-.821 3.258-.219.984.5 1.781 1.469 1.781 1.742 0 2.906-2.242 2.906-4.891 0-2.024-1.352-3.524-3.813-3.524-2.796 0-4.539 2.079-4.539 4.391 0 .82.243 1.376.61 1.821.164.203.188.273.132.5-.039.18-.148.586-.188.733-.055.243-.242.321-.461.243-1.281-.539-1.875-1.945-1.875-3.516 0-2.609 2.188-5.743 6.555-5.743 3.526 0 5.823 2.54 5.823 5.259z"></path></svg>
            </li>
            <li className="click">
              <svg className="whitened" width="16" height="16" viewBox="-7.5 992.5 16 16" id="rss--dark" x="800" y="800" xmlns="http://www.w3.org/2000/svg"><circle cx="-5.5" cy="1006.5" r="2"></circle><path d="M-7.5 995.5c7.2 0 13 5.8 13 13h3c0-8.8-7.2-16-16-16v3zm0 3v3c3.9 0 7 3.101 7 7h3c0-5.5-4.5-10-10-10z"></path></svg>
            </li>
            <li className="click">
              <svg className="whitened" width="16" height="16" viewBox="-7.5 992.5 16 16" id="mail--dark" x="560" y="560" xmlns="http://www.w3.org/2000/svg"><path d="M.5 1001.5l-8-6c0-.555.446-1 1-1h14c.554 0 1 .445 1 1l-8 6zm0 1.798l8-6.001v8.203c0 .555-.446 1-1 1h-14c-.554 0-1-.445-1-1v-8.203l8 6.001z"></path></svg>
            </li>
          </ul>
          <ul className="menu">
            <li>Events</li>
            <li>About</li>
            <li>Advertise</li>
            <li>Jobs</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div class="legal">
        TNW &#169; 2006-2020 The Next Web B.V. Made with &lt;3 in Amsterdam. Powered by Stackpath
      </div>
    </footer>
  );
}

export default App;



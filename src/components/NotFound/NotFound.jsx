import './NotFound.css';

const NotFound = () => {
    return (
  <div className="card animate__animated animate__fadeIn">
  <div>
  <div className="starsec"></div>
  <div className="starthird"></div>
  <div className="starfourth"></div>
  <div className="starfifth"></div>
</div>

<div className="lamp__wrap">
  <div className="lamp">
    <div className="cable"></div>
    <div className="cover"></div>
    <div className="in-cover">
      <div className="bulb"></div>
    </div>
    <div className="light"></div>
  </div>
</div>
<section className="error">
  <div className="error__content">
    <div className="error__message message">
      <h1 className="message__title">Page Not Found</h1>
      <p className="message__text">Sorry, the page you were looking for cannot be found here. The link you followed may be broken or no longer exists.</p>
    </div>
  </div>

</section>
      </div>
    )
  }
  
  export default NotFound
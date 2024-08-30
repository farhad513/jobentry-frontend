/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

const Demo = () => {
  return (
    <div>
      <div className="container-xxl py-5 bg-dark page-header mb-5">
        <div className="container my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Job Detail
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>

              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Job Detail
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
  <div className="container">
    <div className="row gy-5 gx-4">
      <div className="col-lg-8">
        <div className="d-flex align-items-center mb-5">
          {/* <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-2.jpg" alt style={{width: 80, height: 80}} /> */}
          <div className="text-start ps-4">
            <h3 className="mb-3">Marketing Manager</h3>
            <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-primary me-2" />New York, USA</span>
            <span className="text-truncate me-3"><i className="far fa-clock text-primary me-2" />Full Time</span>
            <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2" />$123 - $456</span>
          </div>
        </div>
        <div className="mb-5">
          <h4 className="mb-3">Job description</h4>
          <p>Dolor justo tempor duo ipsum accusam rebum gubergren erat. Elitr stet dolor vero clita labore gubergren. Kasd sed ipsum elitr clita rebum ut sea diam tempor. Sadipscing nonumy vero labore invidunt dolor sed, eirmod dolore amet aliquyam consetetur lorem, amet elitr clita et sed consetetur dolore accusam. Vero kasd nonumy justo rebum stet. Ipsum amet sed lorem sea magna. Rebum vero dolores dolores elitr vero dolores magna, stet sea sadipscing stet et. Est voluptua et sanctus at sanctus erat vero sed sed, amet duo no diam clita rebum duo, accusam tempor takimata clita stet nonumy rebum est invidunt stet, dolor.</p>
          <h4 className="mb-3">Responsibility</h4>
          <p>Magna et elitr diam sed lorem. Diam diam stet erat no est est. Accusam sed lorem stet voluptua sit sit at stet consetetur, takimata at diam kasd gubergren elitr dolor</p>
          <ul className="list-unstyled">
            <li><i className="fa fa-angle-right text-primary me-2" />Dolor justo tempor duo ipsum accusam</li>
            <li><i className="fa fa-angle-right text-primary me-2" />Elitr stet dolor vero clita labore gubergren</li>
            <li><i className="fa fa-angle-right text-primary me-2" />Rebum vero dolores dolores elitr</li>
            <li><i className="fa fa-angle-right text-primary me-2" />Est voluptua et sanctus at sanctus erat</li>
            <li><i className="fa fa-angle-right text-primary me-2" />Diam diam stet erat no est est</li>
          </ul>
          <h4 className="mb-3">Qualifications</h4>
          <p>Magna et elitr diam sed lorem. Diam diam stet erat no est est. Accusam sed lorem stet voluptua sit sit at stet consetetur, takimata at diam kasd gubergren elitr dolor</p>
          <ul className="list-unstyled">
            <li><i className="fa fa-angle-right text-primary me-2" />Dolor justo tempor duo ipsum accusam</li>
            <li><i className="fa fa-angle-right text-primary me-2" />Elitr stet dolor vero clita labore gubergren</li>
            <li><i className="fa fa-angle-right text-primary me-2" />Rebum vero dolores dolores elitr</li>
            <li><i className="fa fa-angle-right text-primary me-2" />Est voluptua et sanctus at sanctus erat</li>
            <li><i className="fa fa-angle-right text-primary me-2" />Diam diam stet erat no est est</li>
          </ul>
        </div>
        <div className>
          <h4 className="mb-4">Apply For The Job</h4>
          <form>
            <div className="row g-3">
              <div className="col-12 col-sm-6">
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="col-12 col-sm-6">
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="col-12 col-sm-6">
                <input type="text" className="form-control" placeholder="Portfolio Website" />
              </div>
              <div className="col-12 col-sm-6">
                <input type="file" className="form-control bg-white" />
              </div>
              <div className="col-12">
                <textarea className="form-control" rows={5} placeholder="Coverletter" defaultValue={""} />
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100" type="submit">Apply Now</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="bg-light rounded p-5 mb-4 wow slideInUp" data-wow-delay="0.1s">
          <h4 className="mb-4">Job Summery</h4>
          <p><i className="fa fa-angle-right text-primary me-2" />Published On: 01 Jan, 2045</p>
          <p><i className="fa fa-angle-right text-primary me-2" />Vacancy: 123 Position</p>
          <p><i className="fa fa-angle-right text-primary me-2" />Job Nature: Full Time</p>
          <p><i className="fa fa-angle-right text-primary me-2" />Salary: $123 - $456</p>
          <p><i className="fa fa-angle-right text-primary me-2" />Location: New York, USA</p>
          <p className="m-0"><i className="fa fa-angle-right text-primary me-2" />Date Line: 01 Jan, 2045</p>
        </div>
        <div className="bg-light rounded p-5 wow slideInUp" data-wow-delay="0.1s">
          <h4 className="mb-4">Company Detail</h4>
          <p className="m-0">Ipsum dolor ipsum accusam stet et et diam dolores, sed rebum sadipscing elitr vero dolores. Lorem dolore elitr justo et no gubergren sadipscing, ipsum et takimata aliquyam et rebum est ipsum lorem diam. Et lorem magna eirmod est et et sanctus et, kasd clita labore.</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Demo;

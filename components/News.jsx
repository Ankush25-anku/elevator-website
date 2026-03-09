export default function News() {
  return (
    <section className="news-section pt_120 pb_90">
      <div className="auto-container">
        <div className="sec-title centred mb_65">
          <span className="sub-title">
            UNO Safe Elevator - Elevating Safety & Innovation
          </span>
          <h2>
            latest elevator industry insights<span>.</span>
          </h2>
        </div>

        <div className="row clearfix">
          {/* News 1 */}
          <div className="col-lg-3 col-md-6 col-sm-12 news-block">
            <div
              className="news-block-one wow fadeInUp animated"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <a href="/blog-details">
                      <img src="/assets/images/news/news-1.jpg" alt="" />
                    </a>
                  </figure>

                  <div className="post-date">
                    <h3>19</h3>
                    <span>SEP</span>
                  </div>
                </div>

                <div className="lower-content">
                  <span className="category">Elevator Technology</span>

                  <h4>
                    <a href="/blog-details">
                      Smart elevator technologies transforming modern buildings
                    </a>
                  </h4>

                  <div className="link-box">
                    <a href="/blog-details">
                      <span>read more</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* News 2 */}
          <div className="col-lg-3 col-md-6 col-sm-12 news-block">
            <div
              className="news-block-one wow fadeInUp animated"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <a href="/blog-details">
                      <img src="/assets/images/news/news-2.jpg" alt="" />
                    </a>
                  </figure>

                  <div className="post-date">
                    <h3>13</h3>
                    <span>SEP</span>
                  </div>
                </div>

                <div className="lower-content">
                  <span className="category">Safety</span>

                  <h4>
                    <a href="/blog-details">
                      How modern elevators improve safety and efficiency in
                      high-rise buildings
                    </a>
                  </h4>

                  <div className="link-box">
                    <a href="/blog-details">
                      <span>read more</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* News 3 */}
          <div className="col-lg-3 col-md-6 col-sm-12 news-block">
            <div
              className="news-block-one wow fadeInUp animated"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <a href="/blog-details">
                      <img src="/assets/images/news/news-3.jpg" alt="" />
                    </a>
                  </figure>

                  <div className="post-date">
                    <h3>12</h3>
                    <span>SEP</span>
                  </div>
                </div>

                <div className="lower-content">
                  <span className="category">Maintenance</span>

                  <h4>
                    <a href="/blog-details">
                      Essential elevator maintenance tips for long-term
                      performance
                    </a>
                  </h4>

                  <div className="link-box">
                    <a href="/blog-details">
                      <span>read more</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* News 4 */}
          <div className="col-lg-3 col-md-6 col-sm-12 news-block">
            <div
              className="news-block-one wow fadeInUp animated"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <a href="/blog-details">
                      <img src="/assets/images/news/news-4.jpg" alt="" />
                    </a>
                  </figure>

                  <div className="post-date">
                    <h3>08</h3>
                    <span>SEP</span>
                  </div>
                </div>

                <div className="lower-content">
                  <span className="category">Innovation</span>

                  <h4>
                    <a href="/blog-details">
                      The future of smart elevators in modern residential and
                      commercial spaces
                    </a>
                  </h4>

                  <div className="link-box">
                    <a href="/blog-details">
                      <span>read more</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

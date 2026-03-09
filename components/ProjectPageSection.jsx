export default function ProjectPageSection() {
  return (
    <section className="project-page-section pt_120 pb_120">
      <div className="auto-container">
        <div className="sortable-masonry">

          <div className="filters mb_55">
            <ul className="filter-tabs filter-btns">
              <li className="active filter" data-role="button" data-filter=".all">All</li>
              <li className="filter" data-role="button" data-filter=".analytis">buildings</li>
              <li className="filter" data-role="button" data-filter=".finance">commercial</li>
              <li className="filter" data-role="button" data-filter=".business">residential</li>
              <li className="filter" data-role="button" data-filter=".corporate">factories</li>
            </ul>
          </div>

          <div className="items-container row clearfix">

            {/* Project Item */}
            <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all product finance business">
              <div className="project-block-one">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="assets/images/project/project-1.jpg" alt="" />
                  </figure>
                  <div className="content-box">
                    <h3><a href="index.html">tunnel repair</a></h3>
                    <div className="link-box">
                      <a href="index.html"><span>view details</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all analytis business corporate">
              <div className="project-block-one">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="assets/images/project/project-2.jpg" alt="" />
                  </figure>
                  <div className="content-box">
                    <h3><a href="index.html">surface digging</a></h3>
                    <div className="link-box">
                      <a href="index.html"><span>view details</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all product finance corporate">
              <div className="project-block-one">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="assets/images/project/project-3.jpg" alt="" />
                  </figure>
                  <div className="content-box">
                    <h3><a href="index.html">architecture plan</a></h3>
                    <div className="link-box">
                      <a href="index.html"><span>view details</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all analytis finance business">
              <div className="project-block-one">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="assets/images/project/project-8.jpg" alt="" />
                  </figure>
                  <div className="content-box">
                    <h3><a href="index.html">Urban Heights</a></h3>
                    <div className="link-box">
                      <a href="index.html"><span>view details</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all business finance corporate">
              <div className="project-block-one">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="assets/images/project/project-9.jpg" alt="" />
                  </figure>
                  <div className="content-box">
                    <h3><a href="index.html">The green Foundry</a></h3>
                    <div className="link-box">
                      <a href="index.html"><span>view details</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all analytis business corporate">
              <div className="project-block-one">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="assets/images/project/project-10.jpg" alt="" />
                  </figure>
                  <div className="content-box">
                    <h3><a href="index.html">The Artisan Lofts</a></h3>
                    <div className="link-box">
                      <a href="index.html"><span>view details</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all analytis finance business">
              <div className="project-block-one">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="assets/images/project/project-11.jpg" alt="" />
                  </figure>
                  <div className="content-box">
                    <h3><a href="index.html">Bridgewater horizon</a></h3>
                    <div className="link-box">
                      <a href="index.html"><span>view details</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all business finance corporate">
              <div className="project-block-one">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="assets/images/project/project-12.jpg" alt="" />
                  </figure>
                  <div className="content-box">
                    <h3><a href="index.html">Harmony Estates</a></h3>
                    <div className="link-box">
                      <a href="index.html"><span>view details</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 masonry-item small-column all analytis business corporate">
              <div className="project-block-one">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="assets/images/project/project-13.jpg" alt="" />
                  </figure>
                  <div className="content-box">
                    <h3><a href="index.html">Skyline Vista</a></h3>
                    <div className="link-box">
                      <a href="index.html"><span>view details</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="pagination-wrapper centred">
          <ul className="pagination">
            <li><a href="projects.html" className="current">1</a></li>
            <li><a href="projects.html">2</a></li>
            <li><a href="projects.html"><i className="icon-5"></i></a></li>
          </ul>
        </div>

      </div>
    </section>
  );
}
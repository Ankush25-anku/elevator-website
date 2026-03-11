"use client";
import { useState } from "react";
import "./BlogCardsSection.css";

export default function BlogCardsSection() {
  const [page, setPage] = useState(1);

  const blogs = [
    // ===== 14 BLOG ITEMS =====
    { id: 1, title: "South India's Most Trusted Lift AMC Experts - Unosafe", img: "/assets/blog1.jpeg", date: "16", },
    { id: 2, title: "Elevator Services in Chennai", img: "/assets/blog2.jpeg", date: "13", },
    { id: 3, title: "Home Residential Elevators Price, A Complete Guide by Unosafe", img: "/assets/blog3.jpeg", date: "08", },
    { id: 4, title: "How Elevators Improve Building Efficiency", img: "/assets/blog4.jpeg", date: "05", },
    { id: 5, title: "Top Elevator Safety Tips", img: "/assets/blog5.jpeg", date: "02", },
    { id: 6, title: "Commercial Lift Maintenance Guide", img: "/assets/blog6.jpeg", date: "28", },
    { id: 7, title: "Modern Elevator Design Trends", img: "/assets/blog7.jpeg", date: "25", },
    { id: 8, title: "Choosing the Right Home Lift", img: "/assets/blog8.jpeg", date: "21", },
    { id: 9, title: "Passenger vs Freight Elevators", img: "/assets/blog9.jpeg", date: "18", },
    { id: 10, title: "Elevator Installation Process Explained", img: "/assets/blog10.jpeg", date: "14" },
{ id: 11, title: "Energy Efficient Elevator Systems for Modern Buildings", img: "/assets/blog11.jpeg", date: "11" },
{ id: 12, title: "Complete Guide to Elevator Modernization & Upgrades", img: "/assets/blog12.jpeg", date: "07" },

    // Page 2 (5 cards)
    { id: 10, title: "Elevator Installation Process", img: "/assets/blog13.jpeg", date: "14", },
    { id: 11, title: "Energy Efficient Elevator Systems", img: "/assets/blog14.jpeg", date: "11", },
    { id: 12, title: "Guide to Elevator Modernization", img: "/assets/blog15.jpeg", date: "07", },
    { id: 13, title: "Hospital Elevator Requirements", img: "/assets/blog16.jpeg", date: "04", },
    { id: 14, title: "Future of Smart Elevators", img: "/assets/blog17.jpeg", date: "01", },
  ];

  const page1 = blogs.slice(0, 9);
  const page2 = blogs.slice(9, 14);

  const visibleBlogs = page === 1 ? page1 : page2;

  return (
    <section className="ublog_section">
      <div className="ublog_container">

        <div className="ublog_grid">
          {visibleBlogs.map((blog) => (
            <article key={blog.id} className="ublog_card">
              <div className="ublog_imageWrap">
                <img src={blog.img} alt="blog" className="ublog_image" />
                <div className="ublog_date">
                  <span>{blog.date}</span>
                  <small>OCT</small>
                  <small>25</small>
                </div>
              </div>

              <div className="ublog_content">
                <h3 className="ublog_title">{blog.title}</h3>
                <p className="ublog_desc">
                  Reliable elevator solutions, installation, maintenance &
                  modernization services...
                </p>

                {/* <a href="#" className="ublog_readmore">
                  Read More <span>→</span>
                </a> */}
              </div>
            </article>
          ))}
        </div>

        {/* ===== PAGINATION ===== */}
        <div className="ublog_pagination">
          <button
            className={`ublog_pageBtn ${page === 1 ? "active" : ""}`}
            onClick={() => setPage(1)}
          >
            1
          </button>
          <button
            className={`ublog_pageBtn ${page === 2 ? "active" : ""}`}
            onClick={() => setPage(2)}
          >
            2
          </button>
        </div>

      </div>
    </section>
  );
}
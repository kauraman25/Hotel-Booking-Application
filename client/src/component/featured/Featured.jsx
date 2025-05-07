import React from "react";
import "./featured.css";
import useFetch from "../../hooks/useFetch";
function Featured() {
  const { data, loading} = useFetch(
    "/api/hotels/countByCity/?cities=Berlin,Bharatpur,London"
  );
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://assets.cntraveller.in/photos/633138af67d00ef33fe822fd/16:9/w_2580,c_limit/view-of-the-liffey-from-liberty-hall-dublin-ireland-conde-nast-traveller-4feb16-Tara-Morgan.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[0]} Properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://i0.wp.com/allaroundireland.ie/wp/wp-content/uploads/2025/03/Waterford-City.jpg?ssl=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Bharatpur</h1>
              <h2>{data[1]} Properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZHGP1SNISBUXYGWc3_CsmoKvzgIxkIHegIw&s"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>London</h1>
              <h2>{data[2]} Properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Featured;

import React from "react";
import "./styles.css";
import { links } from "../../assets/images-links";
function Filter() {
    const [selectedFilter,setSelectedFilter] = React.useState();
  return (
    <div className="Filter-array">
      {links.map((value, idx) => {
        return (
          <div key={idx} className={` Filter-array-element ${idx === selectedFilter ? "selected-array-element" : ""}`} onClick={()=>{setSelectedFilter(idx);}}>
            <img src={value.imgSrc} alt="NA" className="Filter-array-element-img" />
            <p className="Filter-array-element-lebel">{value.label}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Filter;

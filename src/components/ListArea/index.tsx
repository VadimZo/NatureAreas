import React from "react";
import { AreaProps, areas } from "../../constants";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function ListArea() {
  return (
    <>
      {areas.map((area, i) => {
        return <Area key={i} {...area} />;
      })}
    </>
  );
}

const Area = ({ title, items }: AreaProps) => {
  const location = useLocation();
  return (
    <div>
      <h2 data-aos-once="true" data-aos="fade-right">
        {title}
      </h2>
      <ol data-aos-once="true" data-aos="fade-right" data-aos-delay="100">
        {items.map((item, index) => {
          return (
            <li key={index}>
              {!item.images ? (
                item.name
              ) : (
                <Link
                  to={`/modal/area`}
                  state={{ backgroundLocation: location, areaInfo: item }}
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

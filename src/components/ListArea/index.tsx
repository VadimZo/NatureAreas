import React from "react";
import { AreaProps, areas } from "../../constants";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function ListArea() {
  return (
    <>
      {areas.map((area) => {
        return <Area {...area} />;
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
        {items.map((item) => {
          return (
            <li>
              <Link to="/modal/1" state={{ backgroundLocation: location }}>
                {item}
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

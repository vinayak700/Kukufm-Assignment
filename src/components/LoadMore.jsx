"use client";

import { fetchData } from "@/app/actions";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import Carousel from "./Carousel";

let page = 2;

const LoadMore = ({ hasMorePages }) => {
  const { ref, inView } = useInView();
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(hasMorePages);

  useEffect(() => {
    if (!hasMore) return;
    if (inView) {
      fetchData(2).then((res) => {
        const newData = res.items.filter(
          (item) => Array.isArray(item.shows) && item.shows.length > 0
        );
        setData((prevData) => [...prevData, ...newData]);
        setHasMore(res.has_more);
        page++;
      });
    }
  }, [inView, data]);

  return (
    <>
      <section>
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {data?.map((item, index) => (
            <Carousel key={index} slide={item} />
          ))}
        </div>
        <div ref={ref} className="loading-container">
          <Image
            src="/spinner.gif"
            alt="Loading..."
            width={56}
            height={56}
            className="spinner"
          />
          <span className="loader"></span>
        </div>
      </section>
    </>
  );
};

export default LoadMore;

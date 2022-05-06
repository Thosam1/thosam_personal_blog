import { GetServerSideProps } from "next";
import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (contex) => {
  const response = await fetch("https://api.spacexdata.com/v4/capsule");
  const capsules = await response.json();

  const fields = capsules.map((capsule) => ({
    loc: `https://www.capsules.com/capsule/${capsule.id}`,
    lastmod: new Date().toISOString(),
  }));
  return getServerSideSitemap(context, fields);
};

// no particular use
export default function Site() {}

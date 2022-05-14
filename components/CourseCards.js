import { SimpleGrid } from "@chakra-ui/react";
import { MotionBox } from "./MotionBox";
import CourseCard from "./CourseCard";

import { FadeInWrapper } from "./FadeInWrapper";

// course arrays
import BA1List from "../data/portfolio/education/BA1List";
import BA2List from "../data/portfolio/education/BA2List";
import BA3List from "../data/portfolio/education/BA3List";
import BA4List from "../data/portfolio/education/BA4List";

const correctList = (semester) => {
  switch (semester) {
    case "1":
      return BA1List();
    case "2":
      return BA2List();
    case "3":
      return BA3List();
    case "4":
      return BA4List();
    default:
      return BA1List();
  }
};

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const CourseCards = ({ semester }) => {
  const array = correctList(semester);

  return (
    <MotionBox variants={container} initial="hidden" animate="visible">
      <SimpleGrid columns={[1, 1, 2]} spacing={4}>
        {array.map((object, index) => (
          <FadeInWrapper>
            <CourseCard
              key={index}
              name={object.name}
              code={object.code}
              link={object.link}
              credits={object.credits}
              type={object.type}
            />
          </FadeInWrapper>
        ))}
      </SimpleGrid>
    </MotionBox>
  );
};

export default CourseCards;

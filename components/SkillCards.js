import { SimpleGrid, Container } from "@chakra-ui/react";
import { MotionBox } from "./MotionBox";
import skillsList from "../data/portfolio/skills/skillsList";
import SkillCard from "./SkillCard";

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

const SkillCards = () => {
  return (
      <MotionBox variants={container} initial="hidden" animate="visible">
        <SimpleGrid columns={[1, 1, 2]} spacing={4}>
          {skillsList().map((tool, index) => (
            <SkillCard
              key={index}
              name={tool.name}
              description={tool.description}
              image={tool.image}
            //   link={tool.link}
            />
          ))}
        </SimpleGrid>
      </MotionBox>
  );
};

export default SkillCards;

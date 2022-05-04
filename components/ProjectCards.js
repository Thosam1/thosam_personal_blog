import { SimpleGrid } from "@chakra-ui/react";

// for animation
import { MotionBox } from "./MotionBox";

// getting array containing all projects
import projectsList from "../data/portfolio/projectsList";

// our component
import ProjectCard from "./ProjectCard";

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

const ProjectCards = ({ featured }) => {
  
    return (
      <MotionBox variants={container} initial="hidden" animate="visible">
        <SimpleGrid columns={[1, 1, 2]} spacing={4}>
          {projectsList().map((object, index) => {
            // because we also need to pass in a unique key prop

            if (featured && object.featured == false) {
              return;
            }
            return (
              <ProjectCard
                key={index}
                title={object.title}
                description={object.description}
                githubLink={object.githubLink}
                demoLink={object.demoLink}
                domainName={object.domainName}
                tags={object.tags}
                images={object.images}
                //   link={tool.link}
              />
            );
          })}
        </SimpleGrid>
      </MotionBox>
    );
};

export default ProjectCards;

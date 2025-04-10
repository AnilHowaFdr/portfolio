import WorkingProcessItems from "./WorkingProcessItems";

const WorkingProcess = () => {
  return (
    <section className="py-20 dark:bg-gray-950">
      <div className="container px-4 lg:px-8">
        <h2 className="Heading pb-3 border-b-2 border-secondary dark:border-white border-dashed w-fit m-auto text-center ">
          Working Process
        </h2>
        <p className="w-auto lg:w-[700px] pt-10 text-center dark:text-white m-auto font-primary font-medium leading-8 text-lg text-secondary">
          Here's an outline of my workflow from start to finish. While you might
          feel concerned about your project, I'm confident that my process will
          put you at ease and ensure a smooth, worry-free experience.
        </p>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5">
          <WorkingProcessItems
            src="/conversation.jpg"
            heading="Conversation"
            detail="Understanding the project's needs and requirements is crucial to
              me. This includes core features and functions, the project
              deadline, key milestones, and any important dates or time
              constraints."
          />
          <WorkingProcessItems
            src="/planning.jpg"
            heading="Planning"
            detail="Then I create a customized plan for the project, identifying the
              most effective approach and the techniques and strategies to
              implement while ensuring all your requirements are met."
          />
          <WorkingProcessItems
            src="/design.jpg"
            heading="Receive Design"
            detail="I will take the design you provide and convert it into HTML format
              based on your requirements, ensuring it is responsive and
              user-friendly across all devices."
          />
          <WorkingProcessItems
            src="/coding.jpg"
            heading="Start Coding"
            detail="Websites are built using coding languages, which is why every site
              requires careful coding. Clean, developer-friendly code is
              essential for making your website dynamic and fully functional. I
              consistently code in a professional and high-quality manner."
          />
          <WorkingProcessItems
            src="/review.jpg"
            heading="Review"
            detail="When I complete the design and coding, I will send it to the
              client for review. If any modifications or revisions are needed, I
              ask the client to provide a list of changes, and I’m always happy
              to make those adjustments."
          />
          <WorkingProcessItems
            src="/submit.jpg"
            heading="Submit Project"
            detail="After completing the review, we move on to the final step. If
              everything is in order, I will publish the website for everyone to
              see. However, my commitment doesn’t end with the project's
              completion; I provide lifetime support to my clients to ensure
              their ongoing satisfaction."
          />
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;

// Conversation
// Planning
// Design
// Start Coding
// Review
// Submit
// Revision

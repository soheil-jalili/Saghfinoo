import AgentCard from "../AgentCard/AgentCard";

const AgentsMain = () => {
  return (
    <div className="grid max-[338px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-2 sm:gap-x-6 sm:gap-y-4">
      {Array.from({ length: 28 }).map((item, index) => {
        return (
          <AgentCard
            key={index}
            id={index.toString()}
            company="املاک توسی"
            fullName="علی پرتو"
            image="/assets/images/users/user.jpg"
            rate="4"
            route="/"
          />
        );
      })}
    </div>
  );
};

export default AgentsMain;

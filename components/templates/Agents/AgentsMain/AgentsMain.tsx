import AgentCard from "../AgentCard/AgentCard"

const AgentsMain = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 sm:gap-y-6 gap-y-4 gap-x-2 sm:gap-x-4">
            {
                Array.from({ length: 28 }).map((item, index) => {
                    return <AgentCard key={index} id={index.toString()} company="املاک توسی" fullName="علی پرتو" image="/assets/images/users/user.jpg" rate="4" />
                })
            }
        </div>
    )
}

export default AgentsMain

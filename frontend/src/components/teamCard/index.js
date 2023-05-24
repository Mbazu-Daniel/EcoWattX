import TeamCard from "./teamCard";
import members from "@/utils/teamMember";

const TeamContainer = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-6 w-full my-[10rem]">
            <h2 className='text-center mb-12 text-4xl font-sans mt-12 font-medium'>Meet our team</h2>
            <div className='w-[300px] flex flex-col md:flex-row items-center gap-12 justify-center'>
                {members.map((member) => (
                    <TeamCard member={member} key={member.name} />
                ))}
            </div>
        </div>
    )
}

export default TeamContainer;

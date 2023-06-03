
import { getMemberRequest } from "../api/members";
import MemberCard from "./MemberCard";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
function Member() {
    let { id } = useParams();
    const {
        data: member,
        isLoading,
        error,
    } = useQuery(["member", id], getMemberRequest, id);

    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>Error: {error.message} </div>;

    if (member?.length === 0)
        return (
            <div className="h-[calc(100vh-150px)] flex items-center justify-center">
                <div>

                    <h1 className="text-center text-2xl">You don't have members yet</h1>
                </div>
            </div>
        );
console.log(member)
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            
                <MemberCard member={member} key={member._id} />
            
        </div>
    );
}

export default Member;
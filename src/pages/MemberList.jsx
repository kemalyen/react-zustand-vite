import { useQuery } from "@tanstack/react-query";
import { getAllMembers } from "../api/members";

function MemberList() {
  const {
    data: members,
    isLoading,
    error,
  } = useQuery(["members"], getAllMembers);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message} </div>;

  if (members?.length === 0)
    return (
      <div className="h-[calc(100vh-150px)] flex items-center justify-center">
        <div>
          
          <h1 className="text-center text-2xl">You don't have members yet</h1>
        </div>
      </div>
    );

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {members.map((member) => (
         {member}
      ))}
    </div>
  );
}

export default MemberList;
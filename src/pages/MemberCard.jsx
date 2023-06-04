import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";

function MemberCard({ member }) {
 
  return (
    <div
      key={member.id}
      className="relative flex items-center space-x-3 rounded-lg border border-gray-800 bg-neutral-800 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-500 "
    
    >
      <div className="flex-shrink-0">

      </div>
      <div className="min-w-0 flex-1">
        <Link className="focus:outline-none" to={'/members/' + member.id}>{member.name}</Link>
        <p>{member.email}</p>
        <br /><br />
        <p>
          Edit: <Link className="focus:outline-none" to={'/members/' + member.id + '/edit'}>{member.name}</Link>
        </p>

      </div>
    </div>
  );
}

export default MemberCard;
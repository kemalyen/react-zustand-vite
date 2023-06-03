import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";

function MemberCard({ member }) {
    /*   const queryClient = useQueryClient();
      const mutation = useMutation(deleteNoteRequest, {
        onSuccess: () =>
          queryClient.setQueriesData(["notes"], (old) =>
            old.filter((n: Note) => n._id !== note._id)
          ),
      });
     */
    return (
        <div
            key={member._id}
            className="relative flex items-center space-x-3 rounded-lg border border-gray-800 bg-neutral-800 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-500 "
        /*       onDoubleClick={() => {
                mutation.mutate(note._id);
              }} */
        >
            <div className="flex-shrink-0">

            </div>
            <div className="min-w-0 flex-1">
                <Link className="focus:outline-none" to={'/members/' + member._id}>{member.name}</Link>
            </div>
        </div>
    );
}

export default MemberCard;
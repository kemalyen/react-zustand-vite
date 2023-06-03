import {create} from "zustand";
import { getNotesRequest } from "../api/notes";
import { Note } from "../types/Note.interface";

/* type Store = {
  notes: Note[];
  getNotes: () => Promise<void>;
};
 */
export const useMemberStore = create((set) => ({
  members: [],
  member: {},
  getMembers: async () => {
    const res = await getMembersRequest();
    set({ members: res.data });
  },
  getMember: async () => {
    const res = await getMemberRequest();
    set({ member: res.data });
  },
}));
import axios from "../libs/axios";
 
export const getAllMembers = async () => {
  const res = await axios.get("/data");
  return res.data;
};
/* 
export const createNoteRequest = async (note: Note) => {
  const res = await axios.post("/api/notes", note);
  return res.data;
};

export const deleteNoteRequest = async (id: string) => {
  const res = await axios.delete(`/api/notes/${id}`);
  return res.data;
}; */
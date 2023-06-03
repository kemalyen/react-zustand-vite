import axiosClient from "../libs/axios";
 
export const getMembersRequest = async () => {
  const res = await axiosClient.get("/data");
  return res.data;
};

export const getMemberRequest = async ({queryKey}) => {
  const [_, id] = queryKey
  console.log(id)
  const res = await axiosClient.get(`/data?_id=${id}`);
  return res.data[0];
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
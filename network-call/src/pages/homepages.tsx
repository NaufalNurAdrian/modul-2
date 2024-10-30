import { useEffect, useState } from "react";
import axios from "../helpers/axios";
import { IUsers } from "../types/user";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
function HomePage() {
    const navigate = useNavigate();

  const [users, setUsers] = useState<IUsers[]>([]);
  const [realod, setRealod] = useState<boolean>(false)
  const getData = async () => {
    try {
      const { data } = await axios.get("/users");
      console.log(data);
      setUsers(data as IUsers[]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (user: IUsers) => {
    const confirmSubmit = confirm(
      `apakah anda yakin untuk menghapus ${user.username}?`
    );
    if (confirmSubmit) {
      try {
        await axios.delete(`/users/${user.id}`);
        setRealod(!realod)
        alert(`data ${user.username} berhasil di hapus`)
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    getData();
  }, [realod]);

  return (
    <div className=" flex items-center justify-center content-center p-2 m-2">
      <table className="table-auto w-[500px] text-center p-2 mt-40 bg-slate-200 border border-black">
        <thead className="bg-slate-500">
          <tr>
            <th className="p-2 border border-black">No</th>
            <th className="p-2 border border-black">Username</th>
            <th className="p-2 border border-black">Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, idx) => {
            return (
              <tr key={idx}>
                <td onClick={()=> navigate(`/${item.id}`)} className="p-2 border border-black">{idx + 1}</td>
                <td onClick={()=> navigate(`/${item.id}`)} className="p-2 border border-black">{item.username}</td>
                <td onClick={()=> navigate(`/${item.id}`)} className="p-2 border border-black">{item.email}</td>
                <td className="p-2 border border-black">
                  <MdDelete onClick={() => handleDelete(item)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default HomePage;

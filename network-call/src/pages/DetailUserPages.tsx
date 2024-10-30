import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IUsers } from "../types/user";
import axios from "../helpers/axios";

function DetailUserPages() {
  const [user, setUser] = useState<IUsers | null>(null);
  const { id } = useParams();

  const getData = async () => {
    try {
      const res = await axios.get(`/users/${id}`);
      const { data } = await axios.get(`/users/${id}`)
      console.log(res)
      console.log(data)
      setUser(data as IUsers);
    } catch (err) {
      console.error(err);
    }
  };

  const obj = {
    nama : 'naufal'
  }

  const { nama } = obj
  console.log(nama)

  useEffect(() => {
    getData();





  }, []);

  return <div><h1>Username: {user?.username}</h1></div>;
}
export default DetailUserPages;

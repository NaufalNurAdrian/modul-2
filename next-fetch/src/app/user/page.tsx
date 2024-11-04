import { IUser } from "@/types/user"

async function getData(): Promise<IUser[]> {
    const res = await fetch("http://localhost:2000/users")
    if (!res.ok){
        throw new Error("Failed to fetch data")
    }
    return res.json()
}

export default async function UserPage() {
    const data = await getData()
    console.log(data);
    
    return (
        <div className=" flex items-center justify-center content-center p-2 m-2">
      <table className="table-auto w-[500px] text-center p-2 mt-40 bg-slate-200 border border-black">
        <thead className="bg-slate-500">
          <tr>
            <th className="p-2 border border-black">No</th>
            <th className="p-2 border border-black">Username</th>
            <th className="p-2 border border-black">Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => {
            return (
              <tr key={idx}>
                <td  className="p-2 border border-black">{idx + 1}</td>
                <td  className="p-2 border border-black">{item.username}</td>
                <td  className="p-2 border border-black">{item.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    )
}
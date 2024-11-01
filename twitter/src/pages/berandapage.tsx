import { Beranda } from "../beranda";
import RightBar from "../rightbar";
import { SideBar } from "../sidebar";

export default function () {
  return (
    <div className="bg-black grid grid-cols-3">
      <SideBar />
      {/* <AvatarSideBar /> */}
      <Beranda />
      <RightBar />
    </div>
  );
}

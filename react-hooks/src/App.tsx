// import EffecComp from "./effect"
// import StateComp from "./state"
// import MemoComp from "./memocomp"
// import RefComp from "./ref"

import { createContext, useState } from "react";
import CallbackComp from "./component/callback";
// import ReducerComp from "./component/reducer";
// import ContextComp from "./component/context";

export const UserContext = createContext<string>("");

function App() {
  const [user] = useState<string>("andi");
  return (
    <div>
      <UserContext.Provider value={user}>
        {/* <StateComp /> */}
        {/* <EffecComp /> */}
        {/* <RefComp /> */}
        {/* <MemoComp /> */}
        {/* <ContextComp /> */}
        {/* <ReducerComp /> */}
        <CallbackComp />
      </UserContext.Provider>
    </div>
  );
}

export default App;

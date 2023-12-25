import Paygroup from "./components/pay";
import Payment from "./components/payment";
import { useState } from "react";

function App() {
  const [isPayGroup, setIsPayGroup] = useState(false);

  return (
    <div>
      <Payment setIsPayGroup={setIsPayGroup} />
      {isPayGroup && <Paygroup />}
    </div>
  );
}
export default App;

// 어떤걸 결제하는지 걸제 내용
// 결제 금액
// 결제 방식 (카드사)
// 결제 버튼

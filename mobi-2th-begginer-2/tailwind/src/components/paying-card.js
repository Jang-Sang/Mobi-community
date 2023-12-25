import Button from "./button";
import Card from "./card";

const PayingCard = () => {
  return (
    <div class="border-2 w-96 flex flex-col justify-center items-center rounded	">
      <Card />
      <div class="my-2">
        <p>
          카드번호 <input class="w-12 border-2" />
          -<input class="w-12 border-2" />
          -<input class="w-12 border-2" />
          -<input class="w-12 border-2" />
        </p>
        <p>
          유효기간 <input class="w-12 border-2" />년
          <input class="w-12 border-2" />월
        </p>
        <p>
          비밀번호 <input class="w-12 border-2 " type="password" />
        </p>
      </div>
      <Button />
    </div>
  );
};

export default PayingCard;

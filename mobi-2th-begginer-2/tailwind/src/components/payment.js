import gejang from "../img/간장게장2.png";
import kimchi from "../img/김치.png";
import namul from "../img/나물.png";
import ssalbab from "../img/쌀밥.png";

const Payment = ({ setIsPayGroup }) => {
  return (
    <div class="mx-auto max-w-7xl px-6 lg:px-8 ">
      <div class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none ">
        <div class="p-8 sm:p-10 lg:flex-auto">
          <h3 class="text-2xl font-bold tracking-tight text-gray-900">
            간장게장 명절 세트
          </h3>
          <p class="mt-6 text-base leading-7 text-gray-600">
            저희 간장돌게장은 전국에서 최고의 국내산재료만을 공수하여 전라도
            여수에서 하나부터 열까지 저의 손을 거쳐 장인의 정성으로 하나하나
            신경써서 직접 만들고 있으며, 늘 내 가족이 먹는다는마음으로 위생과
            청결은 물론 최고의 맛을 위해 철저히 신경쓰며 만들고 있습니다.
            <br></br>믿을수 있는 맛있고 건강한 음식만을 제공해드릴것을
            고객님들께 약속드립니다.
          </p>
          <div class="mt-10 flex items-center gap-x-4">
            <h4 class="flex-none text-sm font-semibold leading-6 text-indigo-600">
              구성품
            </h4>
            <div class="h-px flex-auto bg-gray-100"></div>
          </div>
          <ul
            role="list"
            class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
          >
            <li class="flex gap-x-3 text-center items-center	 ">
              <img src={gejang} class="w-12" />
              <p>여수 산란기 암게 간장게장 20KG</p>
            </li>
            <li class="flex gap-x-3 text-center items-center	">
              <img src={ssalbab} class="w-12 h-12" />
              <div class="justify-center">전라도 신동진 쌀 20kg</div>
            </li>
            <li class="flex gap-x-3">
              <img src={kimchi} class="w-12 h-12" />
              <div>
                <p>전라도 김치 4종 세트</p>{" "}
                <p>(갓김치, 물김치, 백김치, 총각김치)</p>
              </div>
            </li>
            <li class="flex gap-x-3">
              <img src={namul} class="w-12 h-12" />
              <div>
                <p>전라도 나물 세트</p>
                <p>(시금치, 미나리, 고사리, 더덕 등)</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 ">
          <div class="rounded-2xl  py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 bg-[#FAE6B1] h-full">
            <div class="mx-auto max-w-xs px-8">
              <p class="text-base font-semibold text-gray-600">
                12월 31일까지 50% 할인
              </p>
              <p class="mt-6 flex items-baseline justify-center gap-x-2">
                <span class="text-5xl font-bold tracking-tight text-gray-900">
                  299,000
                </span>
                <span class="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                  원
                </span>
              </p>
              <a
                onClick={() => setIsPayGroup(true)}
                href="#"
                class="mt-10 block w-full rounded-md bg-orange-400 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                구매하러 가기
              </a>
              <p class="mt-6 text-xs leading-5 text-gray-600">
                (주) 피넛 식품 유통회사
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

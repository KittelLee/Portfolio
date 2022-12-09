import React, { useState } from "react";

const TestModals = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex md:flex-col justify-center items-center mt-2 ">
      <div className="flex gap-5 ">
        <button
          className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 hover:from-cyan-600 hover:to-teal-600"
          type="button"
          onClick={() => setShowModal(true)}
        >
          See more
        </button>
      </div>
      {showModal ? (
        <div className="mx-auto fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-black bg-opacity-90">
          <h2 className="text-xl mt-72 mx-4 text-white font-semibold text-center">
            91812969 정보보호학과 18학번 이진욱
            <br />
            Front-End Web Developer
            <br />
            학교&학과: 중부대학교 고양캠퍼스 정보보호학과
            <br />
            학번: 91812969 18
            <br />
            이메일:leejin7900@gmail.com
            <br />
            도약: 2019년도 부터 웹프론트엔드를 준비하고있습니다.
            <br />
            목표: 뒤쳐지지지않는 프론트엔드웹개발자 되기
            <br />
            <br />
            Copyright &copy; 2022 Leejinuk Portfolio
          </h2>
          <button
            className="mt-80 mx-auto w-1/2 px-8 h-10 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md shadow font-semibold absolute left-1/4"
            onClick={() => setShowModal(false)}
          >
            모달창닫기
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default TestModals;

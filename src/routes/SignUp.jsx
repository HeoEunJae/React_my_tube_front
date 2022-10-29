import React from "react";

const SignUp = () => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col items-start w-60 p-4"
      >
        <div>회원가입</div>

        <div className="mt-4">email을 입력해주세요</div>
        <input
          type="email"
          className="border-2 w-full border-black"
          placeholder="email"
        />

        <div className="mt-4">이름을 입력해주세요</div>
        <input
          type="text"
          className="border-2 w-full border-black"
          placeholder="UserName"
        />

        <div className="mt-4">비밀번호를 입력해주세요</div>
        <input
          type="password"
          className="border-2 w-full border-black"
          placeholder="password"
        />

        <button className="mt-4 btn btn-sm ml-auto">가입하기</button>
      </form>
    </div>
  );
};

export default SignUp;

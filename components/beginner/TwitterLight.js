import { useState } from "react";
import ButEasy from "./ButEasy";
import Date from "./Date";
import Layout from "./Layout";
import Like from "./Like";
import ToggleDarkMode from "./ToggleDarkMode";
import Tweet from "./Tweet";
import User from "./User";

export default function TwitterLight() {
  const [datas, setDatas] = useState([
    {
      id: "1",
      userAvatar: "/Ellipse.png",
      userName: "John Doe",
      userUsername: "@realjohndoe",
      tweet:
        "Why do they call it 'debugging' when it feels more like 'wildly guessing and hoping for the best'?",
      tag1: "#programming",
      tag2: "#coding",
      tag3: "#debugging",
      likes: 650,
      date: "3:40 PM - Feb 24, 2022",
    },
  ]);
  return (
    <Layout>
      <ToggleDarkMode />
      <div className="w-[600px] bg-white dark:bg-[#243447] px-[31px] py-[35px] rounded-lg shadowTwitterLight borderTwitterLight dark:shadowTwitterDark dark:border-none dark:text-white border-box transition-all">
        {datas.map((data) => {
          return (
            <>
              <div className="flex items-center justify-between" key={data.id}>
                <User
                  userAvatar={data.userAvatar}
                  userName={data.userName}
                  userUsername={data.userUsername}
                />
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.75 3.75C27.553 4.59434 26.2276 5.24013 24.825 5.6625C24.0722 4.79688 23.0717 4.18336 21.9588 3.9049C20.8459 3.62645 19.6744 3.69649 18.6026 4.10556C17.5308 4.51464 16.6106 5.243 15.9662 6.19214C15.3219 7.14129 14.9846 8.26542 15 9.4125V10.6625C12.8033 10.7195 10.6266 10.2323 8.66376 9.2443C6.70093 8.25635 5.0129 6.79829 3.75 5C3.75 5 -1.25 16.25 10 21.25C7.42566 22.9975 4.35895 23.8737 1.25 23.75C12.5 30 26.25 23.75 26.25 9.375C26.2488 9.02681 26.2154 8.67949 26.15 8.3375C27.4258 7.07936 28.326 5.49089 28.75 3.75Z"
                    fill="#1DA1F2"
                  />
                </svg>
              </div>
              <div>
                <Tweet
                  tweet={data.tweet}
                  tag1={data.tag1}
                  tag2={data.tag2}
                  tag3={data.tag3}
                />
              </div>
              <div className="flex items-center opacity-70">
                <Like likes={data.likes} />
                <Date date={data.date} />
              </div>
            </>
          );
        })}
      </div>
      <ButEasy />
    </Layout>
  );
}

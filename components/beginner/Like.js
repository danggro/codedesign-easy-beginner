import Image from "next/image";
import { useEffect, useState } from "react";

export default function Like({ likes }) {
  const [like, setLike] = useState(false);
  const [numberLike, setNumberLike] = useState(likes);

  return (
    <span className="flex items-center">
      <span className="inline-block" id="love">
        {like ? (
          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="red"
            xmlns="http://www.w3.org/2000/svg"
            id="2"
          >
            <path
              onClick={() => {
                setLike(false);
                const x = numberLike - 1;
                setNumberLike(x);
              }}
              d="M20.84 3.61C20.3292 3.099 19.7228 2.69364 19.0554 2.41708C18.3879 2.14052 17.6725 1.99817 16.95 1.99817C16.2275 1.99817 15.5121 2.14052 14.8446 2.41708C14.1772 2.69364 13.5708 3.099 13.06 3.61L12 4.67L10.94 3.61C9.9083 2.57831 8.50903 1.99871 7.05 1.99871C5.59096 1.99871 4.19169 2.57831 3.16 3.61C2.1283 4.64169 1.54871 6.04097 1.54871 7.5C1.54871 8.95903 2.1283 10.3583 3.16 11.39L4.22 12.45L12 20.23L19.78 12.45L20.84 11.39C21.351 10.8792 21.7563 10.2728 22.0329 9.60535C22.3095 8.93789 22.4518 8.22249 22.4518 7.5C22.4518 6.77751 22.3095 6.0621 22.0329 5.39464C21.7563 4.72718 21.351 4.12075 20.84 3.61V3.61Z"
              className="cursor-pointer"
              stroke="red"
              strokeOpacity="0.6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="transparent"
            xmlns="http://www.w3.org/2000/svg"
            id="1"
          >
            <path
              onClick={() => {
                setLike(true);
                const x = numberLike + 1;
                setNumberLike(x);
              }}
              className="cursor-pointer"
              d="M20.84 3.61C20.3292 3.099 19.7228 2.69364 19.0554 2.41708C18.3879 2.14052 17.6725 1.99817 16.95 1.99817C16.2275 1.99817 15.5121 2.14052 14.8446 2.41708C14.1772 2.69364 13.5708 3.099 13.06 3.61L12 4.67L10.94 3.61C9.9083 2.57831 8.50903 1.99871 7.05 1.99871C5.59096 1.99871 4.19169 2.57831 3.16 3.61C2.1283 4.64169 1.54871 6.04097 1.54871 7.5C1.54871 8.95903 2.1283 10.3583 3.16 11.39L4.22 12.45L12 20.23L19.78 12.45L20.84 11.39C21.351 10.8792 21.7563 10.2728 22.0329 9.60535C22.3095 8.93789 22.4518 8.22249 22.4518 7.5C22.4518 6.77751 22.3095 6.0621 22.0329 5.39464C21.7563 4.72718 21.351 4.12075 20.84 3.61V3.61Z"
              stroke="black"
              strokeOpacity="0.6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span className="ml-[10px]">{numberLike}</span>
    </span>
  );
}

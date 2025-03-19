import { Link } from "iconsax-react";

export default function NavBarLink(){
    return(
        <>
        <div className="absolute -top-24 flex gap-3 items-center">
              <div className="flex gap-2 items-center">
                <svg
                  width="20"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.79 22.75H6.21C3.47 22.75 1.25 20.52 1.25 17.78V10.37C1.25 9.00997 2.09 7.29997 3.17 6.45997L8.56 2.25997C10.18 0.999974 12.77 0.939974 14.45 2.11997L20.63 6.44997C21.82 7.27997 22.75 9.05997 22.75 10.51V17.79C22.75 20.52 20.53 22.75 17.79 22.75ZM9.48 3.43997L4.09 7.63997C3.38 8.19997 2.75 9.46997 2.75 10.37V17.78C2.75 19.69 4.3 21.25 6.21 21.25H17.79C19.7 21.25 21.25 19.7 21.25 17.79V10.51C21.25 9.54997 20.56 8.21997 19.77 7.67997L13.59 3.34997C12.45 2.54997 10.57 2.58997 9.48 3.43997Z"
                    fill="#0B3954"
                  />
                  <path
                    d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z"
                    fill="#0B3954"
                  />
                </svg>
                <Link className="text-[#0B3954] font-semibold text-base">Home</Link>
              </div>

              <svg
                width="9"
                height="18"
                viewBox="0 0 9 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.91 17.67C0.72 17.67 0.53 17.6 0.38 17.45C0.0900004 17.16 0.0900004 16.68 0.38 16.39L6.9 9.87002C7.38 9.39002 7.38 8.61002 6.9 8.13002L0.38 1.61002C0.0900004 1.32002 0.0900004 0.84002 0.38 0.55002C0.67 0.26002 1.15 0.26002 1.44 0.55002L7.96 7.07002C8.47 7.58002 8.76 8.27002 8.76 9.00002C8.76 9.73002 8.48 10.42 7.96 10.93L1.44 17.45C1.29 17.59 1.1 17.67 0.91 17.67Z"
                  fill="#0B3954"
                />
              </svg>

              <div className="flex gap-2 items-center">
                <svg
                  width="20"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42"
                    stroke="#0B3954"
                    strokeWidth="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z"
                    stroke="#0B3954"
                    strokeWidth="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 7H16"
                    stroke="#0B3954"
                    strokeWidth="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 10.5H13"
                    stroke="#0B3954"
                    strokeWidth="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <Link href="/book-categories" className="text-[#0B3954] font-semibold text-base">Book Categories</Link>
              </div>

              <svg
                width="9"
                height="18"
                viewBox="0 0 9 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.91 17.67C0.72 17.67 0.53 17.6 0.38 17.45C0.0900004 17.16 0.0900004 16.68 0.38 16.39L6.9 9.87002C7.38 9.39002 7.38 8.61002 6.9 8.13002L0.38 1.61002C0.0900004 1.32002 0.0900004 0.84002 0.38 0.55002C0.67 0.26002 1.15 0.26002 1.44 0.55002L7.96 7.07002C8.47 7.58002 8.76 8.27002 8.76 9.00002C8.76 9.73002 8.48 10.42 7.96 10.93L1.44 17.45C1.29 17.59 1.1 17.67 0.91 17.67Z"
                  fill="#0B3954"
                />
              </svg>

              <div className="flex gap-2 items-center">
                <svg
                  width="20"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7V17C20.5 17.14 20.5 17.28 20.49 17.42"
                    stroke="#0B3954"
                    strokeWidth="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z"
                    stroke="#0B3954"
                    strokeWidth="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 7H16"
                    stroke="#0B3954"
                    strokeWidth="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 10.5H13"
                    stroke="#0B3954"
                    strokeWidth="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <Link href="/book-categories">
                <h4  className="text-[#0B3954] font-semibold text-base">Book Categories</h4>

                </Link>
              </div>
            </div>
        </>
    )
}
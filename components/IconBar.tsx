import Link from "next/link";
import ProfilePicture from "./ProfilePicture";

export default function IconBar() {
  return (
    <aside className="w-[150px] flex justify-between flex-col px-3 h-full fixed top-0 left-0 bg-white text-black border-r border-gray-200">
      <div>
        <div className="w-[52px] my-0.5 flex items-center justify-center rounded-full">
          <Link className="flex items-center relative" href="/">
            <svg viewBox="0 0 24 24" className="text-primary" width="30">
              <g>
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
              </g>
            </svg>
            <div className="hover-effect"></div>
          </Link>
        </div>

        <nav className="mt-0.5">
          <Link href="/" className="flex items-start">
            <>
              <div className="nav-item p-3 flex flex-row items-center rounded-full">
                {true ? (
                  <svg viewBox="0 0 24 24" width="26" height="26">
                    <g>
                      <path d="M17.863 13.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44zM12 2C9.791 2 8 3.79 8 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4z"></path>
                    </g>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="26" height="26">
                    <g>
                      <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path>
                    </g>
                  </svg>
                )}
                <span
                  className={
                    true
                      ? "font-semibold mr-4 ml-5 text-xl"
                      : "mr-4 ml-5 text-xl"
                  }
                >
                </span>
              </div>
            </>
          </Link>

          <Link href="/contact" className="flex items-start">
            <>
              <div className="nav-item p-3 flex flex-row items-center rounded-full">
                {true ? (
                  <svg viewBox="0 0 24 24" width="26" height="26">
                    <g>
                      <path d="M1.998 4.499c0-.828.671-1.499 1.5-1.499h17c.828 0 1.5.671 1.5 1.499v2.858l-10 4.545-10-4.547V4.499zm0 5.053V19.5c0 .828.671 1.5 1.5 1.5h17c.828 0 1.5-.672 1.5-1.5V9.554l-10 4.545-10-4.547z"></path>
                    </g>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="26" height="26">
                    <g>
                      <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path>
                    </g>
                  </svg>
                )}
                <span
                  className={
                    true
                      ? "font-semibold mr-4 ml-5 text-xl"
                      : "mr-4 ml-5 text-xl"
                  }
                ></span>
              </div>
            </>
          </Link>
        </nav>
      </div>
      
      <ProfilePicture small
      />
    </aside>
  );
}

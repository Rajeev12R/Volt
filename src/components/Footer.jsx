import React from "react"
const Footer = () => {
  return (
    <footer>
      <div className="max-w-screen-xl py-16 mx-auto">
        <div className="grid grid-cols-1 gap-8 text-center mx-auto">
          <div>
            <p className="font-signika">
              <b>Volt Studio</b>
            </p>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              Lovely Professional University, Jalandhar-Delhi G.T. Road (NH-1),
              Phagwara, Punjab, India
            </p>
            <div className="flex mx-auto">
              <div className="mx-auto space-x-6 flex mt-8 text-gray-600 dark:text-gray-300">
                <a
                  className="transition duration-300 hover:opacity-75"
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                  </svg>
                </a>
                <a
                  className="transition duration-300 hover:opacity-75"
                  href="https://www.instagram.com/voltstudioz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                  </svg>
                </a>
                <a
                  className="transition duration-300 hover:opacity-75"
                  href="https://www.linkedin.com/company/voltstudioz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path d="M1.146 0C.513 0 0 .513 0 1.146v13.707C0 15.487.513 16 1.146 16h13.708c.633 0 1.146-.513 1.146-1.146V1.146C16 .513 15.487 0 14.854 0H1.146zM4.835 12.165h-2.67v-7.62h2.67v7.62zm-1.335-8.914c-.846 0-1.532-.68-1.532-1.52 0-.841.686-1.52 1.532-1.52s1.532.68 1.532 1.52c0 .84-.686 1.52-1.532 1.52zm9.397 8.914h-2.67v-3.624c0-.861-.015-1.97-1.198-1.97-1.199 0-1.384.937-1.384 1.904v3.69h-2.67v-7.62h2.57v1.04h.039c.358-.681 1.229-1.396 2.53-1.396 2.71 0 3.216 1.784 3.216 4.104v3.871z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

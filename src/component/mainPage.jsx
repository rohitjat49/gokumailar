import React, { useState } from "react";
import { FaShoppingCart, FaEllipsisV } from "react-icons/fa";
import { handleLogin } from "../utils";
import { useSetUserLogin } from "../store/auth/hook";
import ClipLoader from "react-spinners/ClipLoader";

const Navbar = () => {
  const [isShopOpen, setShopOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const setUserLogin = useSetUserLogin();

  const loginHandler = async () => {
    if (!username || !password) alert("Invalid Username or password!!");
    setIsLoading(true);
    const data = await handleLogin(username, password);

    if (data?.token) {
      setUserLogin(
        true,
        data?.token,
        data?.email,
        data?.username,
        data?.emailsSent,
        data?.maxEmailLimit
      );
      setIsLoading(false);
      setLoginOpen(false);
    }
    setIsLoading(false);
  };

  return (
    <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          {/* <img
            // src="Img/monstermailer_logo_homepage.gif"
            alt="Logo"
            className="h-10"
          /> */}
          <p className="text-white font-bold upparcase text-2xl">GOKUMAILAR</p>
        </div>

        <div className="flex space-x-4">
          <button
            className="text-white  px-4 py-2 rounded flex items-center"
            onClick={() => setShopOpen(true)}
          >
            <FaShoppingCart className="mr-2" />
          </button>

          {isShopOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg">
                <h2 className="text-lg font-bold">Contact us on</h2>
                <p> WhatsApp for purchase inquiries:+91 90730 29819</p>
                <button
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => setShopOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}

          <button
            className="text-white bg-Features-bg px-4 py-2 rounded"
            onClick={() => setLoginOpen(true)}
          >
            Login
          </button>

          {isLoginOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white  p-6 rounded-lg">
                <h2 className="text-lg font-bold">Login</h2>
                <input
                  type="text"
                  placeholder="Username"
                  className="border p-2 w-full mt-2"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="border p-2 w-full mt-2"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {isLoading ? (
                  <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => setLoginOpen(false)}
                  >
                    <ClipLoader
                      color={"white"}
                      loading={isLoading}
                      size={13}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />{" "}
                    Submit
                  </button>
                ) : (
                  <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => loginHandler()}
                  >
                    Submit
                  </button>
                )}
                <button
                  className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => setLoginOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}

          <button
            className="text-white bg-Features-bg px-4 py-2 rounded"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            <FaEllipsisV />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-12 mt-12 text-white bg-Features-bg border rounded-lg shadow-lg">
              <ul className="py-2">
                <li className="px-4 py-2 hover:text-green-500 cursor-pointer">
                Gokumailar opium
                </li>
                <li className="px-4 py-2 hover:text-green-500 cursor-pointer">
                Gokumailar API Creator
                </li>
                <li className="px-4 py-2 hover:text-green-500 cursor-pointer">
                  Terms and Conditions
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

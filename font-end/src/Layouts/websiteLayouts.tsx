
import Header from "../components/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import LinkClient from "../components/LinkClient";
import { createContext, useState } from 'react'
import { IUser } from '../models/type';
export const UserContext = createContext({} as any);

const WebsiteLayouts = () => {


  const [user, setUser] = useState<IUser>({} as any);
  return (
    <UserContext.Provider value={{ setUser, user }}>
      <LinkClient />
      <div className="container-xxl bg-white p-0">
        {/* <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border text-primary"
          style={inlineStyle}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

export default WebsiteLayouts;

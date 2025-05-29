import { dateOfBirth, email, location, phone } from "@/lib/constants";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineUser,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const Info = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-10">
      <div className="flex flex-col md:flex-row items-start gap-4">
        <div className="w-[280px] flex items-start gap-4">
          <HiOutlineUser className="text-2xl mt-1 text-accent" />
          <div>
            <p className="text-lg">Data of Birth</p>
            <p>{dateOfBirth}</p>
          </div>
        </div>
        <div className="w-[280px] flex items-start gap-4">
          <HiOutlineMail className="text-2xl mt-1 text-accent" />
          <div>
            <p className="text-lg">Email Address</p>
            <p>{email}</p>
          </div>
        </div>{" "}
      </div>{" "}
      <div className="flex flex-col md:flex-row items-start gap-4">
        <div className="w-[280px] flex items-start gap-4">
          <HiOutlinePhone className="text-2xl mt-1 text-accent" />
          <div>
            <p className="text-lg">Phone Number</p>
            <p>{phone}</p>
          </div>
        </div>{" "}
        <div className="w-[280px] flex items-start gap-4">
          <HiOutlineLocationMarker className="text-2xl mt-1 text-accent" />
          <div>
            <p className="text-lg">Location</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

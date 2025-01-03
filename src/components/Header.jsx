import Sidebar from "../elements/Sidebar";
import Inbox from "./Inbox";
import MailDetail from "./Mails_details";

export default function Header() {
  return (
    <div className="w-screen h-screen bg-white flex">
      <Sidebar />
      <Inbox />
      <MailDetail />
    </div>
  );
}

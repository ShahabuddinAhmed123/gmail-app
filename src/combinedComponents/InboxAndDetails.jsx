import Inbox from "../components/Inbox";
import MailDetail from "../components/Mails_details";

export default function InboxAndDetails(){
    return(
        <div className="flex">
            <Inbox/>
            <MailDetail/>
        </div>
    )
}
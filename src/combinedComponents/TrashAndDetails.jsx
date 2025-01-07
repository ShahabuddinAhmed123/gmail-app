import Trash from "../components/Trash";
import TrashMails from "../components/TrashMails";

const TrashAndDetails = () => {
    return ( 
        <div className="flex">
            <Trash/>
            <TrashMails />
        </div>
     );
}
 
export default TrashAndDetails;
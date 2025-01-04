import Draft from "../components/Draft";
import DraftDetails from "../components/DraftMails";

const DraftAndDetails = () => {
    return ( 
        <div className="flex">
            <Draft/>
            <DraftDetails/>
        </div>
     );
}
 
export default DraftAndDetails;
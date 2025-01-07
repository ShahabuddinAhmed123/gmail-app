import { useState, useContext } from "react";
import { SentContext } from '../context/note/SentContext';


const Compose = () => {

  const [email, setEmail] = useState('');
  const [emailContent, setEmailContent] = useState('');
  const { sendEmail } = useContext(SentContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      sendEmail(email);
      setEmail('');
      setEmailContent('');
    }
    setOpenModal(false);
  };

    const [openModal, setOpenModal] = useState(false)
    function handleOpen(){
        setOpenModal(!openModal)
    }
    function handleClose(){
        setOpenModal(false)
    }
    return ( 
        <> 
        <div className="mt-4 ml-4">
        <button 
        className="w-[100px] h-[45px] border rounded-xl text-white bg-black active:scale-95 transition-all duration-150"
        onClick={() => handleOpen()}
        >Compose</button>
        </div>
        {openModal && <div className="w-screen h-screen z-50 bg-[rgba(0,0,0,0.4)] fixed flex items-center justify-center">
          <div className="w-[70%] h-[70%] p-10 rounded-lg bg-stone-200 flex gap-4 flex-col justify-center items-center">
            <h1 className="text-2xl font-semibold ">Compose an email</h1>
            <input
        value={email}
            onChange={(e) => setEmail(e.target.value)}
             className="w-[50%] h-[40px] placeholder:text-stone-600 text-xl px-2" placeholder="Title" type="text" />
            <textarea
        value={emailContent}
            onChange={(e) => setEmailContent(e.target.value)}
             className="w-[50%] p-4 placeholder:text-stone-600" placeholder="Content" rows={10}></textarea>
            <div className="flex gap-4">
                <button 
                onClick={handleSubmit}
                className="w-[100px] h-[45px] bg-black text-white rounded-xl active:scale-95">Send</button>
               <button className="w-[100px] h-[45px] bg-black text-white rounded-xl active:scale-95" onClick={() => handleClose()}>Close</button>
            </div>
          </div>
        </div>}
        </>
     );
}
 
export default Compose;
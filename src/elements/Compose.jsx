import { useState, useContext } from "react";
import { SentContext } from "../context/note/SentContext";
import { DraftContext } from "../context/note/DraftContext";
import penImage from "../assets/pen-solid.svg"

const Compose = () => {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [emailContent, setEmailContent] = useState("");
  const { sendEmail } = useContext(SentContext);
  const { draftMail } = useContext(DraftContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() || email.trim() || emailContent.trim()) {
      sendEmail({ title, email, content: emailContent });
      setTitle("");
      setEmail("");
      setEmailContent("");
    }
    setOpenModal(false);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    if (title.trim() || email.trim() || emailContent.trim()) {
      draftMail({ title, email, content: emailContent });
      setTitle("");
      setEmail("");
      setEmailContent("");
    }
    setOpenModal(false);
  };

  const [openModal, setOpenModal] = useState(false);
  function handleOpen() {
    setOpenModal(!openModal);
  }

  return (
    <>
      <div className="mt-4 px-4 max-[450px]:px-2">
        <button
        id="button"
          className="w-full h-[45px] border rounded-xl text-white bg-[#111] hover:bg-stone-700 active:scale-95 transition-all max-[450px]:rounded-full duration-150 flex justify-center items-center max-[450px]:text-[12px] max-[450px]:px-1 max-[450px]:h-[35px]"
          onClick={() => handleOpen()}
        >
          <p className="max-[450px]:hidden">Compose</p>
          <img 
          className="min-[451px]:hidden h-4"
          src={penImage} 
          alt="" />
        </button>
      </div>
      {openModal && (
        <div className="w-screen h-screen z-50 bg-[rgba(0,0,0,0.4)] backdrop-blur-sm fixed flex items-center justify-center">
          <div className="w-[70%] h-[70%] p-10 max-sm:p-2 rounded-lg bg-[#f1f8fd] flex gap-3 flex-col justify-center items-center max-lg:w-[95%]" id="modal">
            <h1 className="text-3xl font-semibold max-md:text-2xl text-[#111]" id="text">Compose an email</h1>
            <div className="w-[50%] max-lg:w-[90%] flex flex-col mt-4">
            <input
            id="inputs"
              value={title}
              name="Title"
              onChange={(e) => setTitle(e.target.value)}
              className="w-[100%] h-[40px] outline-none border-b border-[#adadad] text-black bg-transparent placeholder:text-[#111] px-2"
              placeholder="Subject"
              type="text"
            />
            <input
            id="inputs"
              value={email}
              name="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-[100%] outline-none h-[40px] border-b border-[#adadad] text-black bg-transparent placeholder:text-[#111] px-2"
              placeholder="Recipients"
              type="email"
            />
            </div>

            <textarea
            id="inputs"
              value={emailContent}
              name="Content"
              onChange={(e) => setEmailContent(e.target.value)}
              className="w-[50%] resize-none outline-none rounded-lg border border-[#adadad] text-black p-4 placeholder:text-[#111] bg-transparent max-lg:w-[90%]"
              placeholder="Content...."
              rows={10}
            ></textarea>
            <div className="flex gap-4">
              <button
              id="button"
                onClick={handleSubmit}
                className="w-[100px] h-[45px] bg-[#111] text-white rounded-xl active:scale-95 max-md:h-[35px] max-md:text-[14px]"
              >
                Send
              </button>
              <button
              id="button"
                className="w-[100px] h-[45px] bg-[#111] text-white rounded-xl active:scale-95 max-md:h-[35px] max-md:text-[14px]"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Compose;

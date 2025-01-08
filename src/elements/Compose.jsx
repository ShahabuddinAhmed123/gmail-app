import { useState, useContext } from "react";
import { SentContext } from "../context/note/SentContext";
import { DraftContext } from "../context/note/DraftContext";

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
      <div className="mt-4 px-4">
        <button
          className="w-full h-[45px] border rounded-xl text-white bg-stone-900 hover:bg-stone-700 active:scale-95 transition-all duration-150"
          onClick={() => handleOpen()}
        >
          Compose
        </button>
      </div>
      {openModal && (
        <div className="w-screen h-screen z-50 bg-[rgba(0,0,0,0.4)] backdrop-blur-sm fixed flex items-center justify-center">
          <div className="w-[70%] h-[70%] p-10 rounded-lg bg-[#fff] flex gap-3 flex-col justify-center items-center">
            <h1 className="text-3xl font-semibold ">Compose an email</h1>
            <div className="w-[50%] flex flex-col mt-4">
            <input
              value={title}
              name="Title"
              onChange={(e) => setTitle(e.target.value)}
              className="w-[100%] h-[40px] outline-none border-b border-stone-400 placeholder:text-stone-600 px-2"
              placeholder="Subject"
              type="text"
            />
            <input
              value={email}
              name="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-[100%] outline-none h-[40px] border-b border-stone-400 placeholder:text-stone-600 px-2"
              placeholder="Recipients"
              type="email"
            />
            </div>

            <textarea
              value={emailContent}
              name="Content"
              onChange={(e) => setEmailContent(e.target.value)}
              className="w-[50%] resize-none outline-none rounded-lg border border-stone-400 p-4 placeholder:text-stone-600"
              placeholder="Content...."
              rows={10}
            ></textarea>
            <div className="flex gap-4">
              <button
                onClick={handleSubmit}
                className="w-[100px] h-[45px] bg-black text-white rounded-xl active:scale-95"
              >
                Send
              </button>
              <button
                className="w-[100px] h-[45px] bg-black text-white rounded-xl active:scale-95"
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

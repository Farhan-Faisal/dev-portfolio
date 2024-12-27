import Link from "next/link";
import { useRef, useState, useEffect } from 'react';
import { CircularText } from "./Icons";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const BasicModal = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messageList, setMessageList] = useState([
    {message: "Hi, how may I help you today?", sender: "bot"}
  ]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      setTimeout(() => {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }, 0);
    }
  }, [messageList]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const newMessageList = [...messageList, { message: input, sender: "user" }];
    setMessageList(newMessageList);
    setInput("");

    try {
      const response = await fetch('https://dev-portfolio-qrr2.onrender.com/chat', { // Replace with your actual endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: JSON.stringify(newMessageList) })
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      const botMessage = data.answer || "Sorry, I didn't understand that.";
      setMessageList(prevList => [...prevList, { message: botMessage, sender: "bot" }]);
    } catch (error) {
      console.error("Failed to fetch bot response:", error);
      setMessageList(prevList => [...prevList, { message: "Error fetching response. Please try again.", sender: "bot" }]);
    }
  }

  return (
    <div>
      <Button onClick={handleOpen}>Chat</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="relative top-[40%] left-[5%] w-[500px] max-h-[75vh] 
            p-4 bg-white border-2 border-black shadow-2xl overflow-y-auto"
        >
          <Typography id="modal-modal-title" variant="h6" component="h2" className="text-center mb-4">
            HireHelper
          </Typography>
          
          <div className="flex flex-col max-h-[200px] overflow-y-auto m-1 border-black border-2"
            ref={containerRef}>
            {
              messageList.map((item, index) => {
                return (
                  <div key={index} 
                    className={`max-w-[300px] p-2 m-2 mb-2 rounded shadow-md text-wrap break-words 
                      ${item.sender === 'user'
                        ? 'bg-blue-500 text-white self-end'
                        : 'bg-gray-200 text-black self-start' 
                      }`}
                  >
                    {item.message}
                  </div>
                );
              })
            }
          </div>
          
          <form onSubmit={handleSubmit}>

            <input 
              className="border-black p-1 m-1 border-2 bg-black-200" 
              type="text" value={input} 
              onChange={handleChange} 
            />
          
            <div 
              className="border-2 border-black p-1 m-1 cursor-pointer inline-block" 
              onClick={handleSubmit}>
              Send
            </div>
  
          </form>
          
        </Box>
      </Modal>
    </div>
  );
}

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex flex-col items-center justify-center md:right-8 sm:right-0 
    overflow-hidden md:bottom-auto md:left-auto md:top-0 md:absolute z-20">
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularText
          className={"fill-dark dark:fill-light animate-spin-slow duration-200"}
        />
        <Link
          href='/' 
          className="flex items-center justify-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] shadow-md border border-solid
            bg-dark rounded-full text-white w-20 h-20 font-semibold hover:bg-light hover:border-dark hover:text-dark dark:text-dark dark:bg-light dark:hover:bg-dark
            md:w-12 md:h-12 md:text-[10px]
            "
        >
          <BasicModal />
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
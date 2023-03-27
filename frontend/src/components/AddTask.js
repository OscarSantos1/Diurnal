import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");

  const avoidReload = (e) => {
    e.preventDefault();
    sendForm("today");
    setText("");
  };
  const sendForm = (btnPressed) => {
    if (!text) {
      alert("Please add a task");
      return;
    }
    const description = text;
    const day = btnPressed;
    console.log(description, day);
    onAdd({ description, day });
    setText("");
  };

  // // CHECK IF TIME IS VALID
  // const checkTime = (newTime) => {
  // 	setTime(newTime)
  // }

  return (
    <div className="flex flex-col h-[70%] justify-around">
      <form className="flex flex-col" onSubmit={(e) => avoidReload(e)}>
        <label className="text-xs">To do:</label>
        <input
          className="h-6 rounded-md w-[80%] text-sm pl-1 self-center placeholder:text-xs placeholder:pl-1"
          type="text"
          placeholder="Add assignment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <div className="flex items-center justify-center space-x-2 px-3 h-[20%]">
        <button
          className="bg-[#4689CC] text-slate-100 w-[50%] py-1 rounded-full"
          value="today"
          onClick={(e) => sendForm(e.target.value)}
        >
          Today
        </button>
        <button
          className="bg-[#4689CC] text-slate-100 w-[50%] py-1 rounded-full"
          value="tomorrow"
          onClick={(e) => sendForm(e.target.value)}
        >
          Tomorrow
        </button>
      </div>
    </div>
  );
};

export default AddTask;

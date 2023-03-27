import {
  IoIosCheckmarkCircleOutline,
  IoMdTrash,
  IoIosCheckmarkCircle,
} from "react-icons/io";

const Task = ({ task, onClick, onToggle }) => {
  return (
    <div className={`flex active:backdrop-blur-lg rounded-xl`}>
      <div className="task-status">
        {task.done ? (
          <IoIosCheckmarkCircle
            size="32"
            style={{ color: "rgb(140, 156, 0)", cursor: "pointer" }}
            onClick={onToggle}
          />
        ) : (
          <IoIosCheckmarkCircleOutline
            size="32"
            style={{ color: "rgb(140, 156, 0)", cursor: "pointer" }}
            onClick={onToggle}
          />
        )}
      </div>
      <div className="task" onDoubleClick={() => onToggle(task.id)}>
        <h3
          className={`font-normal text-sm ${
            task.done ? " text-gray-300" : " text-[#333333]"
          }`}
        >
          {task.description}
          <div>
            <IoMdTrash
              size="25"
              className="text-[#333333] cursor-pointer"
              onClick={onClick}
            />
          </div>
        </h3>
        {task.hour ? (
          <p>
            at {task.hour}:{task.minute}
            {task.am ? "am" : "pm"}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Task;

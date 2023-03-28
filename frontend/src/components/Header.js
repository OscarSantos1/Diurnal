import Button from "./Button";
import AddTask from "./AddTask";

const Header = ({ title, toggleShowAdd, showAddTask, onAdd }) => {
  return (
    <header
      className={`w-full ${
        showAddTask && title == "Today" ? "header-height-open" : "header-height"
      }  bg-white rounded-t-[42px]`}
    >
      <div className="flex text-[#095089] items-center justify-between rounded-t-[30px] px-3 pt-3">
        <h2 className="font-normal">{title}</h2>
        {title === "Today" ? (
          <Button
            color={showAddTask ? "rgb(255, 22, 93)" : "rgb(97, 138, 0)"}
            text={showAddTask ? "Close" : "Add"}
            onClick={toggleShowAdd}
          />
        ) : (
          ""
        )}
      </div>
      {showAddTask && title === "Today" ? <AddTask onAdd={onAdd} /> : ""}
    </header>
  );
};

export default Header;

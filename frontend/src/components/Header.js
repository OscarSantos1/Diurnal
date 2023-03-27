import PropTypes from "prop-types";
import Button from "./Button";
import AddTask from "./AddTask";

const Header = ({ title, toggleShowAdd, showAddTask, onAdd }) => {
  return (
    <header
      className={`${
        showAddTask ? "h-[30%]" : "h-[15%]"
      }  bg-white rounded-t-[30px] rounded-b-md`}
    >
      <div className="flex items-center justify-between rounded-t-[30px] px-3 pt-3">
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

Header.defaultProps = {
  title: "Do me.",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
// CSS in JS
//const headerStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header;

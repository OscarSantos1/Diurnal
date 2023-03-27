import FloatingBtn from "./FloatingBtn";
import Header from "./Header";
import Tasks from "./Tasks";

const DayLayout = ({
  colId,
  title,
  toggleShowAdd,
  showAddTask,
  tasks,
  deleteTask,
  clearDone,
  onAdd,
  onClick,
  showDone,
}) => {
  // console.log(colId)
  const taskss = tasks ? (
    <Tasks
      colId={colId}
      tasks={tasks}
      onClick={deleteTask}
      onToggle={clearDone}
      showDone={showDone}
      showAddTask={title === "Today" ? showAddTask : ""}
    />
  ) : (
    "No tasks to show"
  );
  return (
    <div className="relative flex-col space-y-[2px] items-center h-full w-[28.5%] bg-[#F3F6FB] rounded-[50px] shadow-lg shadow-[#C0C0C0] p-2 pb-20">
      <Header
        title={title}
        toggleShowAdd={toggleShowAdd}
        showAddTask={showAddTask}
        onAdd={onAdd}
      />
      <div
        className={`absolute-box ${
          showAddTask && title == "Today" ? "h-[67%]" : "h-[88%]"
        }  bg-white rounded-b-[42px] rounded-t-md`}
      >
        {taskss}
        {title !== "Tomorrow" ? (
          <FloatingBtn title={title} onClick={onClick} showDone={showDone} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default DayLayout;

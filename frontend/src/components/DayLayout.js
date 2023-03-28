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
  nuffSpace,
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
    <div
      className={`relative flex flex-col space-y-[2px] items-center h-full ${
        nuffSpace ? "w-[28.5%]" : "w-[90%]"
      }  bg-[#F3F6FB] rounded-[50px] shadow-lg shadow-gray-400 p-2 pb-20`}
    >
      <Header
        title={title}
        toggleShowAdd={toggleShowAdd}
        showAddTask={showAddTask}
        onAdd={onAdd}
      />
      <div
        className={`flex flex-col px-2 overflow-y-scroll take-remaining-h w-full bg-white rounded-b-[42px] rounded-t-md`}
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

import UserTasks from "./UserTasks";
import Scheduler from "./Scheduler";

const UserComponents = () => {
  return (
    <div className="p-10">
      <div className="grid lg:grid-cols-2 gap-4 items-stretch">
        <div className="h-full">
          <UserTasks />
        </div>
        <div className="h-full">
          <Scheduler />
        </div>
      </div>
    </div>
  );
};

export default UserComponents;
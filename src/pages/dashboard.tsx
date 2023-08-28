import { useModal } from "@/hooks";
import {
  Header,
  FlexBoxContainer,
  Tab,
  TaskList,
  Modal,
  Button,
  Paragraph,
} from "@/components";

const Dashboard = () => {
  const tabContents = [
    <TaskList key="all" filter="" />,
    <TaskList key="completed" filter="completed" />,
    <TaskList key="progress" filter="progress" />,
    <TaskList key="pending" filter="pending" />,
  ];
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <FlexBoxContainer className="justify-center flex-col text-4xl p-8 bg-white  w-full">
      <Header />
      <FlexBoxContainer className="py-12 px-96 justify-around ">
        <Paragraph className="" text="See Your Tasks" />
        <Button
          label={"Create Task"}
          active={true}
          onClick={openModal}
          variant="primary"
          className="py-2 px-8 bg-green-500 text-white  text-2xl"
        >
          Create Task
        </Button>
      </FlexBoxContainer>

      <Tab tabs={["All", "Completed", "Progress", "Pending"]}>
        {tabContents}
      </Tab>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        HeadingLabel="Add Task"
        SubHeadingLabel="Add a new Task to your Task Manager here. Click save when you are done."
        ButtonLabel="Save Task"
        formData=""
        label="save"
      />
    </FlexBoxContainer>
  );
};

export default Dashboard;

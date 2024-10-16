const EmptyList = ({ taskList }) => {
  if (taskList.length === 0) return <p className="display-3">Well Done</p>;
};

export default EmptyList;

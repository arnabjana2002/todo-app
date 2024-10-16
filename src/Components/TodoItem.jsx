const TodoItem = ({ name, due, onDoneClick }) => {
  return (
    <>
      <div className="row myRow">
        <div className="col-5">
          <p>{name}</p>
        </div>
        <div className="col-5">
          <p>{due}</p>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success myBtn"
            onClick={() => onDoneClick(name, due)}>
            Done
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;

import React from 'react';
import styled from 'styled-components';

const TodoItemContainer = styled.div`
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 0.5rem;
  position: relative;
  box-shadow: 0 4px 8px grey;
  border-bottom: 10px solid rgba(0, 255, 0, 0.5);
`;

export const getBorderStyleByDate = (startingDate, currentDate) =>
  startingDate > new Date(currentDate - 8640000 * 2)
    ? '10px solid rgba(0, 0, 255, 0.5)'
    : '10px solid rgba(255, 0, 0, 0.5)';
const TodoItemWithWarning = styled(TodoItemContainer)`
  border-bottom: ${(props) =>
    getBorderStyleByDate(new Date(props.createdAt), Date.now())};
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 12px;
  top: 12px;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 2px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
`;

const CompletedButton = styled(Button)`
  // background-color: #22ee22;
  top: 0;
`;

const InCompletedButton = styled(Button)`
  // background-color: #ee2222;
  margin-left: 8px;
`;

const ToDoListItem = ({
  todo,
  onRemovePressed,
  onMarkAsCompletedPressed,
  onDisplayAlertClicked,
}) => {
  const Container = todo.isCompleted ? TodoItemContainer : TodoItemWithWarning;

  return (
    <Container createdAt={todo.createdAt}>
      {/* {todo.isCompleted ? (
        <h3 style={{ color: 'green' }}>{todo.text} </h3>
      ) : (
        <h3 style={{ color: 'grey' }}>{todo.text} </h3>
      )}
      {todo.isCompleted ? (
        <h6 style={{ color: 'green' }}>
          Created at: &nbsp; {new Date(todo.createdAt).toLocaleString('en-US')}
        </h6>
      ) : (
        <h6 style={{ color: 'grey' }}>
          Created at: &nbsp; {new Date(todo.createdAt).toLocaleString('en-US')}
        </h6>
      )} */}

      <h3>{todo.text} </h3>

      <h6>
        {' '}
        Created at: &nbsp; {new Date(todo.createdAt).toLocaleString('en-US')}
      </h6>

      <ButtonContainer>
        {todo.isCompleted ? null : (
          <CompletedButton
            onClick={() => {
              onMarkAsCompletedPressed(todo.id),
                onDisplayAlertClicked(todo.text);
            }}
          >
            ✔️
          </CompletedButton>
        )}
        <InCompletedButton onClick={() => onRemovePressed(todo.id)}>
          ❌
        </InCompletedButton>
      </ButtonContainer>
    </Container>
  );
};

export default ToDoListItem;

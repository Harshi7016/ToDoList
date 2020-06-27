import React, { useEffect } from 'react';
import ToDoListItem from './ToDoListItem';
import { connect } from 'react-redux';

import {
  getTodosLoading,
  getCompleteTodos,
  getIncompleteTodos,
} from './selectors';
import NewToDoForm from './NewToDoForm';
import { displayAlert } from './thunks';
import { loadTodos, removeTodoRequest, markAsCompletedRequest } from './thunks';
import styled from 'styled-components';

const BigRedText = styled.div`
  font-size: 24px;
  font-family: Ariel;
  color: #ff0000;
  margin-top: 20px;
`;

const BigGreenText = styled.div`
  font-family: Ariel;
  font-size: 24px;
  color: rgb(22, 198, 12);
  margin-top: 20px;
`;

const ListWrapper = styled.div`
  max-width: 80%;
  margin: auto;
  @media screen and (max-width: 600px) {
    max-width: 70%;
    display: block;
  }
`;

const LeftSubDivision = styled.div`
  width: 40%;
  padding: 4%;
  float: left;
  border-radius: 5%;

  background-color: #4f8a8b;
  @media (max-width: 770px) {
    width: 100% !important;
    padding: 2% !important;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: #4f8a8b;
  }
`;
const RightSubDivision = styled.div`
  width: 40%;
  padding: 4%;
  margin-left: auto;
  border-radius: 5%;
  background-color: #f7f5dd;
  margin-top: 3%;
  @media (max-width: 770px) {
    padding: 5% !important;
    width: 100% !important;
    margin-left: 0% !important;
    justify-content: center;
    align-items: center;
    float: left;
    padding: 2% !important;
    display: flex;
  }
`;
const ToDoList = ({
  onRemovePressed,
  onMarkAsCompletedPressed,
  onDisplayAlertClicked,
  isLoading,
  startLoadingTodos,
  completeTodos,
  incompleteTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);
  const loadingMessage = <div>Loading Todos............</div>;
  console.log(incompleteTodos.length);
  const content = (
    <ListWrapper>
      <NewToDoForm />
      <div>
        {incompleteTodos.length > 0 && (
          <LeftSubDivision>
            <div>
              <BigRedText>IncompleteTodos</BigRedText>
              {incompleteTodos.map((todo, i) => (
                <ToDoListItem
                  key={i}
                  todo={todo}
                  onRemovePressed={onRemovePressed}
                  onMarkAsCompletedPressed={onMarkAsCompletedPressed}
                  onDisplayAlertClicked={onDisplayAlertClicked}
                />
              ))}
            </div>
          </LeftSubDivision>
        )}
        {completeTodos.length > 0 && (
          <RightSubDivision>
            <div>
              <BigGreenText>CompleteTodos</BigGreenText>
              {completeTodos.map((todo, i) => (
                <ToDoListItem
                  key={i}
                  todo={todo}
                  onRemovePressed={onRemovePressed}
                  onMarkAsCompletedPressed={onMarkAsCompletedPressed}
                  onDisplayAlertClicked={onDisplayAlertClicked}
                />
              ))}
            </div>
          </RightSubDivision>
        )}
      </div>
    </ListWrapper>
  );
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  isLoading: getTodosLoading(state),
  completeTodos: getCompleteTodos(state),
  incompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onMarkAsCompletedPressed: (id) => dispatch(markAsCompletedRequest(id)),
  onDisplayAlertClicked: (text) => dispatch(displayAlert(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);

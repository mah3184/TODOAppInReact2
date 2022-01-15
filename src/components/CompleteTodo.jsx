import React from "react";

export const CompleteTodo = (props) => {
  const { completeTodos, onClickReturn } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <li>
              <div key={todo} className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickReturn(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

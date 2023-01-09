import React, { useState } from "react";
import styles from './TodoListItem.module.scss';

const TodoListItem = ({
                        label,
                        onDeleted,
                        // onToggleImportant,
                        // onToggleDone,
                        // important,
                        // done,
                      }) => {
  const [done, setDone] = useState(false);
  const [important, setImportant] = useState(false);
  let classNames = `${styles.block}`;
  if (done) {
    classNames += ` ${styles.done}`;
  }
  if (important) {
    classNames += ` ${styles.important}`;
  }


  return (
    <div className={classNames}>
      {/*<span onClick={onToggleDone}>*/}
      <span onClick={() => setDone(!done)}>
{label}
    </span>
      <div className='buttons'>
        <button
          type={'button'}
          className={styles.btn}
          onClick={onDeleted}
        >$
        </button>
        <button
          type={'button'}
          className={styles.btn}
          onClick={() => setImportant(!important)}
          // onClick={onToggleImportant}
        >!
        </button>
      </div>
    </div>
  )
}

export default TodoListItem;
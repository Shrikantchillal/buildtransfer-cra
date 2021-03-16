import * as React from 'react';

const strip = value => value.replace(/[^a-zA-Z\s]/g, "");

function filterOut(text, cursor) {
  const beforeCursor = text.slice(0, cursor);
  const afterCursor = text.slice(cursor, text.length);

  const filterdBeforeCursor = strip(beforeCursor);
  const filterAfterCursor = strip(afterCursor);

  const newText = filterdBeforeCursor + filterAfterCursor;
  const newCursor = filterdBeforeCursor.length;

  return [newText, newCursor];
}

function CursorPosition() {
  const [name, setName] = React.useState("");
  const runAfterUpdate = useRunAfterUpdate();
  const handleNameChange = evt => {
    const input = evt.target;
    const text = input.value;
    const cursor = input.selectionStart;
    const [newName, newCursor] = filterOut(text, cursor);
    setName(newName);

    runAfterUpdate(() => {
      input.selectionStart = newCursor;
      input.selectionEnd = newCursor;
    });
  };
  return (
    <div>
      <input
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />
    </div>
  );
}

function useRunAfterUpdate() {
    const afterPaintRef = React.useRef(null);
    React.useLayoutEffect(() => {
      if (afterPaintRef.current) {
        afterPaintRef.current();
        afterPaintRef.current = null;
      }
    });
    const runAfterUpdate = fn => (afterPaintRef.current = fn);
    return runAfterUpdate;
  }

export default CursorPosition;


import { useCallback, useState } from "react";

const useLists = (initialList, nextId) => {
  const [lists, setLists] = useState(initialList);

  const onRemove = useCallback(
    id => {
      if (lists.length > 1) {
        setLists(lists.filter(list => list.id !== id));
      }
    },
    [lists],
  );
  
  const onInsert = useCallback(
    () => {
      setLists(lists.concat({
        id: nextId.current = lists.length ? Math.max(...lists.map(list => list.id)) + 1 : 1
      }));
    },
    [lists, nextId]
  );
  return [ onInsert, onRemove, lists ]
}

export default useLists;

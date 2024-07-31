import { useStore } from "./store";
import { useMemo } from "react";

export default function Temp({ state }) {
    const tasks =  useStore(store => 
        store.tasks
    );
    const filtered =  useMemo(
        () => tasks.filter((task) => task.state === state),
        [tasks, state]
    )
};
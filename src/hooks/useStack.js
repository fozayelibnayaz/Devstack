import { useState } from "react";
import { toast } from "react-toastify";

export default function useStack() {
  const [stack, setStack] = useState([]);

  function addToStack(tech) {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warn(tech.name + " is already in your stack!");
      return;
    }
    setStack([...stack, tech]);
    toast.success(tech.name + " added to your stack!");
  }

  function removeFromStack(tech) {
    setStack(stack.filter((item) => item.id !== tech.id));
    toast.info(tech.name + " removed from your stack.");
  }

  function removeAll() {
    if (stack.length === 0) {
      toast.info("Your stack is already empty.");
      return;
    }
    toast.info("Stack cleared - " + stack.length + " technologies removed.");
    setStack([]);
  }

  return { stack, addToStack, removeFromStack, removeAll };
}
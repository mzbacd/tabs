import { useRef, useEffect } from "react";
import styles from "./TabButton.module.css";
import clsx from "clsx";

type Props = {
  index: number;
  tabIdx: number;
  id: string;
  onClick: (e: React.MouseEvent) => void;
  tabName: string;
};

export const TabButton: React.FC<Props> = ({
  index,
  tabIdx,
  id,
  onClick,
  tabName,
}) => {
  const isSelected = index === tabIdx;
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (isSelected) {
      ref.current.focus();
    }
  }, [ref, tabIdx]);
  return (
    <button
      type="button"
      role="tab"
      id={`${id}-tab-${index}`}
      data-testid={`${id}-tab-${index}`}
      ref={ref}
      aria-selected={isSelected}
      tabIndex={isSelected ? 0 : -1}
      aria-controls={`${id}-tabpanel-${index}`}
      className={clsx(styles.tabListButton, {
        [styles.active]: isSelected,
      })}
      onClick={onClick}
    >
      {tabName}
    </button>
  );
};

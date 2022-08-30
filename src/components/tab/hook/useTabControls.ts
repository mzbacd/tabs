import { useState, useEffect } from "react";

function getNextTab(idx: number, arrLength: number): number {
  if (idx === arrLength - 1) {
    return 0;
  }

  return idx + 1;
}

function getPrevTab(idx: number, arrLength: number): number {
  if (idx === 0) {
    return arrLength - 1;
  }

  return idx - 1;
}

export const useTabControls = <T>(
  tabs: T[],
  defaultIdx: number,
  onChange?: (currentIdx: number) => void
): readonly [
  tabIdx: number,
  onClick: (idx: number) => void,
  onKeyDown: (e: React.KeyboardEvent) => void
] => {
  const [tabIdx, setTabIdx] = useState(defaultIdx);

  useEffect(() => {
    setTabIdx(defaultIdx);
  }, [defaultIdx]);

  const onClick = (idx: number): void => {
    setTabIdx(idx);
    if (onChange) {
      onChange(idx);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent): void => {
    if (e.key === "ArrowRight") {
      const _idx = getNextTab(tabIdx, tabs.length);
      setTabIdx(_idx);
      if (onChange) {
        onChange(_idx);
      }
    }

    if (e.key === "ArrowLeft") {
      const _idx = getPrevTab(tabIdx, tabs.length);
      setTabIdx(_idx);
      if (onChange) {
        onChange(_idx);
      }
    }

    if (e.key === "Home") {
      setTabIdx(0);
      if (onChange) {
        onChange(0);
      }
    }

    if (e.key === "End") {
      setTabIdx(tabs.length - 1);
      if (onChange) {
        onChange(tabs.length - 1);
      }
    }
  };

  return [tabIdx, onClick, onKeyDown] as const;
};

/* eslint-disable jsx-a11y/interactive-supports-focus */
import clsx from "clsx";

import styles from "./Tabs.module.css";
import { useTabControls } from "./hook/useTabControls";
import { TabButton } from "./components/TabButton/TabButton";
import { TabPanel } from "./components/TabPanel/TabPanel";

type Tab = {
  tabName: string;
  contentTitle: string;
  id: string;
};

type Props = {
  defaultIdx?: number;
  className?: string;
  id: string;
  tabs: Tab[];
  onChange?: (currentIdx: number) => void;
};

export const Tabs: React.FC<Props> = ({
  id: tabsId,
  defaultIdx = 0,
  className,
  tabs,
  onChange,
}) => {
  const [tabIdx, onClick, onKeyDown] = useTabControls(
    tabs,
    defaultIdx,
    onChange
  );

  return (
    <div className={clsx(styles.tabs, className)}>
      <div role="tablist" onKeyDown={onKeyDown}>
        {tabs.map(({ tabName, id }, idx) => (
          <TabButton
            key={id}
            index={idx}
            tabIdx={tabIdx}
            id={tabsId}
            onClick={() => onClick(idx)}
            tabName={tabName}
          />
        ))}
      </div>
      <div className={styles.tabPanel}>
        {tabs.map(({ contentTitle, id }, idx) => (
          <TabPanel
            key={id}
            id={tabsId}
            index={idx}
            tabIdx={tabIdx}
            contentTitle={contentTitle}
          />
        ))}
      </div>
    </div>
  );
};

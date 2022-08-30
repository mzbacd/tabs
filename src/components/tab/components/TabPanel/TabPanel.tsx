import { TabSkeletonContent } from "./TabSkeleton/TabSkeletonContent";
import clsx from "clsx";
import styles from "./TabPanel.module.css";

type Props = {
  id: string;
  index: number;
  tabIdx: number;
  contentTitle: string;
};

export const TabPanel: React.FC<Props> = ({
  id,
  index,
  tabIdx,
  contentTitle,
}) => {
  return (
    <div
      role="tabpanel"
      id={`${id}-tabpanel-${index}`}
      aria-labelledby={`${id}-tab-${index}`}
      tabIndex={index === tabIdx ? 0 : -1}
      className={clsx(styles.tabPanelBox, {
        [styles.tabPanelBoxActive]: index === tabIdx,
      })}
    >
      <TabSkeletonContent title={contentTitle} />
    </div>
  );
};

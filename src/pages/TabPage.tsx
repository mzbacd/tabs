import { useEffect, useState } from "react";
import { Tabs } from "../components/tab";
import styles from "./TabPage.module.css";

const tabs = [
  { tabName: "Tab-1", contentTitle: "Tab-1-content", id: "1" },
  { tabName: "Tab-2", contentTitle: "Tab-2-content", id: "2" },
  { tabName: "Tab-3", contentTitle: "Tab-3-content", id: "3" },
  { tabName: "Tab-4", contentTitle: "Tab-4-content", id: "4" },
];

export const TabPage: React.FC = () => {
  const [tabIdx, setTabIdx] = useState({
    tab1Idx: 0,
    tab2Idx: 0,
    tab3Idx: 0,
  });

  // handle go back/forward and set default idx by directly link
  useEffect(() => {
    function update(): void {
      const query = new URLSearchParams(window.location.search);
      const index1 = parseInt(query.get("tab1"));
      const index2 = parseInt(query.get("tab2"));
      const index3 = parseInt(query.get("tab3"));
      setTabIdx({
        tab1Idx: Number.isNaN(index1) ? 0 : index1,
        tab2Idx: Number.isNaN(index2) ? 0 : index2,
        tab3Idx: Number.isNaN(index3) ? 0 : index3,
      });
    }
    window.addEventListener("popstate", update);
    update();
    return () => window.removeEventListener("popstate", update);
  }, []);

  return (
    <div className={styles.container}>
      <Tabs
        id="myTabs1"
        className={styles.tabs}
        tabs={tabs}
        onChange={(idx) => {
          setTabIdx((prevState) => {
            window.history.pushState(
              null,
              "",
              `?tab1=${idx}&tab2=${prevState.tab2Idx}&tab3=${prevState.tab3Idx}`
            );
            return {
              ...prevState,
              tab1Idx: idx,
            };
          });
        }}
        defaultIdx={tabIdx.tab1Idx}
      />
      <Tabs
        id="myTabs2"
        className={styles.tabs}
        tabs={tabs}
        onChange={(idx) => {
          setTabIdx((prevState) => {
            window.history.pushState(
              null,
              "",
              `?tab1=${prevState.tab1Idx}&tab2=${idx}&tab3=${prevState.tab3Idx}`
            );
            return {
              ...prevState,
              tab2Idx: idx,
            };
          });
        }}
        defaultIdx={tabIdx.tab2Idx}
      />
      <Tabs
        id="myTabs3"
        className={styles.tabs}
        tabs={tabs}
        onChange={(idx) => {
          setTabIdx((prevState) => {
            window.history.pushState(
              null,
              "",
              `?tab1=${prevState.tab1Idx}&tab2=${prevState.tab2Idx}&tab3=${idx}`
            );
            return {
              ...prevState,
              tab3Idx: idx,
            };
          });
        }}
        defaultIdx={tabIdx.tab3Idx}
      />
    </div>
  );
};

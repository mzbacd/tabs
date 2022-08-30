import styles from "./TabSkeletonContent.module.css";

type Props = {
  title: string;
};

export const TabSkeletonContent: React.FC<Props> = ({ title }) => {
  return (
    <>
      <h1 className={styles.tabPanelBoxTitle}>{title}</h1>
      <p className={styles.tabPanelBoxParagraph}>
        <span
          className={styles.tabPanelBoxParagraphLine}
          style={{ width: "95%" }}
        ></span>
        <span
          className={styles.tabPanelBoxParagraphLine}
          style={{ width: "85%" }}
        ></span>
        <span
          className={styles.tabPanelBoxParagraphLine}
          style={{ width: "65%" }}
        ></span>
        <span
          className={styles.tabPanelBoxParagraphLine}
          style={{ width: "75%" }}
        ></span>
        <span
          className={styles.tabPanelBoxParagraphLine}
          style={{ width: "40%" }}
        ></span>
      </p>
      <p className={styles.tabPanelBoxParagraph}>
        <span
          className={styles.tabPanelBoxParagraphLine}
          style={{ width: "95%" }}
        ></span>
        <span
          className={styles.tabPanelBoxParagraphLine}
          style={{ width: "85%" }}
        ></span>
        <span
          className={styles.tabPanelBoxParagraphLine}
          style={{ width: "65%" }}
        ></span>
        <span
          className={styles.tabPanelBoxParagraphLine}
          style={{ width: "75%" }}
        ></span>
        <span
          className={styles.tabPanelBoxParagraphLine}
          style={{ width: "40%" }}
        ></span>
      </p>
      <p className={styles.tabPanelBoxParagraph}>
        <span
          className={styles.tabPanelBoxParagraphLine}
          style={{ width: "95%" }}
        ></span>
        <span
          className={styles.tabPanelBoxParagraphLine}
          style={{ width: "85%" }}
        ></span>
        <span
          className={styles.tabPanelBoxParagraphLine}
          style={{ width: "65%" }}
        ></span>
        <span
          className={styles.tabPanelBoxParagraphLine}
          style={{ width: "75%" }}
        ></span>
        <span
          className={styles.tabPanelBoxParagraphLine}
          style={{ width: "40%" }}
        ></span>
      </p>
      <p className={styles.tabPanelBoxParagraph}>
        <span
          className={styles.tabPanelBoxParagraphLine}
          style={{ width: "95%" }}
        ></span>
        <span
          className={styles.tabPanelBoxParagraphLine}
          style={{ width: "85%" }}
        ></span>
        <span
          className={styles.tabPanelBoxParagraphLine}
          style={{ width: "65%" }}
        ></span>
        <span
          className={styles.tabPanelBoxParagraphLine}
          style={{ width: "75%" }}
        ></span>
        <span
          className={styles.tabPanelBoxParagraphLine}
          style={{ width: "40%" }}
        ></span>
      </p>
      <p className={styles.tabPanelBoxParagraph}>
        <span
          className={styles.tabPanelBoxParagraphLine}
          style={{ width: "95%" }}
        ></span>
        <span
          className={styles.tabPanelBoxParagraphLine}
          style={{ width: "85%" }}
        ></span>
        <span
          className={styles.tabPanelBoxParagraphLine}
          style={{ width: "65%" }}
        ></span>
        <span
          className={styles.tabPanelBoxParagraphLine}
          style={{ width: "75%" }}
        ></span>
        <span
          className={styles.tabPanelBoxParagraphLine}
          style={{ width: "40%" }}
        ></span>
      </p>
    </>
  );
};

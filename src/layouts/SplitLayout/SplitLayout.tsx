import React from "react";
import styles from "@layouts/SplitLayout/SplitLayout.module.scss";
type Props = {
  components: React.ReactNode[];
  direction: Direction;
};

export enum Direction {
  VERTICAL,
  HORIZONTAL,
}

export const SplitLayout = ({ components, direction }: Props) => {
  return (
    <div
      id={styles.wrapper}
      style={{
        flexDirection: direction == Direction.HORIZONTAL ? "row" : "column",
      }}
    >
      {components.map((component) => {
        return component;
      })}
    </div>
  );
};
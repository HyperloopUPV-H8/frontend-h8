import styles from "./LinesChart.module.scss";
import { useMultipleLinesUpdate } from "./useMultipleLinesUpdate";
import { LineDescription } from "./line";
import { VerticalAxis } from "./VerticalAxis/VerticalAxis";
import { LinesWithGrid } from "./LinesWithGrid/LinesWithGrid";

type Props = {
    lineDescriptions: Array<LineDescription>;
    gridDivisions: number;
};

const viewBoxWidth = 1000;
const viewBoxHeight = 1000;

export const LinesChart = ({ lineDescriptions, gridDivisions }: Props) => {
    const { ref, min, max } = useMultipleLinesUpdate(
        viewBoxWidth,
        viewBoxHeight,
        200,
        lineDescriptions
    );

    return (
        <div className={styles.imperativeChartWrapper}>
            <VerticalAxis
                divisions={gridDivisions}
                min={min}
                max={max}
            />
            <LinesWithGrid
                chartRef={ref}
                viewBoxHeight={viewBoxHeight}
                viewBoxWidth={viewBoxWidth}
                gridDivisions={gridDivisions}
            ></LinesWithGrid>
        </div>
    );
};
interface DataPoint {
    label: string;
    value: number;
}

export interface HistogramProps {
    data: DataPoint[];
    colors: string[];
    height: number;
    width: number;
}

export interface BarChartProps {
    data: any;
    height: number;
    width: number;
}

// <类型传参> ColumnProps
interface ListProps<p> {
    // key [id]  字符串 id 是一个占位符   key: value
    [id:string]: p;   // 自定义类型传参
}

export interface ColumnProps {
    _id: string;
    title: string;
    description: string;
}
export interface GlobalDataProps {
    columns: {
        data: ListProps<ColumnProps>;
        currentPage: number;
        total: number;
    }
}
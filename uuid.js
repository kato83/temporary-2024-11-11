import { v4 } from "uuid";
// UUID version 4 の文字列を出力
export const createUuid = () => {
    return v4();
};

export const sample = () => {
    return 'この関数は sample() です';
};

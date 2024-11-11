import { v7 } from "uuid";
/**
 * UUID v7を作成する
 * @returns UUID v7
 */
export const createUuid = () => {
    return v7();
};

export const sample = () => {
    return 'この関数は sample() です';
};

import axiosInstance from '../config/Axios';

export async function getData(url: string) {
    const data = await axiosInstance.get(url);
    if (data.status === 200) {
        return [data.data, null];
    }
    return [null, data];
}

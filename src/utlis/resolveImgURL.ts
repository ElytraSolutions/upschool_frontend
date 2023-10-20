export default function resolveImgURL(url: string) {
    return `${import.meta.env.VITE_IMG_ROOT_URL || '/images'}${url}`;
}

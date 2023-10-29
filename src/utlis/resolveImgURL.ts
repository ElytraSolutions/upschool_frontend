export default function resolveImgURL(url: string) {
    if (url.startsWith('http')) return url;
    let baseUrl = import.meta.env.VITE_IMG_ROOT_URL || '';
    baseUrl = baseUrl.replace(/\/$/, ''); // remove trailing slash from baseUrl
    if (url.startsWith('/')) return `${baseUrl}${url}`;
    return `${baseUrl}/${url}`;
}

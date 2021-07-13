import { resolve } from "url";
import {shareImg} from "../constants/images";

export const getShareParams = () => {
    const url = [
        window.location.protocol,
        "//",
        window.location.host,
        window.location.pathname,
    ].join("");
    const shareText = `#аудиттыпростокосмос`;
    const shareTitle = 'Тайна третьей планеты КПМГ';
    const shareDescription = '#аудиттыпростокосмос';
    const image = resolve(url, shareImg);
    const queryParams = new URLSearchParams();

    queryParams.append("url", url);
    queryParams.append("title", shareTitle);
    queryParams.append("image", image);
    queryParams.append('description', shareDescription);
    queryParams.append("comment", shareText);

    return `http://vk.com/share.php?${queryParams.toString()}`;
};
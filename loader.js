export default function myImageLoader({ src, width, quality }) {
    return `https://masterfed.com/${src}?w=${width}&q=${quality || 100}`
}
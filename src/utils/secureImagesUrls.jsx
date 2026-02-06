export default function secureImagesUrls(path, format, extension) {
  return `${path}/${format}.${extension}`.replace("http://", "https://");
}

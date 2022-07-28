const myLoader = ({ src, width, quality }) => {
  return `https://norebase.com${src}?w=${width}&q=${quality || 75}`;
};

export default myLoader;

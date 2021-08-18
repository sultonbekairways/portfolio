const DanceAnimation = () => {
  return (
    <div className="dance-wrapper">
      <img
        src="/static/about/gojoDance.gif"
        alt="gojoDance"
        className="gojo-dance about-dance"
      />
      <img
        src="/static/about/kakashi.gif"
        alt="kakashi"
        className="kakashi-dance about-dance"
      />
      <img
        src="/static/about/clouds.png"
        alt="clouds"
        className="about-cloud"
      />
      <svg id="about-motionPath" viewBox="-20 0 557 190">
        <path
          id="about-path"
          fill="none"
          d="M100.087,157.001 C136.214,137.154 114.416,141.291 187.47,140.291 262.459,140.291 225.881,119.24 263.867,123.454 321.613,129.86 316.041,172.118 358.866,162.301 444.282,142.718 413.928,155.826 437.565,139.326 "
        />
      </svg>
    </div>
  );
};
export default DanceAnimation;

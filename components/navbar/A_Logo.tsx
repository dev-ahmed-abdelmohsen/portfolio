const A_Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="40"
    height="40"
    {...props}
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop
          offset="0%"
          style={{ stopColor: "rgb(20, 184, 166)", stopOpacity: 1 }}
        />
        <stop
          offset="100%"
          style={{ stopColor: "rgb(59, 130, 246)", stopOpacity: 1 }}
        />
      </linearGradient>
    </defs>
    <path
      d="M50 10 L90 90 L75 90 L60 50 L40 50 L25 90 L10 90 Z"
      fill="url(#grad1)"
    />
    <path
      d="M45 60 L55 60 L50 70 Z"
      fill="url(#grad1)"
      transform="translate(0, -15)"
    />
  </svg>
);

export default A_Logo;

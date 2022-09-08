const STATUS = {
  hovered: "hovered",
  normal: "normal",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Link = ({ page, children }: any) => {
  const [status, setStatus] = useState(STATUS.normal);

  const onMouseEnter = () => {
    setStatus(STATUS.hovered);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.normal);
  };

  return (
    <a
      className={status}
      href={page || "#"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
};

export default Link;

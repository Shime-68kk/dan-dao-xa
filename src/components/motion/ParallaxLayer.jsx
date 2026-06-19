export default function ParallaxLayer({
  as: Tag = "div",
  children,
  className = "",
  strength = 0,
  progress = 0,
  axis = "y",
  style,
  ...props
}) {
  const offset = (progress - 0.5) * strength;
  const transform =
    axis === "x"
      ? `translate3d(${offset}px, 0, 0)`
      : `translate3d(0, ${offset}px, 0)`;

  return (
    <Tag
      className={className}
      style={{
        ...style,
        "--parallax-transform": transform,
        transform: `var(--layer-base-transform, translate3d(0, 0, 0)) ${transform}`,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}

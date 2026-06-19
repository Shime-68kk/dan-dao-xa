import "./ArtboardScene.css";

export default function ArtboardScene({
  baseWidth = 1366,
  baseHeight = 768,
  scale = 1,
  className = "",
  stageClassName = "",
  children,
}) {
  return (
    <div
      className={`artboard-scene ${className}`.trim()}
      style={{
        "--artboard-base-width": `${baseWidth}px`,
        "--artboard-base-height": `${baseHeight}px`,
        "--artboard-scale": scale,
      }}
      data-base-width={baseWidth}
      data-base-height={baseHeight}
    >
      <div className="artboard-scene__shell">
        <div className={`artboard-scene__stage ${stageClassName}`.trim()}>{children}</div>
      </div>
    </div>
  );
}

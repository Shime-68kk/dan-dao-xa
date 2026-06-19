import { useId, useMemo, useState } from "react";
import { laborDeclineData } from "./laborDecline.data.js";

const width = 650;
const height = 405;
const margin = {
  top: 78,
  right: 26,
  bottom: 82,
  left: 74,
};
const yTicks = [0, 10, 20, 30, 40, 50, 60];

function buildSmoothPath(points) {
  if (!points.length) return "";
  if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;

  const commands = [`M ${points[0].x} ${points[0].y}`];

  for (let index = 0; index < points.length - 1; index += 1) {
    const current = points[index];
    const next = points[index + 1];
    const dx = next.x - current.x;
    const tension = 0.42;
    const cp1x = current.x + dx * tension;
    const cp1y = current.y;
    const cp2x = next.x - dx * tension;
    const cp2y = next.y;
    commands.push(`C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${next.x} ${next.y}`);
  }

  return commands.join(" ");
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export default function LaborDeclineChart({ isVisible }) {
  const [activeId, setActiveId] = useState(null);
  const titleId = useId();
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const points = useMemo(
    () =>
      laborDeclineData.map((item, index) => {
        const x =
          margin.left +
          (index / Math.max(1, laborDeclineData.length - 1)) * chartWidth;
        const y = margin.top + (1 - item.value / 60) * chartHeight;
        return { ...item, x, y };
      }),
    [chartHeight, chartWidth]
  );
  const activePoint = points.find((point) => point.id === activeId) ?? null;
  const pathD = buildSmoothPath(points);

  const tooltip = activePoint
    ? {
        x: clamp(activePoint.x - 62, margin.left - 8, width - 136),
        y: clamp(activePoint.y - 74, margin.top - 20, height - margin.bottom - 76),
      }
    : null;

  return (
    <div className={`labor-chart ${isVisible ? "is-visible" : ""}`}>
      <h2 id={titleId} className="scene04-chart-title">
        SỰ SỤT GIẢM LAO ĐỘNG
      </h2>
      <div className="scene04-chart-legend" aria-hidden="true">
        <span />
        SỐ HỘ GĐ
      </div>
      <svg className="labor-chart__svg" viewBox={`0 0 ${width} ${height}`} role="img" aria-labelledby={titleId}>
        <g className="labor-chart__grid">
          {yTicks.map((tick) => {
            const y = margin.top + (1 - tick / 60) * chartHeight;
            return (
              <g key={tick}>
                <line x1={margin.left} x2={width - margin.right} y1={y} y2={y} />
                <text x={margin.left - 18} y={y + 4}>
                  {tick}
                </text>
              </g>
            );
          })}
        </g>

        <g className="labor-chart__axes">
          <line
            x1={margin.left}
            x2={margin.left}
            y1={margin.top}
            y2={height - margin.bottom}
          />
          <line
            x1={margin.left}
            x2={width - margin.right}
            y1={height - margin.bottom}
            y2={height - margin.bottom}
          />
          <text
            className="labor-chart__axis-label labor-chart__axis-label--y"
            x={28}
            y={margin.top + chartHeight / 2}
            transform={`rotate(-90 28 ${margin.top + chartHeight / 2})`}
          >
            SỐ HỘ
          </text>
          <text
            className="labor-chart__axis-label labor-chart__axis-label--x"
            x={margin.left + chartWidth / 2}
            y={height - 12}
          >
            MỐC THỜI GIAN
          </text>
        </g>

        <path className="labor-chart__line scene04-line" d={pathD} pathLength="1" />

        <g className="labor-chart__points">
          {points.map((point, index) => (
            <g
              key={point.id}
              className={`labor-chart__point ${point.id === activeId ? "is-active" : ""}`}
              style={{ "--point-delay": `${760 + index * 160}ms` }}
            >
              <circle className="labor-chart__point-halo" cx={point.x} cy={point.y} r="12" />
              <circle
                className="labor-chart__point-dot scene04-point"
                cx={point.x}
                cy={point.y}
                r={point.id === activeId ? 5.2 : 3.8}
              />
              <circle
                className="labor-chart__point-hit scene04-point-hit"
                cx={point.x}
                cy={point.y}
                r="18"
                fill="transparent"
                stroke="transparent"
                tabIndex="0"
                role="button"
                aria-label={`${point.label}, Số hộ gia đình: ${point.value}`}
                onPointerEnter={() => setActiveId(point.id)}
                onPointerMove={() => setActiveId(point.id)}
                onPointerLeave={() => setActiveId(null)}
                onFocus={() => setActiveId(point.id)}
                onBlur={() => setActiveId(null)}
                onClick={() => setActiveId(point.id)}
                onTouchStart={(event) => {
                  event.preventDefault();
                  setActiveId(point.id);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveId(point.id);
                  }
                }}
              />
            </g>
          ))}
        </g>

        <g className="labor-chart__x-labels">
          {points.map((point) => (
            <text
              key={point.id}
              x={point.x - 8}
              y={height - margin.bottom + 38}
              transform={`rotate(-52 ${point.x - 8} ${height - margin.bottom + 38})`}
            >
              {point.label}
            </text>
          ))}
        </g>
      </svg>

      {tooltip ? (
        <div
          className="scene04-tooltip"
          style={{
            left: `${(tooltip.x / width) * 100}%`,
            top: `${(tooltip.y / height) * 100}%`,
          }}
        >
          <span>{activePoint.label}</span>
          <span>SỐ HỘ GĐ: {activePoint.value}</span>
        </div>
      ) : null}
    </div>
  );
}

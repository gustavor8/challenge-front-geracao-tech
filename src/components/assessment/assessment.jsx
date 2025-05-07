import "./assessment.css";

export default function Assessment({ note }) {
  const percentagem = (note / 6) * 100;

  return (
    <div className="assessmentContainer">
      <svg className="assessmentSvg" viewBox="0 0 100 20">
        <defs>
          <clipPath id="clipStar">
            <rect width={`${percentagem}%`} height="100%" />
          </clipPath>
        </defs>
        <text className="starsGray" x="0" y="15">
          ★★★★★
        </text>
        <text className="starsGold" x="0" y="15" clipPath="url(#clipStar)">
          ★★★★★
        </text>
      </svg>

      <div className="assessment">{note}</div>
    </div>
  );
}

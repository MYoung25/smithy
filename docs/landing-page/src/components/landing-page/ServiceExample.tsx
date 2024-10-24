import React from "react";

const lines: (string | React.ReactElement)[] = [
  <>
    <span className="smithy-highlight-magenta">$</span>version: "2"
  </>,
  "",
  <>
    <span className="smithy-highlight-purple">namespace</span> example.weather
  </>,
  "",
  <>
    <span className="smithy-highlight-purple">service</span> Weather &#123;
  </>,
  '  version: "2005-01-01"',
  "  resources: [ City ]",
  "  operations: [ GetCurrentTime ]",
  "}",
  "",
  <>
    <span className="smithy-highlight-purple">resource</span> City &#123;
  </>,
  "",
  "}",
  "",
  <>
    <span className="smithy-highlight-purple">operation</span> GetCurrentTime
    &#123;
  </>,
  "",
  "}",
];

export const ServiceExample = () => {
  return (
    <div className="m-2">
      <pre className="text-left p-4 rounded">
        <code className="text-left">
          {lines.map((line, i) => (
            <div key={i} className="leading-none">
              <span className="text-smithy-pink">
                {i < 9 ? " " : ""}
                {i + 1}
                &#124;&#32;
              </span>
              {line}
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
};

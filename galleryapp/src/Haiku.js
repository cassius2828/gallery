import tachyons from "tachyons";

const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

export default function Poem() {
  const linesLength = poem.lines.length;
  return (
    <article className="tc ma4">
      {poem.lines.map((line, index) => {
        return index < linesLength - 1 ? (
          <div>
            <p key={index}>{line}</p>
            <hr />
          </div>
        ) : (
          <p key={index}>{line}</p>
        );
      })}
    </article>
  );
}

import tachyons from "tachyons";

export default function Profile() {
  return (
    <>
      <Card
        className="center"
        url="https://i.imgur.com/OKS67lhm.jpg"
        name="Akilu Lemma"
        bio="Aklilu Lemma was a distinguished Ethiopian scientist who discovered
            a natural treatment to schistosomiasis."
      />

      <Message />
    </>
  );
}

export function Message({ name, messageCount }) {
  let itemContent = name;
  let array = [0, 1, 2, 3, 4, 5];
  messageCount = array.indexOf(1);
  return <li>{messageCount > 0 && "whole lotta hoplah!"}</li>;
}

export function Card({ url, name, size = 70, bio }) {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h1 className="tc">Photo</h1>
          <img
            className="avatar br3"
            src={url}
            alt={name}
            width={size}
            height={size}
          />
        </div>
      </div>
      <div className="card br3">
        <div className="card-content">
          <h1 className="tc">About</h1>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
}

import React from "react";

// experiment with refactoring as class component

export default class Landing extends React.Component{
  render() {
    return (
        <article className="m-3 text-left">
          <p >
            Generate court papers for Hong Kong barrister admission in one
            click.
          </p>
          <p>
            For pupils seeking admission in {new Date().getFullYear()}.
          </p>
        </article>
    );
  }
}

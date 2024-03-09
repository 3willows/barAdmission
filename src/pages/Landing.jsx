import React from "react";

// experiment with refactoring as class component

export default class Landing extends React.Component{
  render() {
    return (
      <div className="m-4">
        <article className="m-5 text-center">
          <p className="m-5 text-center">
            Generate court papers for Hong Kong barrister admission in one
            click.
          </p>
          <p className="m-5 text-center">
            For pupils seeking admission in {new Date().getFullYear()}.
          </p>
        </article>
      </div>
    );
  }
}

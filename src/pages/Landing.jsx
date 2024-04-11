import React from "react";

// experiment with refactoring as class component

export default class Landing extends React.Component{
  render() {
    return (
        <div className="flex flex-col m-3 text-left h-full justify-center">
          <p>
            Generate court papers for Hong Kong barrister admission in one
            click.
          </p>
          <p className="my-2">
            For pupils seeking admission in {new Date().getFullYear()}.
          </p>
        </div>
    );
  }
}

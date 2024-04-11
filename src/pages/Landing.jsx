import React from "react";

// experiment with refactoring as class component

export default class Landing extends React.Component{
  render() {
    return (
        <div className="m-3 text-left">
          {/* border-red-400 border-4 */}
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

```javascript
import React from "react";
import { ContextName } from "...";
import getDisplayName from "...";

export default function withHOC<T>(WrappedComponent) {
  const element = function(props: T) {
    return (
      <ContextName.Consumer>
        {({firstProp, secondProp}) => <WrappedComponent {...props} newProp={firstProp} newProp2={secondProp} />}
      </ContextName.Consumer>
    );
  };

  if (element) {
    (element as any).displayName = `withHOC(${getDisplayName(Component)})`;
  }

  return element;
}

```

Inside the component implementation, additional implementation with react-router:
```javascript
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

interface IProps extends IExternalProps, RouteComponentProps<any>{}

interface IExternalProps {
    newProp: any;
    newProp2: any;
}
export class Component extends React.Component<IProps>{
    .....
    .....
    export default React.memo<Omit<IExternalProps, "newProp", "newProp2">>(
        withHOC(withRouter(Component))
);
}
```
https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions

- Conditional type for a prop based on the type of another prop

```typescript
import React from "react";
interface IBaseProps {
  label: string;
}

interface IWithContext<T> extends IBaseProps {
  tag: "with";
  context: T;
  name: keyof T;
  testMethod: (test: string) => void;
}

interface IWithoutContext extends IBaseProps {
  tag: "without";
  name: string;
  testMethod: (test: number) => void;
}

type TProps<T> = IWithContext<T> | IWithoutContext;

export const TestComp = <T extends Record<string, unknown>>(
  props: TProps<T>
) => {
  const testMethod = () => {
    if (props.tag === "with") {
      props.context; // Record<string, unknown>
    }
  };

  return <>Hello World</>;
};
```

- In this example the type for the argument for test method changes based on the tag prop value

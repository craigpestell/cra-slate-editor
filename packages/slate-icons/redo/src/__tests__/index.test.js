import React from "react";
import { Change, Value } from "slate";
import Redo from "../";
import renderer from "react-test-renderer";

test("create a Redo icon", () => {
  const initialValue = Value.fromJSON({
    document: {
      nodes: [
        {
          object: "block",
          type: "paragraph",
          nodes: [
            {
              object: "text",
              leaves: [
                {
                  text: "A line of text in a paragraph."
                }
              ]
            }
          ]
        }
      ]
    }
  });

  const component = renderer.create(
    <Redo change={new Change({ value: initialValue })} />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

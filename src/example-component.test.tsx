// @vitest-environment happy-dom
import Link from "example-component";
import renderer from "react-test-renderer";

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result as renderer.ReactTestRendererJSON;
}

test("Link changes the class when hovered", () => {
  const component = renderer.create(
    <Link page="https://reactjs.org/">React</Link>
  );
  let tree = toJson(component);
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props["onMouseEnter"]();

  // re-rendering
  tree = toJson(component);
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props["onMouseLeave"]();
  // re-rendering
  tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

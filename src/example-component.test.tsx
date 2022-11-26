// @vitest-environment happy-dom
import Link from "example-component";
import renderer from "react-test-renderer";

const toJson = (component: renderer.ReactTestRenderer) => {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);

  return result as renderer.ReactTestRendererJSON;
};

test("Link changes the class when hovered", () => {
  const component = renderer.create(
    <Link page="https://reactjs.org/">React</Link>
  );
  let tree = toJson(component);
  expect(tree).toMatchSnapshot();

  // Manually trigger the callback
  tree.props["onMouseEnter"]();

  // Re-rendering
  tree = toJson(component);
  expect(tree).toMatchSnapshot();

  // Manually trigger the callback
  tree.props["onMouseLeave"]();
  // Re-rendering
  tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

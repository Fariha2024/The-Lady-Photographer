

//src/components/portable.tsx
export async function getStaticProps() {
  const content = [
    {
      _type: "block",
      _key: "someKey",
      style: "normal",
      children: [{ text: "This is a sample paragraph." }],
    },
    {
      _type: "block",
      _key: "anotherKey",
      style: "h2",
      children: [{ text: "This is a heading." }],
    },
  ];

  return {
    props: { content },
  };
}

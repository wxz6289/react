export default function TestFragment() {
  const child = <>
    <div>ha</div>
    <p>paragraph</p>
  </>
  console.log(child);
  return (
    <>
      <div>Fragment</div>
      {child}
    </>
  )
}
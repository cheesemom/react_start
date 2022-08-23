import { useState } from "react";
import Test from "./list";

const App = () => {
  const [num, setNum] = useState(1);
  const numHamdler = () => (setNum(num + 1))
  return (
    <>
      <h1>{num}</h1>

      {/* <button onClick={numHamdler}>num plus</button> */}
      <Test list="우영우" name="변호사" age={27} onClick={numHamdler} />
      <Test list="이준호" name="송무팀" age={27} onClick={numHamdler} />
      <Test list="최수연" name="봄날의햇살" age={27} />
      <Test list="권민우" name="권모술수" age={27} />
      <Test list="정명석" name="서브아빠" age={27} />
    </>
  )
}

export default App;
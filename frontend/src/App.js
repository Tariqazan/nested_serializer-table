import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Category from "./pages/Category";
import NestedTable from "./pages/NestedTable";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Category />}></Route>
        <Route path="/nested-table" element={<NestedTable />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

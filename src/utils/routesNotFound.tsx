import { Route, Routes } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const RoutesNotFound = ({ children }: Props) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<div>not found</div>} />
    </Routes>
  );
};

export default RoutesNotFound;

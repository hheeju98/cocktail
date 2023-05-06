import { useParams } from "react-router-dom";

export default function Error() {
  const { keyword } = useParams();
  return <h3>{keyword}는 존재하지 않는 칵테일 입니다.</h3>;
}

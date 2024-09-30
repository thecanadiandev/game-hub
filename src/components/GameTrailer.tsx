import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  const first = data?.results[0];

  if (error || isLoading) {
    return null;
  }
  return first ? (
    <video
      width={`100%`}
      poster={first.preview}
      src={first.data[480]}
      controls
    ></video>
  ) : null;
};

export default GameTrailer;

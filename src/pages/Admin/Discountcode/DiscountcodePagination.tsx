interface Props {
  hasNextPage: boolean;
  onNext: () => void;
}

export default function DiscountcodePagination({
  hasNextPage,
  onNext,
}: Props) {
  return (
    <div className="pagination">
      {hasNextPage && (
        <button onClick={onNext}>
          Load More
        </button>
      )}
    </div>
  );
}
import { useQuery } from "@tanstack/react-query";
import { fetchAllSkips } from "../../libs/services/skipService";

export function useSkipList() {
  const {
    data: skips,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["skips"],
    queryFn: fetchAllSkips,
  });

  return { skips, error, isFetching };
}

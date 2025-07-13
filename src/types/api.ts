import { UseMutationOptions } from "@tanstack/react-query";

export type SuccessApiResponse<T> = {
  status: "success";
  data: T;
};

export type ErrorApiResponse = {
  status: "error";
  message?: string;
};

export type ApiResponse<T> = SuccessApiResponse<T> | ErrorApiResponse;

export type UseApiReturnValue<T> = {
  isLoading: boolean;
  data?: T;
  error?: Error | null;
};

export type UseMutationProps<T> = Pick<
  UseMutationOptions<T>,
  "onSuccess" | "onError"
>;

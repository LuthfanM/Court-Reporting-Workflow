import type { CurrentMonthTotalResponse } from "@/types/common";

function formatDateTime(value: string) {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function formatIDR(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

function getCurrentMonthLabel(data: CurrentMonthTotalResponse | null) {
  if (!data) {
    return new Intl.DateTimeFormat("id-ID", {
      month: "long",
      year: "numeric",
    }).format(new Date());
  }

  const date = new Date(data.year, data.month - 1, 1);

  return new Intl.DateTimeFormat("id-ID", {
    month: "long",
    year: "numeric",
  }).format(date);
}

export { formatDateTime, formatIDR, getCurrentMonthLabel };

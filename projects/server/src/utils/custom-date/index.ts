import { DateTime } from "luxon";

export class CustomDate extends Date {
  toISOString(): string {
    return DateTime.fromJSDate(this).toISO();
  }
}

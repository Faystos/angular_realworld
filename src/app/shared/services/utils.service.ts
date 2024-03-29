import {Injectable} from "@angular/core";

@Injectable()

export class UtilsService {

  range = (start: number, end: number): number[] => (
    [...Array(end).keys()].map((el: number) => el + start)
  );

}

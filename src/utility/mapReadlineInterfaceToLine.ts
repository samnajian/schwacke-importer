import {Interface} from "readline";
import {fromEvent, Observable} from "rxjs";
import {takeUntil} from "rxjs/operators";

const mapInterfaceToLine = (readLineInterface: Interface): Observable<string> =>
    fromEvent<string>(readLineInterface, "line").pipe(takeUntil(fromEvent(readLineInterface, "close")));

export {mapInterfaceToLine};
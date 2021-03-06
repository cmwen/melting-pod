import xs from 'xstream';
import {run} from '@cycle/run';
import {makeDOMDriver, h1} from '@cycle/dom';

function main() {
    const sinks = {
        DOM: xs.periodic(1000).map(i =>
          h1('' + i + ' seconds elapsed')
        )
      };
      return sinks;
}

  const drivers = {
    DOM: makeDOMDriver('#cyclejs')
  };

  run(main, drivers);

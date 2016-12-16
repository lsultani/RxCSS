import { Observable } from 'rxjs/Observable';

export default function rect(node, sampler = Observable.just(null)) {
  return sampler.map(() => node.getBoundingClientRect());
}

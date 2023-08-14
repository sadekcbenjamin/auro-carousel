// import { example } from '../apiExamples/example';

export function initCarouselIndexExamples(initCount) {
  initCount = initCount || 0;

  try {
    // example();
  } catch {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initCarouselIndexExamples(initCount + 1);
      }, 100);
    }
  }
}
